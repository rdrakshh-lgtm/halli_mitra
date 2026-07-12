from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.schemas.scheme import SchemeCreate, SchemeResponse
from app.crud.scheme import (
    create_scheme,
    get_schemes,
    get_scheme,
    delete_scheme
)

router = APIRouter(
    prefix="/schemes",
    tags=["Government Schemes"]
)


@router.post("/", response_model=SchemeResponse)
def add_scheme(
    scheme: SchemeCreate,
    db: Session = Depends(get_db)
):
    return create_scheme(db, scheme)


@router.get("/", response_model=list[SchemeResponse])
def list_schemes(db: Session = Depends(get_db)):
    return get_schemes(db)


@router.get("/{scheme_id}", response_model=SchemeResponse)
def get_scheme_by_id(
    scheme_id: int,
    db: Session = Depends(get_db)
):
    scheme = get_scheme(db, scheme_id)

    if not scheme:
        raise HTTPException(
            status_code=404,
            detail="Scheme not found"
        )

    return scheme


@router.delete("/{scheme_id}")
def remove_scheme(
    scheme_id: int,
    db: Session = Depends(get_db)
):
    scheme = delete_scheme(db, scheme_id)

    if not scheme:
        raise HTTPException(
            status_code=404,
            detail="Scheme not found"
        )

    return {"message": "Scheme deleted successfully"}