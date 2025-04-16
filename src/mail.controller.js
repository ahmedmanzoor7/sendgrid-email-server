const { sendTemplateMailService, sendMailService } = require("./mail.service");
const { generateTemplateService } = require("./mailer-template.service");

async function sendMailController({ recipients, subject, text }) {
  if (!recipients || !subject || !text) {
    return {
      data: null,
      error: "All fields (to, subject, text) are required.",
      status: 400,
    };
  }
  try {
    const recipients = Array.isArray(recipients) ? recipients : [recipients];
    await sendMailService({ recipients, subject, text });
    return {
      data: "Email sent successfully",
      error: null,
      status: 200,
    };
  } catch (error) {
    return {
      data: null,
      error: error,
      status: 500,
    };
  }
}

async function sendTemplateMailController({ recipients, subject, data }) {
  if (!recipients || !subject || !data) {
    return {
      data: null,
      status: 400,
      error: "All fields (to, subject, data) are required.",
    };
  }

  try {
    const recipients = Array.isArray(recipients) ? recipients : [recipients];
    const info = await sendTemplateMailService({
      subject,
      template: await generateTemplateService({ name: "test", data }),
      recipients,
    });

    return CustomResponse({
      data: "Email sent successfully",
      status: 200,
      error: null,
    });
  } catch (error) {
    return CustomResponse({
      data: null,
      error: 200,
      status: 500,
    });
  }
}

module.exports = { sendMailController, sendTemplateMailController };
