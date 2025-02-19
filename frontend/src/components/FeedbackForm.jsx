import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "../shared/Shared.js";

const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    onSubmit(feedback);
    setFeedback("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">AI Email Generator</h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 mb-2">Enter Feedback:</label>
        <textarea
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          rows="4"
          placeholder="Describe the email content..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <Button text="Generate Email" className="w-full mt-3" />
      </form>
    </div>
  );
};

FeedbackForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FeedbackForm;
