const mongoose = require('mongoose');

const GoogleUserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: false
  },
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  confirmationCode: {
    type: String,
    required: false
  },
  googleId: {
    type: String,
    required: true
  },
  googleProfilePic: {
    type: String
  } 
});

const GoogleUser = mongoose.model('GoogleUser', GoogleUserSchema);

module.exports = GoogleUser;
