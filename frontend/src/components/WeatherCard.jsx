import { Card, CardContent, Typography } from "@mui/material";

const WeatherCard = () => {
  return (
    <Card elevation={4} sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6">🌦 Today's Weather</Typography>

        <Typography sx={{ mt: 2 }}>
          🌡 Temperature: 29°C
        </Typography>

        <Typography>
          💧 Humidity: 68%
        </Typography>

        <Typography>
          🌬 Wind: 12 km/h
        </Typography>

        <Typography>
          ☀️ Condition: Sunny
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;