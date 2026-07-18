from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.core.dependencies import get_current_user
from app.models.user import User
from app.schemas.settings import UpdateProfile, ChangePassword
from app.core.security import hash_password, verify_password

router = APIRouter(
    prefix="/settings",
    tags=["Settings"]
)


@router.get("/profile")
def get_profile(current_user: User = Depends(get_current_user)):
    return {
        "full_name": current_user.full_name,
        "email": current_user.email,
        "mobile": current_user.mobile,
        "role": current_user.role,
    }


@router.put("/profile")
def update_profile(
    profile: UpdateProfile,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    current_user.full_name = profile.full_name
    current_user.email = profile.email
    current_user.mobile = profile.mobile

    db.commit()
    db.refresh(current_user)

    return {"message": "Profile updated successfully"}


@router.put("/change-password")
def change_password(
    passwords: ChangePassword,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if not verify_password(passwords.current_password, current_user.password):
        raise HTTPException(status_code=400, detail="Current password is incorrect")

    current_user.password = hash_password(passwords.new_password)

    db.commit()

    return {"message": "Password changed successfully"}