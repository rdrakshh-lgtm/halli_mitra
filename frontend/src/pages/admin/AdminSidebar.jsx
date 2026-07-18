import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/AdminSidebar.css";
import logo from "../../assets/logo/logo1.png.jpeg";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/admin-login");
  };

  return (
    <div className="admin-sidebar">

      <div className="admin-logo">
        <img src={logo} alt="Logo" />

        <div>
          <h2>Halli Mitra</h2>
          <div className="admin-subtitle">
            Administrator
          </div>
        </div>
      </div>

      <div className="admin-menu">

        <NavLink className="admin-link" to="/admin/dashboard">
          📊 Dashboard
        </NavLink>

        <NavLink className="admin-link" to="/admin/users">
          👤 Users
        </NavLink>

        <NavLink className="admin-link" to="/admin/contact-messages">
          📩 Contact Messages
        </NavLink>

        <NavLink className="admin-link" to="/admin/settings">
          ⚙️ Settings
        </NavLink>
        
      </div>

      <button className="logout-btn" onClick={logout}>
        🚪 Logout
      </button>

    </div>
  );
};

export default AdminSidebar;