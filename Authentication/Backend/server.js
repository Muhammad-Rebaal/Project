// server.js (Node.js backend with Express and MySQL)
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // To handle JSON payload

// MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nasaspace',
});

// Test endpoint
app.get('/', (req, res) => {
    res.json('From backend side');
});

// Signup endpoint to save user info in MySQL
app.post('/signup', (req, res) => {
    const { name, username, password, location } = req.body;
    const sql = "INSERT INTO user (name, username, password, location) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, username, password, location], (err, data) => {
        if (err) return res.json(err);
        res.json("User signed up successfully!");
    });
});

// Login endpoint to verify user credentials
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT * FROM user WHERE username = ? AND password = ?";
    db.query(sql, [username, password], (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) {
            res.json({ loggedIn: true, user: data[0] });
        } else {
            res.json({ loggedIn: false, message: "Invalid credentials" });
        }
    });
});

// Get user data for the table
app.get('/user', (req, res) => {
    const sql = "SELECT * FROM user";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        res.json(data);
    });
});

// Start the server
app.listen(8081, () => {
    console.log('Server listening on port 8081');
});
