import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send Email Controller
export const sendEmail = async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    if (!to || !subject || !text) {
      return res
        .status(400)
        .json({ error: "Recipient, subject, and message are required." });
    }

    // Convert into an array
    const recipients = to.split(",").map((email) => email.trim());

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recipients,
      subject,
      text,
    });

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully", info });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};
