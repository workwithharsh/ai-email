import { useNavigate } from "react-router-dom";
import { FeedbackForm } from "../components/Components.js";

const HomePage = () => {
  const navigate = useNavigate();

  const handleFeedbackSubmit = async (feedback) => {
    try {
      const response = await fetch("/api/v1/gemini/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedback }),
      });

      const data = await response.json();
      console.log("AI Response:", data);

      if (data.emailContent) {
        navigate("/response", { state: { emailData: data } });
      }
    } catch (error) {
      console.error("Error generating email:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <FeedbackForm onSubmit={handleFeedbackSubmit} />
    </div>
  );
};

export default HomePage;
