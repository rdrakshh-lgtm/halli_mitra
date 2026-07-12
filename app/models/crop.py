from sqlalchemy import Column, Integer, String, Date, ForeignKey
from sqlalchemy.orm import relationship

from app.database.connection import Base


class Crop(Base):
    __tablename__ = "crops"

    id = Column(Integer, primary_key=True, index=True)
    farmer_id = Column(Integer, ForeignKey("farmers.id"), nullable=False)

    crop_name = Column(String(100), nullable=False)
    variety = Column(String(100), nullable=False)
    area = Column(String(50), nullable=False)
    season = Column(String(50), nullable=False)
    sowing_date = Column(Date, nullable=False)

    # Relationship with Farmer
    farmer = relationship("Farmer", back_populates="crops")