const mongoose = require('mongoose');

const AnchorRegistrationSchema = new mongoose.Schema({
  name: String,
  roll:Number,
  email: String,
  phone: String,
  school: String,
  interest: String
}, { timestamps: true });

module.exports = mongoose.model('AnchorRegistration', AnchorRegistrationSchema);
