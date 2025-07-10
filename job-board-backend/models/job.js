const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
  // Optional for "Closed" feature
  // status: { type: String, default: 'Open' }
});

module.exports = mongoose.model('Job', jobSchema);
