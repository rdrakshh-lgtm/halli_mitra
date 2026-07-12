from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database.connection import get_db

from app.models.user import User
from app.models.farmer import Farmer
from app.models.crop import Crop
from app.models.marketplace import Marketplace
from app.models.scheme import Scheme

from app.schemas.dashboard import DashboardResponse

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/", response_model=DashboardResponse)
def get_dashboard(db: Session = Depends(get_db)):

    return DashboardResponse(
        total_users=db.query(func.count(User.id)).scalar() or 0,
        total_farmers=db.query(func.count(Farmer.id)).scalar() or 0,
        total_crops=db.query(func.count(Crop.id)).scalar() or 0,
        total_marketplace_items=db.query(func.count(Marketplace.id)).scalar() or 0,
        total_schemes=db.query(func.count(Scheme.id)).scalar() or 0,
    )