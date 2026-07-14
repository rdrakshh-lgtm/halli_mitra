import {
  FaHome,
  FaSeedling,
  FaCloudSun,
  FaChartLine,
  FaRobot,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <div className="logo">
        🌾
        <span>Halli Mitra</span>
      </div>

      <nav>

        <NavLink
          to="/dashboard"
          className={({isActive}) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/crops"
          className={({isActive}) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaSeedling />
          Crop Management
        </NavLink>

        <NavLink
          to="/weather"
          className={({isActive}) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaCloudSun />
          Weather
        </NavLink>

        <NavLink
          to="/market"
          className={({isActive}) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaChartLine />
          Market Prices
        </NavLink>

        <NavLink
          to="/ai"
          className={({isActive}) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaRobot />
          AI Assistant
        </NavLink>

        <NavLink
          to="/profile"
          className={({isActive}) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaUserCircle />
          Profile
        </NavLink>

      </nav>

      <button className="logout-btn">
        <FaSignOutAlt />
        Logout
      </button>

    </aside>
  );
};

export default Sidebar;