from sqlalchemy import Column, Integer, String, Float
from app.database.connection import Base

class Marketplace(Base):
    __tablename__ = "marketplace"

    id = Column(Integer, primary_key=True, index=True)
    farmer_id = Column(Integer)
    crop_name = Column(String(100))
    quantity = Column(Float)
    price = Column(Float)
    location = Column(String(100))
    contact = Column(String(20))

    image = Column(String(255), nullable=True)