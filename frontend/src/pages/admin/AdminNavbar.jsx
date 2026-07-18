const AdminNavbar = () => {
  return (
    <div
      style={{
        height: "70px",
        background: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
      }}
    >
      <h4>Admin Dashboard</h4>

      <div>
        👤 Admin
      </div>
    </div>
  );
};

export default AdminNavbar;