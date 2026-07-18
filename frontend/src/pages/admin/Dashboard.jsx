import "../../styles/Dashboard.css";

const Dashboard = () => {
  const cards = [
    {
      title: "Users",
      value: 120,
      icon: "👥",
      color: "#2563eb",
    },
    {
      title: "Farmers",
      value: 85,
      icon: "🌾",
      color: "#16a34a",
    },
    {
      title: "Marketplace",
      value: 43,
      icon: "🛒",
      color: "#f59e0b",
    },
    {
      title: "Schemes",
      value: 18,
      icon: "📢",
      color: "#9333ea",
    },
  ];

  return (
    <div className="dashboard">
      <h2>🌾 Admin Dashboard</h2>

      <div className="dashboard-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className="dashboard-card"
            style={{ borderLeft: `6px solid ${card.color}` }}
          >
            <div className="icon">{card.icon}</div>

            <h3>{card.value}</h3>

            <p>{card.title}</p>
          </div>
        ))}
      </div>

      <div className="recent-box">
        <h3>Recent Activities</h3>

        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Activity</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Rahul</td>
              <td>Added new crop</td>
              <td>17 Jul 2026</td>
            </tr>

            <tr>
              <td>Anita</td>
              <td>Registered</td>
              <td>17 Jul 2026</td>
            </tr>

            <tr>
              <td>Admin</td>
              <td>Approved marketplace product</td>
              <td>16 Jul 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;