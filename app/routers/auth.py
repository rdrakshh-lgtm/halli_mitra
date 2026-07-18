import random
import string

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.user import User
from app.schemas.user import UserRegister, UserResponse
from app.core.security import hash_password

from app.schemas.token import LoginRequest, TokenResponse
from app.core.auth import create_access_token
from app.core.security import verify_password

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


def generate_referral():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))


@router.post("/register", response_model=UserResponse)
def register(user: UserRegister, db: Session = Depends(get_db)):
    try:
        existing_email = db.query(User).filter(User.email == user.email).first()

        if existing_email:
            raise HTTPException(status_code=400, detail="Email already exists")

        existing_mobile = db.query(User).filter(User.mobile == user.mobile).first()

        if existing_mobile:
            raise HTTPException(status_code=400, detail="Mobile already exists")

        new_user = User(
            full_name=user.full_name,
            email=user.email,
            mobile=user.mobile,
            password=hash_password(user.password),
            sponsor_code=user.sponsor_code,
            referral_code=generate_referral(),
            role="user"
        )

        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return new_user

    except Exception as e:
        db.rollback()
        print("=" * 60)
        print("ERROR:", type(e).__name__)
        print(e)
        print("=" * 60)
        raise


@router.post("/login", response_model=TokenResponse)
def login(user: LoginRequest, db: Session = Depends(get_db)):

    db_user = db.query(User).filter(User.email == user.email).first()

    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid Email or Password")

    if not verify_password(user.password, db_user.password):
        raise HTTPException(status_code=401, detail="Invalid Email or Password")

    token = create_access_token(
    {
        "sub": db_user.email,
        "user_id": db_user.id,
        "role": db_user.role
    }
)

    print("=" * 50)
    print("TOKEN =", token)
    print("=" * 50)

    return {
    "access_token": token,
    "token_type": "bearer",
    "role": db_user.role,
}