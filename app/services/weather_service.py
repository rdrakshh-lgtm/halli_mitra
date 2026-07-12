import requests

# Replace this with your actual OpenWeather API key
from app.core.config import settings


def get_weather(city: str):
    url = (
    f"https://api.openweathermap.org/data/2.5/weather"
    f"?q={city}&appid={settings.WEATHER_API_KEY}&units=metric"
)

    try:
        response = requests.get(url)

        if response.status_code != 200:
            return None

        data = response.json()

        return {
            "city": data["name"],
            "temperature": data["main"]["temp"],
            "humidity": data["main"]["humidity"],
            "wind_speed": data["wind"]["speed"],
            "description": data["weather"][0]["description"]
        }

    except Exception as e:
        print(f"Weather API Error: {e}")
        return None