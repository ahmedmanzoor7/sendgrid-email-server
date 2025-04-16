
require("dotenv").config({ path: "../.env" });
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


async function sendTemplateMailService({ template, recipients, subject }) {
  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: recipients,
    subject,
    html: template,
  };

  return  await sgMail.sendMail(mailOptions);
  
}

async function sendMailService({ recipients, subject, text }) {
  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: recipients,
    subject,
    text,
  };

  return  await sgMail.sendMail(mailOptions);
}

module.exports = { sendTemplateMailService, sendMailService };
