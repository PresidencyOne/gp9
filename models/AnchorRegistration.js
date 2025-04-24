const mongoose = require('mongoose');

const AnchorRegistrationSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  department: String,
  interest: String
}, { timestamps: true });

module.exports = mongoose.model('AnchorRegistration', AnchorRegistrationSchema);
