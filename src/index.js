const express = require("express");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");

const { mailRoutes } = require("./routes");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/mail", mailRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
