from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.schemas.crop import CropCreate, CropResponse
from app.crud.crop import (
    create_crop,
    get_all_crops,
    get_crop,
    update_crop,
    delete_crop,
)

router = APIRouter(
    prefix="/crops",
    tags=["Crop Management"]
)


# Create Crop
@router.post("/", response_model=CropResponse)
def add_crop(crop: CropCreate, db: Session = Depends(get_db)):
    return create_crop(db, crop)


# Get All Crops
@router.get("/", response_model=list[CropResponse])
def read_all_crops(db: Session = Depends(get_db)):
    return get_all_crops(db)


# Get Crop By ID
@router.get("/{crop_id}", response_model=CropResponse)
def read_crop(crop_id: int, db: Session = Depends(get_db)):
    crop = get_crop(db, crop_id)

    if crop is None:
        raise HTTPException(status_code=404, detail="Crop not found")

    return crop


# Update Crop
@router.put("/{crop_id}", response_model=CropResponse)
def edit_crop(crop_id: int, crop: CropCreate, db: Session = Depends(get_db)):
    updated_crop = update_crop(db, crop_id, crop)

    if updated_crop is None:
        raise HTTPException(status_code=404, detail="Crop not found")

    return updated_crop


# Delete Crop
@router.delete("/{crop_id}")
def remove_crop(crop_id: int, db: Session = Depends(get_db)):
    deleted = delete_crop(db, crop_id)

    if deleted is None:
        raise HTTPException(status_code=404, detail="Crop not found")

    return deleted