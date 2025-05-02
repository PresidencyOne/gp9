const mongoose = require('mongoose');

const danceRegistrationSchema = new mongoose.Schema({
  name: String,
  roll: String,
  email: String,
  phone: String,
  school: String,
  danceStyle: String,
  experience: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('DanceRegistration', danceRegistrationSchema);
