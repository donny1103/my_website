const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 8080;
const host = "0.0.0.0";
console.log(process.env.GOOGLE_USER_NAME);
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(port, host, () => console.log(`App listening on port ${port}!`));

app.post("/sendEmail", async (req, res) => {
  const email = {
    from: req.body.email,
    to: "donny1103@hotmail.com",
    subject: `${req.body.name} send a message from My Webiste`,
    text: req.body.message
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GOOGLE_EMAIL,
      pass: process.env.GOOGLE_SECRET
    }
  });

  const info = await transporter.sendMail(email);
});
