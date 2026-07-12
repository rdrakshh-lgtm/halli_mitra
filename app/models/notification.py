from sqlalchemy import Column, Integer, String

from app.database.connection import Base


class Notification(Base):
    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255))
    message = Column(String(1000))
    category = Column(String(100))