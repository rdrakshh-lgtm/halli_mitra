from sqlalchemy.orm import Session

from app.models.farmer import Farmer
from app.schemas.farmer import FarmerCreate


def create_farmer(db: Session, farmer: FarmerCreate):
    db_farmer = Farmer(
        name=farmer.name,
        phone=farmer.phone,
        village=farmer.village,
        district=farmer.district,
        state=farmer.state
    )

    db.add(db_farmer)
    db.commit()
    db.refresh(db_farmer)

    return db_farmer