from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.schemas.farmer import FarmerCreate, FarmerResponse
from app.crud.farmer import create_farmer

router = APIRouter(
    prefix="/farmers",
    tags=["Farmers"]
)


@router.post("/", response_model=FarmerResponse)
def add_farmer(farmer: FarmerCreate, db: Session = Depends(get_db)):
    return create_farmer(db, farmer)