from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database.connection import get_db

from app.models.user import User
from app.models.farmer import Farmer
from app.models.crop import Crop
from app.models.marketplace import Marketplace
from app.models.scheme import Scheme

from app.schemas.dashboard import (
    DashboardResponse,
    CropDistribution,
    RecentCrop,
    RecentFarmer,
)

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/", response_model=DashboardResponse)
def get_dashboard(db: Session = Depends(get_db)):

    # Crop Distribution
    crop_data = (
        db.query(
            Crop.crop_name,
            func.count(Crop.id)
        )
        .group_by(Crop.crop_name)
        .all()
    )

    distribution = [
        CropDistribution(
            name=name,
            value=count
        )
        for name, count in crop_data
    ]

    # Recent Crops
    recent = (
        db.query(Crop)
        .order_by(Crop.id.desc())
        .limit(5)
        .all()
    )

    recent_crops = [
        RecentCrop(
            crop_name=c.crop_name,
            variety=c.variety,
            season=c.season,
        )
        for c in recent
    ]
    recent_farmers = (
            db.query(Farmer)
            .order_by(Farmer.id.desc())
            .limit(5)
            .all()
        )

    farmer_data = [
            RecentFarmer(
                name=f.name,
                phone=f.phone,
                village=f.village,
            )
            for f in recent_farmers
]
    return DashboardResponse(
        total_users=db.query(func.count(User.id)).scalar() or 0,
        total_farmers=db.query(func.count(Farmer.id)).scalar() or 0,
        total_crops=db.query(func.count(Crop.id)).scalar() or 0,
        total_marketplace_items=db.query(func.count(Marketplace.id)).scalar() or 0,
        total_schemes=db.query(func.count(Scheme.id)).scalar() or 0,
        crop_distribution=distribution,
        recent_crops=recent_crops,
        recent_farmers=farmer_data,
    )