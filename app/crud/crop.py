from sqlalchemy.orm import Session

from app.models.crop import Crop
from app.schemas.crop import CropCreate


def create_crop(db: Session, crop: CropCreate):
    db_crop = Crop(
        farmer_id=crop.farmer_id,
        crop_name=crop.crop_name,
        variety=crop.variety,
        area=crop.area,
        season=crop.season,
        sowing_date=crop.sowing_date,
    )

    db.add(db_crop)
    db.commit()
    db.refresh(db_crop)

    return db_crop


def get_all_crops(db: Session):
    return db.query(Crop).all()


def get_crop(db: Session, crop_id: int):
    return db.query(Crop).filter(Crop.id == crop_id).first()


def update_crop(db: Session, crop_id: int, crop: CropCreate):
    db_crop = db.query(Crop).filter(Crop.id == crop_id).first()

    if not db_crop:
        return None

    db_crop.farmer_id = crop.farmer_id
    db_crop.crop_name = crop.crop_name
    db_crop.variety = crop.variety
    db_crop.area = crop.area
    db_crop.season = crop.season
    db_crop.sowing_date = crop.sowing_date

    db.commit()
    db.refresh(db_crop)

    return db_crop


def delete_crop(db: Session, crop_id: int):
    db_crop = db.query(Crop).filter(Crop.id == crop_id).first()

    if not db_crop:
        return None

    db.delete(db_crop)
    db.commit()

    return {"message": "Crop deleted successfully"}