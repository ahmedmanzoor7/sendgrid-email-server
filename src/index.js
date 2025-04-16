// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const sgMail = require('@sendgrid/mail');

// dotenv.config();
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(express.json());

// app.post('/send-email', async (req, res) => {

//   const { to, subject, text } = req.body;

//   if (!to || !subject || !text) {
//       throw new Error('All Fields Are Required');
//     }

//   const recipients = Array.isArray(to) ? to : [to];

//   const msg = {
//     to: recipients,
//     from: process.env.FROM_EMAIL,
//     subject,
//     text,
//   };

//   try {
//     await sgMail.send(msg);
//     res.status(200).json({ message: 'Email sent successfully!' });
//   } catch (error) {
//     console.error(error.response?.body || error.message);
//     res.status(500).json({ error: 'Failed to send email.' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
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
