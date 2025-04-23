const mongoose = require('mongoose');

const danceRegistrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  danceStyle: String,
  experience: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('DanceRegistration', danceRegistrationSchema);
