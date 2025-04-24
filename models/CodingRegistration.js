const mongoose = require('mongoose');

const CodingRegistrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  department: String,
  skills: String
}, { timestamps: true });

module.exports = mongoose.model('CodingRegistration', CodingRegistrationSchema);
