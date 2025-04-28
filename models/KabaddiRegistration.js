// models/KabaddiRegistration.js
const mongoose = require('mongoose');

const KabaddiRegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roll: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  school: { type: String, required: true },
  role: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('KabaddiRegistration', KabaddiRegistrationSchema);
