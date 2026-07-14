import { Card, CardContent, Typography, Box } from "@mui/material";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        background: "linear-gradient(135deg,#ffffff,#f8fafc)",
        boxShadow: "0 8px 25px rgba(0,0,0,.08)",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 35px rgba(0,0,0,.15)",
        },
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            color="#455A64"
          >
            {title}
          </Typography>

          <Typography fontSize={34}>
            {icon}
          </Typography>
        </Box>

        <Typography
          variant="h3"
          fontWeight="bold"
          color="#2E7D32"
          mt={3}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;