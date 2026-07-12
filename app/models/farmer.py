from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from app.database.connection import Base


class Farmer(Base):
    __tablename__ = "farmers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    phone = Column(String(15), unique=True, nullable=False)
    village = Column(String(100), nullable=False)
    district = Column(String(100), nullable=False)
    state = Column(String(100), nullable=False)

    # Relationship with Crop
    crops = relationship(
        "Crop",
        back_populates="farmer",
        cascade="all, delete-orphan"
    )