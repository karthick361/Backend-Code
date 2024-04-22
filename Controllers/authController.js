const jwt = require('jsonwebtoken');
const db = require('../db');
const dotenv = require('dotenv');

dotenv.config();

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

exports.register = (req, res) => {
    const { username, email, password } = req.body;
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to create user', error: err.message });
        }
        res.status(201).json({ message: 'User created successfully', userId: result.insertId });
    });
};

exports.getUsers = (req, res) => {
    const userId = req.params.id;
    const sql = 'SELECT * FROM users';
    db.query(sql, userId, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to fetch user', error: err.message });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ user: result });
    });
};

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const { username, email, password } = req.body;
    const sql = 'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?';
    db.query(sql, [username, email, password, userId], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to update user', error: err.message });
        }
        res.json({ message: 'User updated successfully' });
    });
};
exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, userId, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to delete user', error: err.message });
        }
        res.json({ message: 'User deleted successfully' });
    });
};

