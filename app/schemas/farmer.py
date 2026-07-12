from pydantic import BaseModel


class FarmerCreate(BaseModel):
    name: str
    phone: str
    village: str
    district: str
    state: str


class FarmerResponse(FarmerCreate):
    id: int

    class Config:
        from_attributes = True