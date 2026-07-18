import { FaRobot, FaUser } from "react-icons/fa";
import "../styles/AIPreview.css";

const AIPreview = () => {
  return (
    <section className="ai-preview">

      <div className="ai-left">

        <span className="ai-tag">AI ASSISTANT</span>

        <h2>Your Smart Farming Companion</h2>

        <p>
          Ask farming questions in simple language and receive AI-powered
          guidance for crops, fertilizers, irrigation, diseases, and weather.
        </p>

        <button>Try AI Assistant</button>

      </div>

      <div className="chat-box">

        <div className="chat user">
          <FaUser className="chat-icon" />
          <p>My tomato leaves are turning yellow. What should I do?</p>
        </div>

        <div className="chat ai">
          <FaRobot className="chat-icon" />
          <p>
            This may indicate a nitrogen deficiency or overwatering.
            Check soil moisture and consider applying a nitrogen-rich fertilizer.
          </p>
        </div>

      </div>

    </section>
  );
};

export default AIPreview;