from pydantic import BaseModel


class DashboardResponse(BaseModel):
    total_users: int
    total_farmers: int
    total_crops: int
    total_marketplace_items: int
    total_schemes: int