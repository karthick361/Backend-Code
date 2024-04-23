const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        console.error('Token is missing!');
        return res.status(401).json({ message: 'Token is missing!' });
    }

    const tokenParts = token.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        console.error('Invalid token format');
        return res.status(401).json({ message: 'Invalid token format' });
    }
    const accessToken = tokenParts[1];

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.error('Invalid token:', err.message);
            return res.status(403).json({ message: 'Invalid token!' });
        }
        console.log('Token verified successfully:', user);
        req.user = user;
        next();
    });
};