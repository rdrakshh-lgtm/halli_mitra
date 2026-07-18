from pydantic import BaseModel, EmailStr


class UpdateProfile(BaseModel):
    full_name: str
    email: EmailStr
    mobile: str


class ChangePassword(BaseModel):
    current_password: str
    new_password: str