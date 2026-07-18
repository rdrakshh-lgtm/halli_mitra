import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">
        <h1>
          Smart Farming <br />
          Powered by AI 🌾
        </h1>

        <p>
          Halli Mitra helps farmers manage crops, predict diseases,
          check weather forecasts, monitor market prices, and
          receive AI-powered farming guidance—all in one platform.
        </p>

        <div className="hero-buttons">
          <Link to="/register">
            <button className="primary-btn">
              Get Started
            </button>
          </Link>

          <Link to="/login">
            <button className="secondary-btn">
              Login
            </button>
          </Link>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700"
          alt="Farmland"
        />
      </div>

    </section>
  );
};

export default Hero;