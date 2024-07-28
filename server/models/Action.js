const pool = require('../config/db');

const Action = {
  log: async (actionData) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO actions SET ?';
      pool.query(query, [actionData], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.insertId);
      });
    });
  },

  findBySessionId: async (sessionId) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM actions WHERE session_id = ?';
      pool.query(query, [sessionId], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },
};

module.exports = Action;
