const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth"); // jtw handler
const passport = require("passport");
const axios = require("axios")


// Load User model
const User = require('../models/User');

// GET - Google Auth
router.get("/google", passport.authenticate("google", { scope: ["profile"] }))

// GET - Google Auth callback
router.get("/google/callback", passport.authenticate("google", { failureRedirect: ["/"] }), (req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // if (res) {
  //   res.send({
  //     isVerified: true,
  //     response: true
  //   });
  // } else {
  //   res.send({
  //     isVerified: false,
  //     response: false,
  //   });
  // }
  // res.send({
  //     isVerified: true,
  //      response: true
  //  });
  res.redirect("http://localhost:3000/profile")

}


)

//@route POST  api/auth
router.post("/", (req, res) => {  
  res.setHeader('Access-Control-Allow-Origin', '*');
  // validation 1
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields"})
   }

   
// validation 2 - check for existing email
User.findOne({ email })
.then(user => {
  if(!user) return res.status(400).json({ msg: "E-mail is not registered"});

// validation 3 password

bcrypt.compare(password, user.password).then(isMatch => {
  if (!isMatch) 
  return res.status(400).json({ msg: "Invalid credentials, please check your input."})

})

// JWT signature

jwt.sign(
  { id: user.id}, process.env.JWT_SECRET,
  { expiresIn: 3600 },
  (err, token) => {
    if (err) throw err;
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        isVerified: user.isVerified
      }
      
    })
  }
)


});

});

// get user data
// Private

router.get("/user", auth, (req, res) => {

User.findById(req.user.id)
.select("--password")
.then(
  user => {
    res.json(user)
    console.log(res.data)
  }
  
  );

});





module.exports = router;
