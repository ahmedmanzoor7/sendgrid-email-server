const express = require("express");
const {
  sendTemplateMailController,
  sendMailController,
} = require("./mail.controller");

const mailRoutes = express.Router();

mailRoutes.post("/simple", async (req, res) => {
  const { recipients, subject, text } = req.body;
  const response = await sendMailController({ recipients, subject, text });
  res.status(response.status).json(response);
});

mailRoutes.post("/template", async (req, res) => {
  const { recipients, subject, data } = req.body;
  const response = await sendTemplateMailController({
    recipients,
    subject,
    data,
  });
  res.status(response.status).json(response);
});

module.exports = { mailRoutes };
