import { useState } from "react";
import api from "../services/api";
import LandingNavbar from "../components/LandingNavbar";
import "../styles/Contact.css";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await api.post("/contact/", formData);

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <>
      <LandingNavbar />

      <section className="contact-page">
        <div className="contact-header">
          <h1>Contact Us</h1>

          <p>
            We'd love to hear from you. Reach out for support, feedback, or
            partnership opportunities.
          </p>
        </div>

        <div className="contact-container">

          {/* Left Side */}

          <div className="contact-info">

            <div className="info-card">
              <h3>📍 Address</h3>
              <p>Belagavi, Karnataka, India</p>
            </div>

            <div className="info-card">
              <h3>📞 Phone</h3>
              <p>+91 7795011482</p>
            </div>

            <div className="info-card">
              <h3>📧 Email</h3>
              <p>hallimitra2004@gmail.com</p>
            </div>

            <div className="info-card">
              <h3>🕒 Working Hours</h3>
              <p>Monday - Saturday</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>

          </div>

          {/* Right Side */}

          <div className="contact-form">

            <h2>Send us a Message</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            />

            <button onClick={handleSubmit}>
              Send Message
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Contact;