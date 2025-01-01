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

app.post("/send-email", async (req, res) => {
    const { formName, formData } = req.body;

    if (!formName || !formData) {
        return res.status(400).send("Form name and data are required.");
    }

    let attachments = [];
    if (formData.files && Array.isArray(formData.files)) {
        attachments = await Promise.all(
            formData.files.map(async (fileUrl, index) => {
                try {
                    const response = await axios.get(fileUrl, { responseType: "arraybuffer" });
                    const contentType = response.headers["content-type"];
                    console.log("Processing file:", { fileUrl, contentType });

                    // eslint-disable-next-line no-undef
                    const base64File = Buffer.from(response.data).toString("base64");
                    const isPdf = contentType === "application/pdf";
                    const extension = isPdf ? "pdf" : "jpg";

                    return {
                        content: base64File,
                        filename: `uploaded-file-${index + 1}.${extension}`,
                        type: contentType,
                        disposition: "attachment",
                    };
                } catch (error) {
                    console.error(`Error processing file at ${fileUrl}:`, error);
                    return null;
                }
            })
        ).then((results) => results.filter(Boolean));
    }

    console.log("Final attachments:", JSON.stringify(attachments, null, 2));

    const emailContent = Object.entries(formData)
        .map(([key, value]) => {
            const formattedValue = Array.isArray(value) ? value.join(", ") : value || "N/A";
            return `${key}: ${formattedValue}`;
        })
        .join("\n");

    const msg = {
        to: "shazman@carboncraftuae.com",
        from: { name: "Shazman", email: "shazman@carboncraftuae.com" },
        subject: `Form Submission: ${formName}`,
        text: emailContent,
        attachments: attachments,
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
