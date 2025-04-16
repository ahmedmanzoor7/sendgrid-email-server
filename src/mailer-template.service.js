const { compile } = require("handlebars");
const { join } = require("path");
const { promises } = require("fs");
const templatePath = join(__dirname, "./templates");

async function generateTemplateService({ name, data }) {
  try {
    const templateName = name.toLowerCase();
    const templateFilePath = join(templatePath, `${name}.hbs`);

    const templateString = await promises.readFile(templateFilePath, "utf-8");
    const template = compile(templateString);

    return template(data);
  } catch (error) {
    throw error;
  }
}

module.exports = { generateTemplateService };
