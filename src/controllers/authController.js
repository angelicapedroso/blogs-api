const authService = require('../services/authService');

const authController = {
  async login(req, res) {
    const auth = await authService.authentication(req.body);
    const { status, result } = auth;
    return res.status(status).json(result);
  },
};

module.exports = authController;
