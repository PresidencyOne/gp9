const mongoose = require('mongoose');

const NSSRegistrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  department: String,
  reason: String,
}, { timestamps: true });

module.exports = mongoose.model('NSSRegistration', NSSRegistrationSchema);
