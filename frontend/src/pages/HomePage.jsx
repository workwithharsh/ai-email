import { useNavigate } from "react-router-dom";
import FeedbackForm from "../components/FeedbackForm";

function HomePage() {
  const navigate = useNavigate();

  const handleFeedbackSubmit = async (recipient, subject, feedback) => {
    if (!recipient || !subject || !feedback.trim()) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await fetch("/api/v1/gemini/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedback }),
      });

      const data = await response.json();

      if (data.emailContent) {
        navigate("/response", {
          state: {
            emailData: { recipient, subject, emailContent: data.emailContent },
          },
        });
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
}

export default HomePage;
