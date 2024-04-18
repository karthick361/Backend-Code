const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

exports.authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        console.error('Token is missing!');
        return res.status(401).json({ message: 'Token is missing!' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.error('Invalid token:', err.message);
            return res.status(403).json({ message: 'Invalid token!' });
        }
        console.log('Token verified successfully:', user);
        req.user = user;
        next();
    });
};
