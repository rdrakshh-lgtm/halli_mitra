from sqlalchemy.orm import Session

from app.models.marketplace import Marketplace
from app.schemas.marketplace import MarketplaceCreate


def create_marketplace(db: Session, marketplace: MarketplaceCreate):
    db_marketplace = Marketplace(**marketplace.model_dump())
    db.add(db_marketplace)
    db.commit()
    db.refresh(db_marketplace)
    return db_marketplace


def get_marketplaces(db: Session):
    return db.query(Marketplace).all()


def get_marketplace(db: Session, marketplace_id: int):
    return db.query(Marketplace).filter(
        Marketplace.id == marketplace_id
    ).first()


def delete_marketplace(db: Session, marketplace_id: int):
    marketplace = db.query(Marketplace).filter(
        Marketplace.id == marketplace_id
    ).first()

    if marketplace:
        db.delete(marketplace)
        db.commit()

    return marketplace