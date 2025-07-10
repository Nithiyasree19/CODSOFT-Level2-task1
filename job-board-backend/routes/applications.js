const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// GET /api/applications — fetch all submitted applications
router.get('/', async (req, res) => {
  try {
    const applications = await Application.find().sort({ appliedAt: -1 }); // latest first
    res.status(200).json(applications);
  } catch (error) {
    console.error('Failed to fetch applications:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
