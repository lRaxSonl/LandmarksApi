const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config')



function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    console.log(token)

    if (!token) {
        return res.status(401).json({ message: 'Access token is missing' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token', details: err.message });
        }
        req.user = user;
        next();
    });
}

module.exports = { authenticateToken };
