import { useEffect, useState } from "react";

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "/.netlify/functions/weather?city=Mysuru"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch weather");
        }

        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error("Weather Error:", err);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="card">
      <h2>🌦️ Today's Weather</h2>

      {weather ? (
        <>
          <h3>{weather.city}</h3>
          <p>🌡️ Temperature: {weather.temperature}°C</p>
          <p>💧 Humidity: {weather.humidity}%</p>
          <p>💨 Wind Speed: {weather.wind_speed} m/s</p>
          <p>🌥️ Condition: {weather.description}</p>
        </>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default WeatherCard;