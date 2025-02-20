import { useNavigate } from "react-router-dom";
import { FeedbackForm } from "../components/Components.js";

function HomePage() {
  const navigate = useNavigate();

  const handleFeedbackSubmit = async ({ to, subject, text }) => {
    try {
      const response = await fetch("/api/v1/gemini/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedback: text }),
      });

      const data = await response.json();

      if (data.emailContent) {
        navigate("/response", {
          state: {
            emailData: {
              to,
              subject,
              text: data.emailContent,
            },
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
