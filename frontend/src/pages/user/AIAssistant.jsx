import { useState } from "react";
import axios from "axios";

const AIAssistant = () => {
  const [question, setQuestion] = useState("");
  const [language, setLanguage] = useState("English");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) {
      alert("Please enter your question.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/ai/chat",
        {
          question,
          language,
        }
      );

      setAnswer(response.data.answer);
    } catch (error) {
      console.error(error);
      setAnswer("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">

        <h2 className="mb-4">🤖 Halli Mitra AI Assistant</h2>

        <div className="mb-3">
          <label className="form-label">Select Language</label>

          <select
            className="form-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Kannada</option>
            <option>Hindi</option>
            <option>Telugu</option>
            <option>Tamil</option>
            <option>Marathi</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Ask your farming question</label>

          <textarea
            className="form-control"
            rows="5"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
          />
        </div>

        <button
          className="btn btn-success"
          onClick={askAI}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {answer && (
          <div className="mt-4">
            <h4>Answer</h4>

            <div className="alert alert-success">
              {answer}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIAssistant;