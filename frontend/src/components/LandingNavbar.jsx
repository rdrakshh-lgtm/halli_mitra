import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../assets/logo/logo1.png.jpeg";
import "../styles/Landing.css";

const LandingNavbar = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="landing-navbar">

      {/* Logo */}

      <div className="brand">

        <img
          src={logo}
          alt="Halli Mitra"
          className="logo-img"
        />

        <h2 className="brand-title">
          {t("appName")}
        </h2>

      </div>

      {/* Navigation */}

      <ul className="nav-menu">

        <li>
          <Link to="/">
            {t("home")}
          </Link>
        </li>

        <li>
          <Link to="/about">
            {t("about")}
          </Link>
        </li>

        <li>
          <Link to="/features">
            {t("features")}
          </Link>
        </li>

        <li>
          <Link to="/services">
            {t("services")}
          </Link>
        </li>

        <li>
          <Link to="/contact">
            {t("contact")}
          </Link>
        </li>

      </ul>

      {/* Right Side */}

      <div className="nav-buttons">

        <div className="language-selector">

          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">🇬🇧 English</option>
            <option value="kn">🇮🇳 ಕನ್ನಡ</option>
            <option value="hi">🇮🇳 हिन्दी</option>
          </select>

        </div>

        <Link to="/login">
          <button className="login-btn">
            {t("login")}
          </button>
        </Link>

        <Link to="/register">
          <button className="signup-btn">
            {t("signup")}
          </button>
        </Link>

      </div>

    </nav>
  );
};

export default LandingNavbar;