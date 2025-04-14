const mongoose = require("mongoose");

const gamingRegistrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  game: String,
  studentId: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("GamingRegistration", gamingRegistrationSchema);
