const express = require("express");
const {
  sendTemplateMailController,
} = require("./mail.controller");

const mailRoutes = express.Router();


mailRoutes.post("/template", async (req, res) => {
  const { recipient } = req.body;
  const response = await sendTemplateMailController({
    recipient,
  });
  res.status(response.status).json(response);
});

module.exports = { mailRoutes };
