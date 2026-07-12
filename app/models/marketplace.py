from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.sql import func

from app.database.connection import Base


class Marketplace(Base):
    __tablename__ = "marketplace"

    id = Column(Integer, primary_key=True, index=True)
    farmer_id = Column(Integer, ForeignKey("farmers.id"))
    crop_name = Column(String(100), nullable=False)
    quantity = Column(Float, nullable=False)
    price = Column(Float, nullable=False)
    location = Column(String(150), nullable=False)
    contact = Column(String(20), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())