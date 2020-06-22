const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const mongoose = require("mongoose")


dotenv.config({ path: './config/config.env' });

// Load User model
const User = require('../models/User');
const { isValidObjectId } = require('mongoose');

const GoogleUser = require('../models/GoogleUser');


// get users
router.get("/", auth, (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  User.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json("Error: " + err));

});


// update user

router.put("/update", (req, res) => {
  const { email } = req.body;
  User.updateOne(
    {"email": email}, 
    {"isVerified": true}
    )
  .then(users => res.json(users))
  .catch(err => res.status(400).json("Error: " + err));

})

// google update user

router.put("http://localhost:5000/googleupdate", (req, res) => {
  GoogleUser.updateOne(
    {"isVerified": true}
    )
  .catch(err => res.status(400).json("Error: " + err));

})


// register user

router.post("/", (req, res) => {
  // validation 1
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ msg: "Email is required"})
  }

  if (!password) {
    return res.status(400).json({ msg: "Password is required"})
  }

// validation 2 - check for existing
User.findOne({ email })
.then(user => {
  if(user) return res.status(400).json({ msg: "User already exists"});


// code

const confirmationCode = Math.floor(Math.random() * 90000) + 10000


const newUser = new User({
  email,
  password,
  confirmationCode
});



// create salt and hash

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(newUser.password, salt, (err, hash) => {
    if (err) throw err;
    newUser.password = hash;
    newUser.save()
      .then(user => {
        jwt.sign(
          { id: user.id}, process.env.JWT_SECRET,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                email: user.email
              }
            });
          }
        )
          });
        })
      })

   })

});



module.exports = router;
