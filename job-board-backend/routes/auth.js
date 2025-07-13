const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Temporary in-memory store for password reset tokens
let resetTokens = {};

// Register User
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log("Registering user:", { name, email, role });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration Error:', err);
    res.status(500).json({ message: 'Registration failed' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await findOne({ email });
    if (!user) return res.status(401).json({ message: 'User not found' });

    const isMatch = await compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

    res.json({ message: 'Login successful', role: user.role });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: 'Login failed' });
  }
});

// Forgot Password - Send Reset Link via Email
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const token = randomBytes(20).toString('hex');
    resetTokens[token] = email;

    const resetLink = `http://localhost:3000/reset-password/${token}`;

    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,     // Project mail
        pass: process.env.EMAIL_PASS,     // Project mail password
      },
    });

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? 'Exists' : 'Missing');
    console.log("Reset Link:", resetLink);

    await transporter.sendMail({
      to: email,
      subject: 'Job Board Password Reset',
      html: `
        <h3>Password Reset</h3>
        <p>Click the link below to reset your password:</p>
        <a href="${resetLink}">${resetLink}</a>
        <p>This link will expire after one use.</p>
      `,
    });

    res.json({ message: 'Reset link sent to email' });
  } catch (err) {
    console.error("Error while sending reset email:", err);
    res.status(500).json({ message: 'Error sending email' });
  }
});

// Reset Password - Update Password via Token
router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  const email = resetTokens[token];
  if (!email) return res.status(400).json({ message: 'Invalid or expired token' });

  try {
    const hashed = await hash(newPassword, 10);
    await findOneAndUpdate({ email }, { password: hashed });
    delete resetTokens[token]; // delete token after use
    res.json({ message: 'Password reset successful' });
  } catch (err) {
    console.error("Reset Error:", err);
    res.status(500).json({ message: 'Failed to reset password' });
  }
});


module.exports = router;