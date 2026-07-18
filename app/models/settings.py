from sqlalchemy import Column, Integer, String
from app.database.connection import Base


class Settings(Base):
    __tablename__ = "settings"

    id = Column(Integer, primary_key=True, index=True)

    admin_name = Column(String(100))
    admin_email = Column(String(120))
    admin_phone = Column(String(20))

    website_name = Column(String(150))
    support_email = Column(String(120))