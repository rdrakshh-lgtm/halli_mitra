from pydantic import BaseModel


class CropDistribution(BaseModel):
    name: str
    value: int


class DashboardResponse(BaseModel):
    total_users: int
    total_farmers: int
    total_crops: int
    total_marketplace_items: int
    total_schemes: int

    crop_distribution: list[CropDistribution]

class RecentCrop(BaseModel):
    crop_name: str
    variety: str
    season: str

class DashboardResponse(BaseModel):
    total_users: int
    total_farmers: int
    total_crops: int
    total_marketplace_items: int
    total_schemes: int

    crop_distribution: list[CropDistribution]
    recent_crops: list[RecentCrop]