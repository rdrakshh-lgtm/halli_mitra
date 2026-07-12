from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime
from sqlalchemy.sql import func

from app.database.connection import Base


class Shop(Base):
    __tablename__ = "shops"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer, ForeignKey("users.id"))

    shop_name = Column(String(150), nullable=False)

    owner_name = Column(String(100), nullable=False)

    mobile = Column(String(15), nullable=False)

    category = Column(String(100))

    location = Column(String(255))

    shop_photo = Column(String(255))

    opening_time = Column(String(50))

    delivery_available = Column(Boolean, default=False)

    verification_status = Column(String(20), default="Pending")

    is_active = Column(Boolean, default=True)

    created_at = Column(DateTime(timezone=True),
                        server_default=func.now())