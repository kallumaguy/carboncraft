import express from "express";
import sgMail from "@sendgrid/mail";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const PORT = 5000;

// SendGrid setup
// eslint-disable-next-line no-undef
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


app.use(cors());
app.use(bodyParser.json());

// Email endpoint
app.post("/send-email", async (req, res) => {
    const { formName, formData } = req.body;

    // Validate request data
    if (!formName || !formData) {
        return res.status(400).send("Form name and data are required.");
    }

    const msg = {
        to: "adilahmed.aa786@gmail.com", // Replace with the recipient's email
        from: { name: "Adil Ahmed", email: "adilahmed.aa786@gmail.com" }, // Replace with your verified SendGrid sender email
        subject: `Form Submission: ${formName}`,
        text: `You have received a new submission from ${formName}:\n\n${JSON.stringify(
            formData,
            null,
            2
        )}`,
    };

    try {
        await sgMail.send(msg);
        res.status(200).send("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
        if (error.response) {
            console.error("SendGrid Response:", error.response.body);
        }
        res.status(500).send("Failed to send email.");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
