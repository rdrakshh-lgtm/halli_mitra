import "../styles/TrustedSection.css";

const TrustedSection = () => {
  return (
    <section className="trusted">

      <h2>Trusted by Farmers Across Karnataka</h2>

      <p>
        Halli Mitra empowers farmers with AI-driven insights, live weather,
        market prices, and smart crop management.
      </p>

      <div className="trusted-grid">

        <div className="trusted-card">
          <h1>10,000+</h1>
          <span>Farmers</span>
        </div>

        <div className="trusted-card">
          <h1>31</h1>
          <span>Districts</span>
        </div>

        <div className="trusted-card">
          <h1>100+</h1>
          <span>Crops Supported</span>
        </div>

        <div className="trusted-card">
          <h1>24/7</h1>
          <span>AI Assistance</span>
        </div>

      </div>

    </section>
  );
};

export default TrustedSection;