const jwt = require('jsonwebtoken');
const db = require('../db');

exports.register = (req, res) => {
    const { username, password } = req.body;
    const newUser = { username, password };

    const sql = 'INSERT INTO users SET ?';

    db.query(sql, newUser, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json({ message: 'User created successfully!' });
    });
};

exports.login = (req, res) => {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM users WHERE username = ?';

    db.query(sql, username, (err, results) => {
        if (err || !results.length || results[0].password !== password) {
            return res.status(401).json({ message: 'Invalid credentials!' });
        }
        const accessToken = jwt.sign({ username: results[0].username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' });
        res.json({ token: accessToken });
    });
};

exports.profile = (req, res) => {
    res.json({ username: req.user.username, email: 'example@example.com' });
};
