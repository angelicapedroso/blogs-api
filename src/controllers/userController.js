const userService = require('../services/userService');

const userController = {
  async create(req, res) {
    const user = await userService.create(req.body);
    const { status, result } = user;
    return res.status(status).json(result);
  },
};

module.exports = userController;