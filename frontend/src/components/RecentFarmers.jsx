import { Card, CardContent, Typography } from "@mui/material";

const RecentFarmers = () => {
  return (
    <Card elevation={4} sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6">
          👨‍🌾 Recent Farmers
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Recent farmer registrations will appear here.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecentFarmers;