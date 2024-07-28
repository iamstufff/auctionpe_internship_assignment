const Session = require('../models/Session');

const sessionController = {
  startSession: async (req, res) => {
    const userId = req.user.userId;
    try {
      if (!userId) {
        return res.status(400).json({ message: 'User ID is required' });
      }
      console.log('Starting session for user:', userId);
      const sessionId = await Session.create({ user_id: userId, start_time: new Date() });
      res.status(201).json({ message: 'Session started', sessionId });
    } catch (error) {
      console.error('Error starting session:', error);
      res.status(500).json({ message: 'Server Error', error });
    }
  },
  endSession: async (req, res) => {
    const { sessionId } = req.body;
    try {
      if (!sessionId) {
        return res.status(400).json({ message: 'Session ID is required' });
      }
      console.log('Ending session with ID:', sessionId);
      await Session.end(sessionId);
      res.status(200).json({ message: 'Session ended' });
    } catch (error) {
      console.error('Error ending session:', error);
      res.status(500).json({ message: 'Server Error', error });
    }
  },
  getSessions: async (req, res) => {
    try {
      const { userId } = req.user;
      const sessions = await Session.findByUserId(userId);
      res.status(200).json(sessions);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving sessions', error });
    }
  },
};

module.exports = sessionController;
