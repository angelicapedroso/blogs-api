const userService = require('../services/userService');

const create = async (req, res) => {
  const user = await userService.create(req.body);
  const { status, result } = user;
  return res.status(status).json(result);
};

module.exports = { create };
