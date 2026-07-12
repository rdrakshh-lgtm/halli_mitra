from fastapi import APIRouter, HTTPException

from app.schemas.weather import WeatherResponse
from app.services.weather_service import get_weather

router = APIRouter(
    prefix="/weather",
    tags=["Weather"]
)


@router.get("/{city}", response_model=WeatherResponse)
def weather(city: str):
    result = get_weather(city)

    if result is None:
        raise HTTPException(
            status_code=404,
            detail="City not found"
        )

    return result