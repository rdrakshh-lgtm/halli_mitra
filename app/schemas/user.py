from pydantic import BaseModel, EmailStr


class UserRegister(BaseModel):
    full_name: str
    email: EmailStr
    mobile: str
    password: str
    sponsor_code: str | None = None


class UserResponse(BaseModel):
    id: int
    full_name: str
    email: str
    mobile: str

    class Config:
        from_attributes = True