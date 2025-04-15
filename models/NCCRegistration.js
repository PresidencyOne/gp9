const mongoose = require('mongoose');

const NCCRegistrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  department: String,
  fathername: String,
  mothername: String,
  reason: String,
}, { timestamps: true });

module.exports = mongoose.model('NCCRegistration', NCCRegistrationSchema);
