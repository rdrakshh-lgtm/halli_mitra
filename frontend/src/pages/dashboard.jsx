import { useEffect, useState } from "react";
import api from "../services/api";

import DashboardCard from "../components/DashboardCard";
import WeatherCard from "../components/WeatherCard";
import NotificationPanel from "../components/NotificationPanel";
import RecentCrops from "../components/RecentCrops";
import RecentFarmers from "../components/RecentFarmers";
import AITipCard from "../components/AITipCard";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = [
  "#4CAF50",
  "#FFC107",
  "#2196F3",
  "#F44336",
  "#9C27B0",
];

const Dashboard = () => {
  const [stats, setStats] = useState({
    total_users: 0,
    total_farmers: 0,
    total_crops: 0,
    total_marketplace_items: 0,
    total_schemes: 0,
    crop_distribution: [],
    recent_crops: [],
    recent_farmers: [],
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await api.get("/dashboard/");
        setStats(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDashboard();
  }, []);

  const monthlyData = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 35 },
    { month: "Mar", value: 40 },
    { month: "Apr", value: 30 },
    { month: "May", value: 50 },
    { month: "Jun", value: 45 },
  ];

  return (
    <div style={{ padding: 30 }}>

      <h1
        style={{
          marginBottom: 25,
          fontWeight: "bold",
        }}
      >
        🌾 Halli Mitra Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
          gap: 20,
        }}
      >
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
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 25,
          marginTop: 35,
        }}
      >
        <div className="card">
          <h2>📈 Crop Distribution</h2>

          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={stats.crop_distribution}
                dataKey="value"
                outerRadius={100}
                label
              >
                {stats.crop_distribution.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h2>📊 Monthly Activity</h2>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 25,
          marginTop: 25,
        }}
      >
        <WeatherCard />
        <NotificationPanel />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 25,
          marginTop: 25,
        }}
      >
        <RecentCrops crops={stats.recent_crops} />
        <RecentFarmers farmers={stats.recent_farmers} />
      </div>

      <div style={{ marginTop: 25 }}>
        <AITipCard />
      </div>

    </div>
  );
};

export default Dashboard;