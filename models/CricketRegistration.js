const mongoose = require('mongoose');

const cricketSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  school: String,
  role: String,
}, { timestamps: true });

module.exports = mongoose.model('CricketRegistration', cricketSchema);
