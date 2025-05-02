const mongoose = require('mongoose');

const CodingRegistrationSchema = new mongoose.Schema({
  name: String,
  roll:Number,
  email: String,
  phone: String,
  school: String,
  skills: String
}, { timestamps: true });

module.exports = mongoose.model('CodingRegistration', CodingRegistrationSchema);
