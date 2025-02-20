import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "../shared/Shared.js";

function FeedbackForm({ onSubmit }) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!to.trim() || !subject.trim() || !feedback.trim()) {
      alert("All fields are required!");
      return;
    }
    onSubmit({ to, subject, text: feedback });
    setTo("");
    setSubject("");
    setFeedback("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">AI Email Generator</h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 mb-2">
          Recipients (comma-separated):
        </label>
        <input
          type="text"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="xyz@gmail.com, abc@gmail.com"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />

        <label className="block text-gray-700 mt-4 mb-2">Subject:</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter email subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <label className="block text-gray-700 mt-4 mb-2">Email Content:</label>
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
}

FeedbackForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FeedbackForm;
