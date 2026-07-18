from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.contact import ContactMessage
from app.schemas.contact import ContactCreate, ContactResponse

router = APIRouter(
    prefix="/contact",
    tags=["Contact Messages"]
)


@router.post("/", response_model=ContactResponse)
def create_message(contact: ContactCreate, db: Session = Depends(get_db)):
    message = ContactMessage(
        name=contact.name,
        email=contact.email,
        subject=contact.subject,
        message=contact.message,
    )

    db.add(message)
    db.commit()
    db.refresh(message)

    return message


@router.get("/", response_model=list[ContactResponse])
def get_messages(db: Session = Depends(get_db)):
    return (
        db.query(ContactMessage)
        .order_by(ContactMessage.created_at.desc())
        .all()
    )


@router.get("/{message_id}", response_model=ContactResponse)
def get_message(message_id: int, db: Session = Depends(get_db)):
    message = (
        db.query(ContactMessage)
        .filter(ContactMessage.id == message_id)
        .first()
    )

    if not message:
        raise HTTPException(status_code=404, detail="Message not found")

    return message


@router.delete("/{message_id}")
def delete_message(message_id: int, db: Session = Depends(get_db)):
    message = (
        db.query(ContactMessage)
        .filter(ContactMessage.id == message_id)
        .first()
    )

    if not message:
        raise HTTPException(status_code=404, detail="Message not found")

    db.delete(message)
    db.commit()

    return {"message": "Deleted successfully"}