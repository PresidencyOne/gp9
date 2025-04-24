const mongoose = require('mongoose');

const SingingRegistrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  vocalRange: String,
  experience: String
}, { timestamps: true });

module.exports = mongoose.model('SingingRegistration', SingingRegistrationSchema);
