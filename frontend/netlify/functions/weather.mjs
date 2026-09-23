import fetch from "node-fetch";

export default async (request) => {
  try {
    const url = new URL(request.url);
    const city = url.searchParams.get("city");

    if (!city) {
      return Response.json(
        { detail: "City is required" },
        { status: 400 }
      );
    }

    const apiUrl =
      `https://api.openweathermap.org/data/2.5/weather` +
      `?q=${encodeURIComponent(city)}` +
      `&appid=${process.env.WEATHER_API_KEY}` +
      `&units=metric`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      return Response.json(
        { detail: "City not found" },
        { status: 404 }
      );
    }

    const data = await response.json();

    return Response.json({
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      description: data.weather[0].description
    });
  } catch (error) {
    console.error("WEATHER ERROR:", error);

    return Response.json(
      { detail: "Weather API error" },
      { status: 500 }
    );
  }
};