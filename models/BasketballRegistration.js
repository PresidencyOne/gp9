// models/BasketballRegistration.js
const mongoose = require('mongoose');

const basketballRegistrationSchema = new mongoose.Schema({
  name: String,
  roll: String,
  email: String,
  phone: String,
  school: String,
  role: String,
}, { timestamps: true });

module.exports = mongoose.model('BasketballRegistration', basketballRegistrationSchema);
