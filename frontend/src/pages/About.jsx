import LandingNavbar from "../components/LandingNavbar";
import "../styles/about.css";
import Footer from "../components/Footer";
import aboutImage from "../assets/about-image.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <LandingNavbar />

      <div className="about-page">

        {/* HERO */}
        <section className="about-hero">

          <div className="about-left">
            <span className="tag">ABOUT HALLI MITRA</span>

            <h1>
              Empowering Farmers Through
              <span> Artificial Intelligence</span>
            </h1>

            <p>
              Halli Mitra is an AI-powered smart agriculture platform that
              helps farmers manage crops, predict diseases, monitor weather,
              check market prices, discover government schemes, and receive
              intelligent farming recommendations—all from one platform.
            </p>

            <button onClick={() => navigate("/login")}>
              Explore Platform
            </button>
          </div>

          <div className="about-right">
            <img
              src={aboutImage}
              alt="Halli Mitra"
            />
          </div>

        </section>

        

        

        {/* OUR STORY */}

<section className="our-story">

  <p className="story-tag">OUR STORY</p>

  <h1>
    <span>Born in the Village,Built for the Future</span>
  </h1>

  <p className="story-text">
    <strong>Halli Mitra</strong> — meaning
    <strong> "Village Friend"</strong> in Kannada —
    was built with one mission: to empower farmers
    through technology and provide a transparent,
    trusted marketplace where they receive fair
    value for their produce.
  </p>

  <p className="story-text">
    From the farms of Karnataka to buyers across
    India, Halli Mitra bridges the gap between
    farmers, buyers and partners using modern
    digital technology.
  </p>

  <div className="story-grid">

    <div className="story-card">
      <h3>⚡ Direct Access</h3>
      <p>Farmers connect directly with buyers without unnecessary middlemen.</p>
    </div>

    <div className="story-card">
      <h3>✅ Verified Listings</h3>
      <p>Every product is reviewed before it appears in the marketplace.</p>
    </div>

    <div className="story-card">
      <h3>🌾 All Agricultural Produce</h3>
      <p>Support for grains, vegetables, fruits, dairy products, spices and more.</p>
    </div>

    <div className="story-card">
      <h3>📱 Farmer Friendly</h3>
      <p>Simple interface with multilingual support for every farmer.</p>
    </div>

  </div>

</section>

       {/* VISION & MISSION */}





        {/* FEATURES */}

        <section className="features">

          <h2>Why Choose Halli Mitra?</h2>

          <div className="feature-grid">

            <div className="feature-card">🌾 Crop Management</div>

            <div className="feature-card">🤖 AI Farming Assistant</div>

            <div className="feature-card">🌦 Live Weather Forecast</div>

            <div className="feature-card">📈 Market Prices</div>

            <div className="feature-card">📢 Government Schemes</div>

            <div className="feature-card">📷 Disease Detection</div>

          </div>

        </section>

        {/* IMPACT */}

        <section className="stats">

          <div>
            <h1>10K+</h1>
            <p>Farmers Supported</p>
          </div>

          <div>
            <h1>500+</h1>
            <p>Villages</p>
          </div>

          <div>
            <h1>95%</h1>
            <p>AI Accuracy</p>
          </div>

          <div>
            <h1>24/7</h1>
            <p>AI Assistant</p>
          </div>

        </section>

        {/* TEAM */}

        <section className="team">

          <h2>Technology Behind Halli Mitra</h2>

          <div className="team-grid">

            <div className="team-card">⚛ React</div>

            <div className="team-card">⚡ FastAPI</div>

            <div className="team-card">🗄 MySQL</div>

            <div className="team-card">🤖 AI Integration</div>

          </div>

        </section>

        {/* CTA */}

        <section className="cta">

          <h2>Ready to Transform Farming?</h2>

          <p>
            Join Halli Mitra and experience the future of smart agriculture.
          </p>

          

        </section>
        <section className="vision-mission">

  <div className="vision-box">

    <h2>🌍 Our Vision</h2>

    <p>
      To become India's most trusted digital agriculture platform,
      connecting every farmer directly with buyers through
      technology, transparency, and innovation.
    </p>

  </div>

  <div className="mission-box">

    <h2>🎯 Our Mission</h2>

    <ul>
      <li>Empower farmers through technology.</li>
      <li>Eliminate unnecessary middlemen.</li>
      <li>Create a transparent digital marketplace.</li>
      <li>Promote fair pricing and verified trade.</li>
      <li>Provide AI-powered agricultural guidance.</li>
    </ul>

  </div>

</section>

      </div>
    </>
    
  );
};

export default About;