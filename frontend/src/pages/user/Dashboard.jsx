import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

import "./../../styles/Dashboard.css";

const cropData = [
  { name: "Rice", value: 35 },
  { name: "Wheat", value: 25 },
  { name: "Cotton", value: 20 },
  { name: "Maize", value: 20 },
];

const userData = [
  { name: "Farmers", value: 70 },
  { name: "Users", value: 25 },
  { name: "Admins", value: 5 },
];

const lineData = [
  { month: "Jan", users: 10 },
  { month: "Feb", users: 18 },
  { month: "Mar", users: 25 },
  { month: "Apr", users: 40 },
  { month: "May", users: 50 },
  { month: "Jun", users: 65 },
];

const barData = [
  { month: "Jan", crops: 20 },
  { month: "Feb", crops: 35 },
  { month: "Mar", crops: 28 },
  { month: "Apr", crops: 50 },
  { month: "May", crops: 45 },
  { month: "Jun", crops: 60 },
];

const COLORS = ["#16a34a", "#f59e0b", "#3b82f6", "#ef4444"];

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <h1>🌾 Halli Mitra Admin Dashboard</h1>

      <div className="charts-row">
        <div className="chart-card">
          <h3>Crop Distribution</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={cropData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {cropData.map((entry, index) => (
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

        <div className="chart-card">
          <h3>User Distribution</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={userData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={100}
              >
                {userData.map((entry, index) => (
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
      </div>

      <div className="chart-card">
        <h3>User Registration Trend</h3>

        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#16a34a"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-card">
        <h3>Crop Statistics</h3>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Bar dataKey="crops" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="activity-card">
        <h3>Recent Activities</h3>

        <ul>
          <li>🌾 New crop added by Rahul</li>
          <li>👨‍🌾 Farmer registration approved</li>
          <li>🛒 Marketplace product listed</li>
          <li>📢 New government scheme published</li>
        </ul>
      </div>
    </div>
  );
}