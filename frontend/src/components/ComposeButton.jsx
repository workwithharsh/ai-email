import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "../shared/Shared.js";

function ComposeButton({ recipient, subject, emailContent }) {
  const [loading, setLoading] = useState(false);

  const handleSendEmail = async () => {
    // Field validations
    if (!recipient || !subject || !emailContent) {
      alert("Recipient, subject, and email content are required!");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/v1/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: recipient, subject, text: emailContent }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      text={loading ? "Sending..." : "Send Email"}
      onClick={handleSendEmail}
    />
  );
}

// Prop validations
ComposeButton.propTypes = {
  recipient: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  emailContent: PropTypes.string.isRequired,
};

export default ComposeButton;
