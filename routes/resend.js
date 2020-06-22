const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require('../models/User');


router.post("/", (req, res, next) => {

User.findOne({email: req.body.email})
.then(user => {
  if(user) {
    main(user.confirmationCode)
  }}).catch(err => {
  console.log(err)
})
  

async function main(confirmationCode) {

      let transporter = nodemailer.createTransport({
       host: "smtp.gmail.com",
       port: 465,
       secure: true, // true for 465, false for other ports
       auth: {
        user: process.env.EDUNODE_GMAIL_EMAIL,
        pass: process.env.EDUNODE_GMAIL_PASS 
       }
      });
      
      
     

    let email = req.body.email
    // const confirmationCode = user.confirmationCode
      
      let emailInfo = {
       from: '"EduNode" <no-reply@edunode.netlify.app>', // sender address
       to: email, // list of receivers
       subject: "Confirmation Email ✔", // Subject line
       text: "Confirmation Email :)", // plain text body
       html: `This is your confirmation code: <b>${confirmationCode}</b>` 
      }
      
      
      let info = await transporter.sendMail(emailInfo);
      
       
      // send mail with defined transport object
      
      
      console.log("Message sent: %s", info.messageId);

      
      res.json({  
        msg: "email sent",
 
      })

       
    }
  
 
}

 ); 






module.exports = router;