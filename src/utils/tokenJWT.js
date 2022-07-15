const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'secret';
const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateTokenJWT = (payload) => jwt.sign(payload, SECRET, jwtConfig);

module.exports = { generateTokenJWT };