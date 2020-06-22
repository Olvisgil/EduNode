const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  User.findOne({ email: req.body.email }).then((user) => {
    let inputcode = req.body.inputcode;
    if (user.confirmationCode === inputcode) {
      res.send({
        isVerified: true,
        response: true
      });
    } else {
      res.send({
        response: false,
        message: "Invalid Code",
      });
    }

    next();
  });
});

module.exports = router;
