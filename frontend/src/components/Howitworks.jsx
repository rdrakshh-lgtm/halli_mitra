import "../styles/HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Create Account",
    desc: "Register as a farmer and set up your farming profile."
  },
  {
    number: "02",
    title: "Add Farm Details",
    desc: "Enter your crops, land information, and farming activities."
  },
  {
    number: "03",
    title: "Get AI Insights",
    desc: "Receive AI-powered recommendations for crop care and disease prevention."
  },
  {
    number: "04",
    title: "Increase Productivity",
    desc: "Use weather forecasts, market prices, and smart recommendations to improve yield."
  }
];

const HowItWorks = () => {
  return (
    <section className="how">
      <div className="how-title">
        <h2>How Halli Mitra Works</h2>
        <p>Start your smart farming journey in four simple steps.</p>
      </div>

      <div className="how-grid">
        {steps.map((step) => (
          <div className="how-card" key={step.number}>
            <div className="step-number">{step.number}</div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;