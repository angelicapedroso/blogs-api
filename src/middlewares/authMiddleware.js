const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'secret';

const { User } = require('../database/models');

const tokenValidate = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    const user = await User.findOne({ where: { email: decoded.email } });
    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { tokenValidate };
