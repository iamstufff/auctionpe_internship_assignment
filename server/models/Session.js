const pool = require('../config/db');

const Session = {
    create: async (sessionData) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO sessions SET ?';
            pool.query(query, [sessionData], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results.insertId);
            });
        });
    },
    end: async (id) => {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE sessions SET end_time = NOW() WHERE id = ?';
            pool.query(query, [id], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results.affectedRows > 0);
            });
        });
    },
    findByUserId: async (userId) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM sessions WHERE user_id = ?';
            pool.query(query, [userId], (error, rows) => {
                if (error) {
                    return reject(error);
                }
                resolve(rows);
            });
        });
    },
};

module.exports = Session;
