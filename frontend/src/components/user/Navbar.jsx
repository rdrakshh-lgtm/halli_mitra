import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">
      <div>
        <h2>🌾 Halli Mitra</h2>
        <p>Smart Agriculture Management System</p>
      </div>

      <div className="navbar-right">
        <FaBell className="nav-icon" />

        <div className="profile">
          <FaUserCircle />
          <span>Welcome, Farmer</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;