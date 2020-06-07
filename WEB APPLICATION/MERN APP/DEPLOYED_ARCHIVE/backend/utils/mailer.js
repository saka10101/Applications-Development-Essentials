const keys = require('../config/keys');


"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: keys.mailerid, // 
      pass: keys.mailerkey, // 
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'Bookmin', // sender address
    to: 'saka9010@gmail.com', // list of receivers
    subject: "Hello test ", // Subject line
    text: "Hello this is message test", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

}

main().catch(console.error);

