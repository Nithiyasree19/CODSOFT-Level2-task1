require('dotenv').config();
// server.js
//routes
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const jobRoutes = require('./routes/Jobs');
const applyRoute = require('./routes/apply');
const applicationRoutes = require('./routes/applications');
const authRoutes = require('./routes/auth');



dotenv.config();

// Initialize Express App or Middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/jobs', jobRoutes);
app.use('/api/apply', applyRoute);
app.use('/api/applications', applicationRoutes);
app.use('/api/auth', authRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});