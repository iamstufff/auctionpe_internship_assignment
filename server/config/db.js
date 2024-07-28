require('dotenv').config();
const mysql = require('mysql');

const pool = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

pool.connect((err) => {
    if (err) throw err;
    console.log("Database Connection Successful!");

    const createUserTable = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;
    pool.query(createUserTable, (err, result) => {
        if (err) throw err;
        console.log("Users table ready");
    });

    const createSessionTable = `
        CREATE TABLE IF NOT EXISTS sessions (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            start_time DATETIME NOT NULL,
            end_time DATETIME,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )
    `;
    
    pool.query(createSessionTable, (err, result) => {
        if (err) throw err;
        console.log("Sessions table ready");
    });

    const createActionTable = `
        CREATE TABLE IF NOT EXISTS actions (
            id INT AUTO_INCREMENT PRIMARY KEY,
            session_id INT NOT NULL,
            action_type VARCHAR(255) NOT NULL,
            timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (session_id) REFERENCES sessions(id)
        )
    `;
    pool.query(createActionTable, (err, result) => {
        if (err) throw err;
        console.log("Actions table ready");
    });
});

module.exports = pool;
