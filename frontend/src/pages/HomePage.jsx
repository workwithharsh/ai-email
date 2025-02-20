import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FeedbackForm } from "../components/Components.js";
import { Loading } from "../shared/Shared.js";

const HomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFeedbackSubmit = async ({ to, subject, text }) => {
    setLoading(true);

    try {
      const response = await fetch("/api/v1/gemini/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedback: text }),
      });

      const data = await response.json();
      console.log("AI Response:", data);

      if (data.emailContent) {
        navigate("/response", {
          state: { emailData: { to, subject, text: data.emailContent } },
        });
      }
    } catch (error) {
      console.error("Error generating email:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {loading ? <Loading /> : <FeedbackForm onSubmit={handleFeedbackSubmit} />}
    </div>
  );
};

export default HomePage;
