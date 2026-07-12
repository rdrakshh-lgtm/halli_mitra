from fastapi import APIRouter, Depends

from app.models.user import User
from app.core.dependencies import get_current_user

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.get("/me")
def my_profile(current_user: User = Depends(get_current_user)):
    return current_user