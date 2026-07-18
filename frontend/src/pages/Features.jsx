import LandingNavbar from "../components/LandingNavbar";
import "../styles/Features.css";
import Footer from "../components/Footer";

const features = [
  {
    icon: "🌱",
    title: "Crop Management",
    description:
      "Manage crops, track seasons, monitor growth, and maintain complete farming records."
  },
  {
    icon: "🤖",
    title: "AI Farming Assistant",
    description:
      "Get intelligent recommendations for crops, fertilizers, irrigation, and farming practices."
  },
  {
    icon: "🌦",
    title: "Weather Forecast",
    description:
      "Access real-time weather conditions and 7-day forecasts for better farm planning."
  },
  {
    icon: "📈",
    title: "Market Prices",
    description:
      "View daily mandi prices and compare crop prices across markets."
  },
  {
    icon: "📢",
    title: "Government Schemes",
    description:
      "Discover agricultural schemes, subsidies, and eligibility information."
  },
  {
    icon: "📷",
    title: "AI Disease Detection",
    description:
      "Upload crop images and receive AI-powered disease detection with treatment suggestions."
  },
];

const Features = () => {
  return (
    <>
      <LandingNavbar />

      <section className="features-page">

        <div className="features-header">
          <h1>Powerful Features</h1>

          <p>
            Everything a modern farmer needs in one intelligent platform.
          </p>
        </div>

        <div className="features-grid">

          {features.map((feature, index) => (

            <div className="feature-card" key={index}>

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h2>{feature.title}</h2>

              <p>{feature.description}</p>

              

            </div>

          ))}

        </div>

      </section>

    </>
  );
};

export default Features;