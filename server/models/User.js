const pool = require('../config/db');

const User = {
  findByEmail: (email) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users WHERE email = ?';
      pool.query(query, [email], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.length > 0 ? results[0] : null);
      });
    });
  },
  create: (userData) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
      pool.query(query, [userData.email, userData.password], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.insertId);
      });
    });
  }
};

module.exports = User;
