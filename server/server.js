const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 8080;
const host = "0.0.0.0";

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
    to: process.env.RECEIVIGN_MAIL,
    subject: `${req.body.name} send a message from My Webiste`,
    text: req.body.message
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SENDING_EMAIL,
      pass: process.env.PASS
    }
  });

  try {
    await transporter.sendMail(email);
    res.status(200).send("Email Sent");
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
});
