// models/CricketRegistration.js
const mongoose = require('mongoose');

const GamingRegistrationSchema = new mongoose.Schema({
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

module.exports = mongoose.model('GamingRegistration', GamingRegistrationSchema);
