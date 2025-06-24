import express from 'express';
import User from '../models/User.js';
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, gmail, password, confirmpassword } = req.body;
  if (!username || !gmail || !password || !confirmpassword) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  if (password !== confirmpassword) {
    return res.status(400).json({ message: 'Passwords do not match.' });
  }
  // Check if user exists
  const existing = await User.findOne({ gmail });
  if (existing) {
    return res.status(400).json({ message: 'User already exists.' });
  }
  // Save user (hash password in production!)
  const user = new User({ username, gmail, password });
  await user.save();
  res.status(201).json({ message: 'User registered successfully.' });
});

router.post('/login', async (req, res) => {
  const { gmail, password } = req.body;
  if (!gmail || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  const user = await User.findOne({ gmail });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials.' });
  }
  // In production, compare hashed passwords!
  if (user.password !== password) {
    return res.status(400).json({ message: 'Invalid credentials.' });
  }
  // Optionally, generate a token here
  res.status(200).json({ message: 'Login successful.', user: { id: user._id, username: user.username, gmail: user.gmail } });
});

export default router;