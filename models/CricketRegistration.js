// models/CricketRegistration.js
const mongoose = require('mongoose');

const CricketRegistrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  school: String,
  roll: String,
  phone: String,
  role: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('CricketRegistration', CricketRegistrationSchema);
