from sqlalchemy import Column, Integer, String, Text
from app.database.connection import Base


class Scheme(Base):
    __tablename__ = "schemes"

    id = Column(Integer, primary_key=True, index=True)
    scheme_name = Column(String(150), nullable=False)
    description = Column(Text, nullable=False)
    category = Column(String(100), nullable=False)
    state = Column(String(100), nullable=False)
    eligibility = Column(Text, nullable=False)
    official_link = Column(String(255), nullable=False)