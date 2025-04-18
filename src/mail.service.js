const sgMail = require("@sendgrid/mail");
require("dotenv").config({ path: process.cwd() + "/.env" });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendTemplateMailService({ recipient, template_id }) {
  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: recipient,
    template_id: template_id,
  };

  try {
    return await sgMail.send(mailOptions);
  } catch (error) {
    console.error("Error while sending template mail: ", error);
    throw error;
  }
}

async function sendMailService({ recipient, template_id }) {
  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: recipient,
    template_id: template_id,
  };
  try {
    return await sgMail.send(mailOptions);
  } catch (error) {
    console.error("Error while sending simple mail: ", error);
    throw error;
  }
}

module.exports = { sendTemplateMailService, sendMailService };
