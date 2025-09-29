const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/",(req, res)=>{
  console.log("API Is running properly")
})


app.listen(PORT, ()=>{
  console.log("PORT IS RUNNIGN ON 5000")
})

app.post("/api/email", async (req, res) => {
  console.log("Received body:", req.body);

  const { name, email, phone, subject, message } = req.body;
  console.log(req.body)
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields" });
  }

  try {
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL,
      subject: subject || "New Portfolio Contact",
      html: `
        <div style="font-family: Arial, sans-serif; max-width:600px; padding:20px; background:#f9f9f9; border-radius:8px;">
          <h2 style="color:#00c0ff">📬 New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Subject:</strong> ${subject || "No Subject"}</p>
          <hr/>
          <p style="white-space:pre-line;">${message}</p>
          <hr/>
          <small style="color:#777">Sent from your portfolio contact form</small>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "✅ Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
});

