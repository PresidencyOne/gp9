const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  name: String,
  studentId: String,
  email: String,
  department: String,
  complaintType: String,
  complaintDetails: String,
  suggestions: String,
});

module.exports = mongoose.model('Complaint', complaintSchema);


