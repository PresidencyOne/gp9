const mongoose = require('mongoose');

const SingingRegistrationSchema = new mongoose.Schema({
  name: String,
  roll: String,
  email: String,
  phone: String,
  department: String,
  experience: String
}, { timestamps: true });

module.exports = mongoose.model('SingingRegistration', SingingRegistrationSchema);
