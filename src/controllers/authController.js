const authService = require('../services/authService');

const login = async (req, res) => {
  const auth = await authService.authentication(req.body);
  const { status, result } = auth;
  return res.status(status).json(result);
};

module.exports = { login };
