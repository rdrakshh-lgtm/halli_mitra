from fastapi import APIRouter, Depends

from app.models.user import User
from app.core.dependencies import get_current_user

from sqlalchemy.orm import Session
from app.database.connection import get_db

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.get("/me")
def my_profile(current_user: User = Depends(get_current_user)):
    return current_user




@router.get("/")
def get_all_users(db: Session = Depends(get_db)):
    users = db.query(User).all()

    return [
        {
            "id": user.id,
            "full_name": user.full_name,
            "email": user.email,
            "mobile": user.mobile,
            "role": user.role,
        }
        for user in users
    ]