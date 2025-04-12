const mongoose = require('mongoose');

const LostFoundSchema = new mongoose.Schema({
  name: String,
  email: String,
  type: { type: String, enum: ['Lost', 'Found'] },
  description: String,
  image: String, // base64 string
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LostFound', LostFoundSchema);
