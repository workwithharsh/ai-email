import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ComposeButton } from "../components/Components.js";
import { Button } from "../shared/Shared.js";

function ResponsePage() {
  const location = useLocation();
  const emailData = location.state?.emailData || {};
  const [isEditing, setIsEditing] = useState(false);
  const [emailContent, setEmailContent] = useState(
    emailData.emailContent || ""
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Generated Email</h2>

      {isEditing ? (
        <textarea
          className="w-full p-2 border rounded-md"
          rows="6"
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
        />
      ) : (
        <pre className="bg-gray-100 p-4 rounded-md whitespace-pre-wrap">
          {emailContent}
        </pre>
      )}

      <div className="flex gap-4 mt-4">
        <Button
          text={isEditing ? "Save" : "Edit"}
          onClick={() => setIsEditing(!isEditing)}
        />
        {!isEditing && (
          <ComposeButton
            recipient={emailData.recipient}
            subject={emailData.subject}
            emailContent={emailContent}
          />
        )}
      </div>
    </div>
  );
}

export default ResponsePage;
