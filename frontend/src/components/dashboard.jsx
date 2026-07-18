import { useEffect, useState } from "react";
import api from "../services/api";
import { Grid, Typography } from "@mui/material";

import DashboardCard from "./DashboardCard";
import WeatherCard from "./WeatherCard";
import NotificationPanel from "./NotificationPanel";
import RecentCrops from "./RecentCrops";
import RecentFarmers from "./RecentFarmers";
import AITipCard from "./AITipCard";

const Dashboard = () => {
  const [stats, setStats] = useState({
    total_users: 0,
    total_farmers: 0,
    total_crops: 0,
    total_marketplace_items: 0,
    total_schemes: 0,
  });

  const loadDashboard = async () => {
    try {
      const response = await api.get("/dashboard/");
      setStats(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load dashboard.");
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

return (
  <div style={{ padding: 30 }}>
    <Typography variant="h4" fontWeight="bold" gutterBottom>
      🌾 Halli Mitra Dashboard
    </Typography>

    <Grid container spacing={3}>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <DashboardCard
    title="Total Crops"
    value={stats.total_crops}
    icon="🌱"
/>

<DashboardCard
    title="Total Farmers"
    value={stats.total_farmers}
    icon="👨‍🌾"
/>

<DashboardCard
    title="Users"
    value={stats.total_users}
    icon="👥"
/>

<DashboardCard
    title="Marketplace"
    value={stats.total_marketplace_items}
    icon="🛒"
/>

<DashboardCard
    title="Schemes"
    value={stats.total_schemes}
    icon="📢"
/>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <WeatherCard />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <NotificationPanel />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <RecentCrops />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <RecentFarmers />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <AITipCard />
      </Grid>

    </Grid>
  </div>
);
};

export default Dashboard;