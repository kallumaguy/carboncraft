import express from "express";
import sgMail from "@sendgrid/mail";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

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

    // Extract the first image URL from formData.files if available
    const imageUrl = formData.files && formData.files[0] ? formData.files[0] : null;

    let attachment = [];
    if (imageUrl) {
        try {
            // Download the image and convert it to base64
            const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
            // eslint-disable-next-line no-undef
            const base64Image = Buffer.from(response.data).toString("base64");

            attachment = [
                {
                    content: base64Image, // Base64 encoded image
                    filename: "uploaded-image.jpg", // File name
                    type: "image/jpeg", // MIME type
                    disposition: "attachment", // Inline or attachment
                },
            ];
        } catch (error) {
            console.error("Error downloading or encoding image:", error);
            return res.status(500).send("Failed to process the image.");
        }
    }

    // Format email content dynamically using object keys and values
    const emailContent = Object.entries(formData)
        .map(([key, value]) => {
            // Handle arrays (e.g., emirate, equipmentBrand) and convert them to a comma-separated string
            const formattedValue = Array.isArray(value) ? value.join(", ") : value || "N/A";
            return `${key}: ${formattedValue}`;
        })
        .join("\n"); // Join with line breaks

    // Construct email message
    const msg = {
        to: "adilahmed.aa786@gmail.com", // Replace with recipient's email
        from: { name: "Adil Ahmed", email: "adilahmed.aa786@gmail.com" }, // Replace with sender's email
        subject: `Form Submission: ${formName}`,
        text: emailContent,
        attachments: attachment,
    };

    try {
        await sgMail.send(msg); // Send the email
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
