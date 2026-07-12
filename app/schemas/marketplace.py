from pydantic import BaseModel


class MarketplaceCreate(BaseModel):
    farmer_id: int
    crop_name: str
    quantity: float
    price: float
    location: str
    contact: str


class MarketplaceResponse(MarketplaceCreate):
    id: int

    class Config:
        from_attributes = True