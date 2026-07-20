import {
  FaHome,
  FaSeedling,
  FaBoxOpen,
  FaChartLine,
  FaRobot,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  navigate("/login");
};
  return (
    <aside className="sidebar">
      <div className="logo">
        🌾
        <span>Halli Mitra</span>
      </div>

      <nav>
        <NavLink
          to="/user/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/user/crops"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaSeedling />
          Crop Management
        </NavLink>

        <NavLink
          to="/user/my-products"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaBoxOpen />
          My Products
        </NavLink>

        <NavLink
          to="/user/marketplace"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaChartLine />
          Marketplace
        </NavLink>

        <NavLink
          to="/user/ai"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaRobot />
          AI Assistant
        </NavLink>

        <NavLink
          to="/user/profile"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaUserCircle />
          Profile
        </NavLink>
      </nav>

      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;