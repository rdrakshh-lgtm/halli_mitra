import {
  FaCloudSun,
  FaRobot,
  FaChartLine,
  FaSeedling,
} from "react-icons/fa";

import "../styles/DashboardPreview.css";

const DashboardPreview = () => {
  return (
    <section className="dashboard-preview">

      <div className="dashboard-title">

        <h2>Everything You Need In One Dashboard</h2>

        <p>
          Monitor your farm, weather, AI recommendations,
          and market prices from one place.
        </p>

      </div>

      <div className="dashboard-box">

        <div className="dashboard-top">

          <div className="preview-card">

            <FaCloudSun className="preview-icon"/>

            <h3>Weather</h3>

            <h2>28°C</h2>

            <p>Sunny</p>

          </div>

          <div className="preview-card">

            <FaChartLine className="preview-icon"/>

            <h3>Market Price</h3>

            <h2>₹2450</h2>

            <p>Maize / Quintal</p>

          </div>

          <div className="preview-card">

            <FaRobot className="preview-icon"/>

            <h3>AI Tip</h3>

            <p>
              Water your paddy tomorrow morning for better growth.
            </p>

          </div>

        </div>

        

      </div>

    </section>
  );
};

export default DashboardPreview;