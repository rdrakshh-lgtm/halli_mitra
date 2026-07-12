from pydantic import BaseModel


class ShopCreate(BaseModel):
    shop_name: str
    owner_name: str
    mobile: str
    category: str
    location: str
    opening_time: str
    delivery_available: bool


class ShopResponse(BaseModel):
    id: int
    shop_name: str
    owner_name: str
    mobile: str
    category: str
    location: str
    verification_status: str

    class Config:
        from_attributes = True