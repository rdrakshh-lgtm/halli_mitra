from sqlalchemy.orm import Session

from app.models.notification import Notification
from app.schemas.notification import NotificationCreate


def create_notification(db: Session, notification: NotificationCreate):
    db_notification = Notification(**notification.model_dump())
    db.add(db_notification)
    db.commit()
    db.refresh(db_notification)
    return db_notification


def get_notifications(db: Session):
    return db.query(Notification).all()


def get_notification(db: Session, notification_id: int):
    return (
        db.query(Notification)
        .filter(Notification.id == notification_id)
        .first()
    )


def delete_notification(db: Session, notification_id: int):
    notification = (
        db.query(Notification)
        .filter(Notification.id == notification_id)
        .first()
    )

    if notification:
        db.delete(notification)
        db.commit()

    return notification