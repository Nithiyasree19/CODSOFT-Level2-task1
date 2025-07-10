const express = require('express');
const router = express.Router();
const Job = require('../models/job');

// POST a new job
router.post('/', async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    console.error("Failed to post job:", err);
    res.status(500).json({ error: 'Failed to post job' });
  }
});

// GET all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find(); // ✅ get all jobs
    res.json(jobs);
  } catch (err) {
    console.error("Failed to fetch jobs:", err);
    res.status(500).send("Server Error");
  }
});

// GET a job by ID
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).send("Job not found");
    res.json(job);
  } catch (err) {
    console.error("Failed to fetch job by ID:", err);
    res.status(500).send("Server Error");
  }
});

// DELETE a job by ID
router.delete('/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).send("Job not found");
    res.json({ message: "Job deleted successfully" });
  } catch (err) {
    console.error("Failed to delete job:", err);
    res.status(500).send("Server Error");
  }
});


module.exports = router;
