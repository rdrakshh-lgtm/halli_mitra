from datetime import date
from pydantic import BaseModel


class CropCreate(BaseModel):
    farmer_id: int
    crop_name: str
    variety: str
    area: str
    season: str
    sowing_date: date


class CropResponse(BaseModel):
    id: int
    farmer_id: int
    crop_name: str
    variety: str
    area: str
    season: str
    sowing_date: date

    class Config:
        from_attributes = True