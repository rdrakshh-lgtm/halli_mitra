import LandingNavbar from "../components/LandingNavbar";
import Footer from "../components/Footer";
import "../styles/Services.css";

const stages = [
  {
    title: "Stage 1 - Vision & Mission",
    week: "Week 1",
    points: [
      "Understand Halli Mitra Vision & Mission",
      "Introduction to Digital Business",
      "Develop Entrepreneurial Mindset",
      "Personal Growth & Leadership"
    ]
  },
  {
    title: "Stage 2 - Business Education",
    week: "Week 2",
    points: [
      "Business Fundamentals",
      "Selling Skills",
      "Digital Marketing",
      "Customer Communication",
      "Business Growth Strategies",
      "Network Building"
    ]
  },
  {
    title: "Stage 3 - Platform Training",
    week: "Week 3",
    points: [
      "Platform Training",
      "Product Knowledge",
      "Networking",
      "Marketing",
      "Customer Handling",
      "Business Operations"
    ]
  },
  {
    title: "Stage 4 - Earning & Action Plan",
    week: "Week 4",
    points: [
      "Income Opportunities",
      "Business Setup",
      "Customer Acquisition",
      "Partner Development",
      "Long-term Action Plan"
    ]
  }
];

const training = [
  "Online & Offline Training",
  "Digital Business Learning",
  "Dedicated Support Team",
  "Community Mentorship",
  "Business Tools & Resources",
  "Recognition & Rewards"
];

const income = [
  "Medical Shop",
  "Grocery / Kirana",
  "Mobile Shop",
  "Electronic Shop",
  "Agro Chemical Store",
  "Cloth Store",
  "Insurance Services"
];

const revenue = [
  "Premium Membership",
  "Product Promotion",
  "Business Leads",
  "Partner Services",
  "Education Programs",
  "Marketplace Services"
];

export default function Services() {
  return (
    <>
      <LandingNavbar />

      <section className="services-page">

        <div className="services-header">
          <h1>Business Education & Services</h1>

          <p>
            Empowering Rural India through Digital Learning,
            Business Opportunities and Sustainable Income.
          </p>
        </div>

        {/* Vision */}

        <section className="vision-section">

          <h2>Our Vision</h2>

          <p>
            To build a digitally connected rural India where every youth and
            business gets equal opportunities to learn, earn and grow without
            leaving their village.
          </p>

        </section>

        {/* Education */}

        <section>

          <h2 className="section-title">
            Business Education Program
          </h2>

          <div className="services-grid">

            {stages.map((item, index) => (

              <div className="service-card" key={index}>

                <h3>{item.title}</h3>

                <small>{item.week}</small>

                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

              </div>

            ))}

          </div>

        </section>

        {/* Training */}

        <section>

          <h2 className="section-title">
            Training & Support
          </h2>

          <div className="services-grid">

            {training.map((item, index) => (

              <div className="service-card" key={index}>

                <h3>{item}</h3>

                <p>
                  Professional guidance, continuous learning,
                  mentorship and complete support for every partner.
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Income */}

        <section>

          <h2 className="section-title">
            Income Generation Sources
          </h2>

          <div className="services-grid">

            {income.map((item, index) => (

              <div className="service-card" key={index}>

                <h3>{item}</h3>

                <ul>
                  <li>Business Promotion</li>
                  <li>Customer Reach</li>
                  <li>Digital Listing</li>
                  <li>Lead Generation</li>
                </ul>

              </div>

            ))}

          </div>

        </section>

        {/* Revenue */}

        <section className="vision-section">

          <h2>Halli Mitra Revenue Sources</h2>

          <ul>

            {revenue.map((item, index) => (
              <li key={index}>✔ {item}</li>
            ))}

          </ul>

        </section>

        {/* Commitment */}

        <section className="vision-section">

          <h2>Our Commitment</h2>

          <h3>We Teach.</h3>

          <h3>We Support.</h3>

          <h3>You Succeed.</h3>

        </section>

        {/* Why Halli Mitra */}

        

      </section>

      <Footer />
    </>
  );
}