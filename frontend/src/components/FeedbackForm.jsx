import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "../shared/Shared.js";

function FeedbackForm({ onSubmit }) {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipient || !subject || !feedback.trim()) {
      alert("All fields are required!");
      return;
    }
    onSubmit(recipient, subject, feedback);
    setRecipient("");
    setSubject("");
    setFeedback("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">AI Email Generator</h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 mb-2">Recipient Email:</label>
        <input
          type="email"
          className="w-full p-2 border rounded-md"
          placeholder="Enter recipient email..."
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />

        <label className="block text-gray-700 mb-2 mt-2">Subject:</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Enter email subject..."
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <label className="block text-gray-700 mb-2 mt-2">Enter Feedback:</label>
        <textarea
          className="w-full p-2 border rounded-md"
          rows="4"
          placeholder="Describe the email content..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <Button text="Generate Email" className="w-full mt-3" />
      </form>
    </div>
  );
}

FeedbackForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FeedbackForm;
