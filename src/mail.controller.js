const { sendTemplateMailService, sendMailService } = require("./mail.service");
const { CustomResponse } = require("./custom-response");

async function sendMailController({ recipient }) {
  if (!recipient) {
    return CustomResponse({
      data: null,
      error: "Recipent is required.",
      status: 400,
    });
  }
  try {
    await sendMailService({ recipient, template_id: process.env.TEMPLATE_ID });
    return CustomResponse({
      data: "Email sent successfully",
      error: null,
      status: 200,
    });
  } catch (error) {
    return CustomResponse({
      data: null,
      error: error,
      status: 500,
    });
  }
}

async function sendTemplateMailController({ recipient }) {
  if (!recipient) {
    return CustomResponse({
      data: null,
      status: 400,
      error: "Recipient is required.",
    });
  }

  try {
    await sendTemplateMailService({
      recipient,
      template_id: process.env.TEMPLATE_ID,
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
