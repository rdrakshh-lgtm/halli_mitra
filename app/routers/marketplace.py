from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.schemas.marketplace import MarketplaceCreate, MarketplaceResponse
from app.crud.marketplace import (
    create_marketplace,
    get_marketplaces,
    get_marketplace,
    delete_marketplace,
)

router = APIRouter(
    prefix="/marketplace",
    tags=["Marketplace"]
)


@router.post("/", response_model=MarketplaceResponse)
def add_marketplace(
    marketplace: MarketplaceCreate,
    db: Session = Depends(get_db)
):
    return create_marketplace(db, marketplace)


@router.get("/", response_model=list[MarketplaceResponse])
def list_marketplaces(db: Session = Depends(get_db)):
    return get_marketplaces(db)


@router.get("/{marketplace_id}", response_model=MarketplaceResponse)
def get_marketplace_by_id(
    marketplace_id: int,
    db: Session = Depends(get_db)
):
    marketplace = get_marketplace(db, marketplace_id)

    if not marketplace:
        raise HTTPException(
            status_code=404,
            detail="Marketplace item not found"
        )

    return marketplace


@router.delete("/{marketplace_id}")
def remove_marketplace(
    marketplace_id: int,
    db: Session = Depends(get_db)
):
    marketplace = delete_marketplace(db, marketplace_id)

    if not marketplace:
        raise HTTPException(
            status_code=404,
            detail="Marketplace item not found"
        )

    return {"message": "Marketplace item deleted successfully"}