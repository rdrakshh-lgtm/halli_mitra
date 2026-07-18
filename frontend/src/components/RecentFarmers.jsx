const RecentFarmers = ({ farmers }) => {
  return (
    <div className="card">
      <h2>👨‍🌾 Recent Farmers</h2>

      <table style={{ width: "100%", marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Village</th>
          </tr>
        </thead>

        <tbody>
          {farmers.length > 0 ? (
            farmers.map((farmer, index) => (
              <tr key={index}>
                <td>{farmer.name}</td>
                <td>{farmer.phone}</td>
                <td>{farmer.village}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No farmers found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RecentFarmers;