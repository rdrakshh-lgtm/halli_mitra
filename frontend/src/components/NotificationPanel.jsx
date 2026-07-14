import { Card, CardContent, Typography } from "@mui/material";

const NotificationPanel = () => {
  return (
    <Card elevation={4} sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6">
          🔔 Notifications
        </Typography>

        <ul>
          <li>Weather alert tomorrow</li>
          <li>Government subsidy available</li>
          <li>Market prices updated</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default NotificationPanel;