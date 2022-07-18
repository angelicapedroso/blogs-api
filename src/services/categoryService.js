const { Category } = require('../database/models');

const create = async (name) => {
  if (!name || !name.length) {
    return { status: 400, result: { message: '"name" is required' } };
  }
  const category = await Category.create({ name });
  return { status: 201, result: category };
};

const getAll = async () => {
  const users = await Category.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

module.exports = { create, getAll };
