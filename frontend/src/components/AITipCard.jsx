import { Card, CardContent, Typography } from "@mui/material";

const AITipCard = () => {
  return (
    <Card elevation={4} sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6">
          🤖 AI Farming Tip
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Monitor soil moisture regularly to improve crop yield and reduce water waste.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AITipCard;