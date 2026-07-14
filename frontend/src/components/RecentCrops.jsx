import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const RecentCrops = ({ crops }) => {
  return (
    <Card elevation={4} sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          🌱 Recent Crops
        </Typography>

        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell><b>Crop</b></TableCell>
              <TableCell><b>Variety</b></TableCell>
              <TableCell><b>Season</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {crops.length > 0 ? (
              crops.map((crop, index) => (
                <TableRow key={index}>
                  <TableCell>{crop.crop_name}</TableCell>
                  <TableCell>{crop.variety}</TableCell>
                  <TableCell>{crop.season}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No crops found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentCrops;