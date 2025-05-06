// models/EuphoriaRegistration.js
const mongoose = require('mongoose');

const InvinciaRegistrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  school: String,
  roll: String,
  phone: String,
  role: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('InvinciaRegistration', InvinciaRegistrationSchema);
