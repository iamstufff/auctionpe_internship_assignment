const Action = require("../models/Action");

const actionController = {
  logAction: async (req, res) => {
    try {
      const actionData = req.body;
      const actionId = await Action.log({
        ...actionData,
        timestamp: new Date(),
      });
      res.status(201).json({ message: "Action logged", actionId });
    } catch (error) {
      res.status(500).json({ message: "Error logging action", error });
    }
  },
  getActions: async (req, res) => {
    try {
      const { sessionId } = req.params;
      const actions = await Action.findBySessionId(sessionId);
      res.status(200).json(actions);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving actions", error });
    }
  },
};

module.exports = actionController;
