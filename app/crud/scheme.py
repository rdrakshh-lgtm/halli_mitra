from sqlalchemy.orm import Session

from app.models.scheme import Scheme
from app.schemas.scheme import SchemeCreate


def create_scheme(db: Session, scheme: SchemeCreate):
    db_scheme = Scheme(**scheme.model_dump())
    db.add(db_scheme)
    db.commit()
    db.refresh(db_scheme)
    return db_scheme


def get_schemes(db: Session):
    return db.query(Scheme).all()


def get_scheme(db: Session, scheme_id: int):
    return db.query(Scheme).filter(
        Scheme.id == scheme_id
    ).first()


def delete_scheme(db: Session, scheme_id: int):
    scheme = db.query(Scheme).filter(
        Scheme.id == scheme_id
    ).first()

    if scheme:
        db.delete(scheme)
        db.commit()

    return scheme