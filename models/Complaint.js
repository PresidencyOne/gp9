// models/Complaint.js
const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
  name: String,
  email: String,
  category: String,
  complaint: { type: String, required: true },
  visibility: { type: String, enum: ['public', 'admin'], default: 'public' },
}, { timestamps: true });

module.exports = mongoose.model('Complaint', ComplaintSchema);
