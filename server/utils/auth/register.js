const express = require('express');
const router = express.Router();
const User = require('../models/user');

// POST route to register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, image } = req.body;

    // Check if a user with the same email or username already exists in the database
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Create a new user document using the User model and save it to the database
    const user = new User({ username, email, password, image });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
