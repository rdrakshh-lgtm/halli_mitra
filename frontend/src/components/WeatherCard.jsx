import { useEffect, useState } from "react";
import api from "../services/api";

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await api.get("/weather/Mysuru");
        setWeather(res.data);
      } catch (err) {
        console.error(err);
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
          <p>🌥️ Condition: {weather.description}</p>
        </>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default WeatherCard;