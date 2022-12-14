const userService = require('../services/userService');

const create = async (req, res) => {
  const user = await userService.create(req.body);
  const { status, result } = user;
  return res.status(status).json(result);
};

const getAll = async (_req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, result } = await userService.getById(id);
  return res.status(status).json(result);
};

module.exports = { create, getAll, getById };
