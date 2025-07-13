const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const jobRoutes = require('./routes/Jobs');
const authRoutes = require('./routes/auth');
const applyRoutes = require('./routes/apply');
const applicationRoutes = require('./routes/applications');
app.use(cors());
app.use(express.json());

app.use('/api/jobs', jobRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/apply', applyRoutes);
app.use('/api/applications', applicationRoutes);


//  Base route
app.get('/', (req, res) => {
  res.send(' Backend is Running on Render!');
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB Connected");
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
  });
}).catch((err) => {
  console.error("MongoDB connection failed", err.message);
});
