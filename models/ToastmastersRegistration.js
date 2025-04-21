const mongoose = require('mongoose');

const ToastmastersSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  department: String,
  year: String,
}, { timestamps: true });

module.exports = mongoose.model('ToastmastersRegistration', ToastmastersSchema);
