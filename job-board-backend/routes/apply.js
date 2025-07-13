const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Application = require('../models/Application.js');

// Configure multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Store resumes in 'uploads/' folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Route: POST /api/apply
router.post('/', upload.single('resume'), async (req, res) => {
  const { name, email } = req.body;
  const resume = req.file;

  if (!resume) {
    return res.status(400).json({ message: 'Resume upload failed' });
  }

  try {
  const newApp = new Application({
    name,
    email,
    resume: resume.filename,
    jobTitle: 'Frontend Developer' // Optional: make this dynamic later
  });

  await newApp.save();

  res.status(200).json({ message: 'Application received and stored' });
} catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Error saving application' });
}


  console.log('New Application Received:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Resume:', resume.path);

  res.status(200).json({ message: 'Application received successfully!' });
});

module.exports = router;
