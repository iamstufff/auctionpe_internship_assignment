const express = require('express');
const router = express.Router();
const actionController = require('../controllers/actionController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/log-action', authMiddleware, actionController.logAction);
router.get('/actions/:sessionId', authMiddleware, actionController.getActions);

module.exports = router;
