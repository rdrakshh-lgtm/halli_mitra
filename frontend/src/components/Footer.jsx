import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-section">
          <h2>🌾 Halli Mitra</h2>

          <p>
            Empowering farmers with Artificial Intelligence,
            weather insights, market prices, crop management,
            and smart agriculture solutions.
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/features">Features</Link>

          <Link to="/services">Services</Link>

          <Link to="/contact">Contact</Link>

        </div>

        {/* Services */}

        <div className="footer-section">

          <h3>Our Services</h3>

          <p>AI Crop Advisory</p>

          <p>Weather Forecast</p>

          <p>Market Prices</p>

          <p>Government Schemes</p>

          <p>Disease Detection</p>

        </div>

        {/* Contact */}

        <div className="footer-section">

          <h3>Contact</h3>

          <p>📍 Belagavi, Karnataka</p>

          <p>📧 hallimitra2004@gmail.com</p>

          <p>📞 +91 7795011482</p>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Halli Mitra. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;