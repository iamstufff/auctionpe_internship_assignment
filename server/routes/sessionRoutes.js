const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/start-session', authMiddleware, sessionController.startSession);
router.post('/end-session', authMiddleware, sessionController.endSession);
router.get('/sessions', authMiddleware, sessionController.getSessions);

module.exports = router;
