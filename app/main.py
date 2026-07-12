from fastapi import FastAPI

from app.database.connection import Base, engine
from app.models.user import User

from app.routers.auth import router as auth_router
from app.routers.user import router as user_router
from app.routers.farmer import router as farmer_router
from app.routers.crop import router as crop_router
from app.routers import weather
from app.routers.marketplace import router as marketplace_router
from app.models.scheme import Scheme
from app.routers.scheme import router as scheme_router
from app.routers.ai import router as ai_router
from app.routers.upload import router as upload_router
from app.routers.disease import router as disease_router
from app.routers.dashboard import router as dashboard_router
from app.models.notification import Notification
from app.routers.notification import router as notification_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Halli Mitra API",
    version="1.0"
)

app.include_router(auth_router)
app.include_router(user_router)
app.include_router(farmer_router)
app.include_router(crop_router)
app.include_router(weather.router)
app.include_router(marketplace_router)
app.include_router(scheme_router)
app.include_router(ai_router)
app.include_router(upload_router)
app.include_router(disease_router)
app.include_router(dashboard_router)
app.include_router(notification_router)

Base.metadata.create_all(bind=engine)


@app.get("/")
def home():
    return {"message": "Welcome to Halli Mitra API"}