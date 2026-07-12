from sqlalchemy import Column, Integer, String, Boolean, Float, DateTime
from sqlalchemy.sql import func
from app.database.connection import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String(100), nullable=False)

    email = Column(String(100), unique=True, nullable=False)

    mobile = Column(String(15), unique=True, nullable=False)

    password = Column(String(255), nullable=False)

    referral_code = Column(String(30), unique=True)

    sponsor_code = Column(String(30))

    role = Column(String(20), default="user")

    wallet_balance = Column(Float, default=0)

    total_commission = Column(Float, default=0)

    is_active = Column(Boolean, default=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())

    updated_at = Column(DateTime(timezone=True),
                        server_default=func.now(),
                        onupdate=func.now())