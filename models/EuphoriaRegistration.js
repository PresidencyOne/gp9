// models/EuphoriaRegistration.js
const mongoose = require('mongoose');

const EuphoriaRegistrationSchema = new mongoose.Schema({
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

module.exports = mongoose.model('EuphoriaRegistration', EuphoriaRegistrationSchema);
