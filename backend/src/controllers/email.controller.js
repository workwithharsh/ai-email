import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send an email
export const sendEmail = async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    // Validate body
    if (!to || !subject || !text) {
      return res
        .status(400)
        .json({ error: "All fields (to, subject, text) are required" });
    }

    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
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
