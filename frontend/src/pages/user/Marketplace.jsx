import "../../styles/Marketplace.css";

const Marketplace = () => {
  return (
    <div className="marketplace">

      {/* Hero */}

      <section className="market-hero">
        <h1>🛒 PRODUCT / MARKETPLACE</h1>
        <p>Empowering Farmers • Connecting Buyers • Rewarding Partners</p>
      </section>

      {/* Commission Cards */}

      <section className="commission-section">

        <div className="commission-card partner">
          <h2>40%</h2>
          <h3>👥 Partner Reward</h3>
          <p>
            Partners earn 40% commission for every successful referral
            and product sale.
          </p>
        </div>

        <div className="commission-card company">
          <h2>20%</h2>
          <h3>🏢 Halli Mitra Company</h3>
          <p>
            20% commission is retained by Halli Mitra for platform
            maintenance and future development.
          </p>
        </div>

        <div className="commission-card buyer">
          <h2>40%</h2>
          <h3>🛒 Buyer Benefit</h3>
          <p>
            Buyers receive value through quality products, offers and
            marketplace benefits.
          </p>
        </div>

      </section>

      {/* Purpose & Rules */}

      <section className="purpose-rules">

        <div className="purpose-card">

          <h2>🎯 Purpose</h2>

          <ul>
            <li>Help farmers sell products directly.</li>
            <li>Provide fair market opportunities.</li>
            <li>Increase farmers' income.</li>
            <li>Connect buyers with genuine sellers.</li>
            <li>Support digital agriculture.</li>
          </ul>

        </div>

        <div className="rules-card">

          <h2>📜 Marketplace Rules</h2>

          <ul>
            <li>Only genuine products are allowed.</li>
            <li>All products require admin approval.</li>
            <li>Correct pricing must be provided.</li>
            <li>Product information should be accurate.</li>
            <li>Fake listings will be removed.</li>
          </ul>

        </div>

      </section>

      {/* Commission Flow */}

      <section className="flow-section">

        <h2>🔄 Commission Distribution Flow</h2>

        <div className="flow">

          <div className="flow-box">
            👨‍🌾
            <h3>Farmer</h3>
          </div>

          <span>➡</span>

          <div className="flow-box">
            🛍
            <h3>Product Sale</h3>
          </div>

          <span>➡</span>

          <div className="flow-box">
            🌾
            <h3>Halli Mitra</h3>
          </div>

          <span>➡</span>

          <div className="flow-box">
            💰
            <h3>Commission Distribution</h3>
          </div>

        </div>

      </section>

      {/* Featured Products */}

      <section className="products">

        <h2>🌾 Featured Products</h2>

        <div className="product-grid">

          <div className="product-card">
            <h3>🍅 Tomato</h3>
            <p>Price : ₹35 / Kg</p>
            <p>Seller : Ramesh</p>
            <p>Village : Dharwad</p>

            <button>Buy Now</button>
          </div>

          <div className="product-card">
            <h3>🌽 Maize</h3>
            <p>Price : ₹22 / Kg</p>
            <p>Seller : Suresh</p>
            <p>Village : Belagavi</p>

            <button>Buy Now</button>
          </div>

          <div className="product-card">
            <h3>🥔 Potato</h3>
            <p>Price : ₹28 / Kg</p>
            <p>Seller : Mahesh</p>
            <p>Village : Mysuru</p>

            <button>Buy Now</button>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Marketplace;