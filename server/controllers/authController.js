const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authController = {
  signup: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findByEmail(email);
      if (user) { return res.status(401).json({ message: 'User Already Exists!' }) }
      const hashedPassword = await bcrypt.hash(password, 10);
      const userId = await User.create({ email, password: hashedPassword });
      const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET);
      res.status(201).json({ message: 'User created', token, userId });
    } catch (error) {
      console.log(error)
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findByEmail(email);
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
      res.json({ message: 'User logged in', userId : user.id ,token });
    } catch (error) {
      console.log(error)
    }
  },
};

module.exports = authController;
