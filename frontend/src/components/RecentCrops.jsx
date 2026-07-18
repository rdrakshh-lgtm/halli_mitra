const RecentCrops = ({ crops }) => {
  return (
    <div className="card">
      <h2>🌱 Recent Crops</h2>

      <table style={{ width: "100%", marginTop: 20 }}>
        <thead>
          <tr>
            <th>Crop</th>
            <th>Variety</th>
            <th>Season</th>
          </tr>
        </thead>

        <tbody>
          {crops.length > 0 ? (
            crops.map((crop, index) => (
              <tr key={index}>
                <td>{crop.crop_name}</td>
                <td>{crop.variety}</td>
                <td>{crop.season}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No crops found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RecentCrops;