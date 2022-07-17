const { Category } = require('../database/models');
const { categorySchema } = require('../schemas/categorySchema');

const create = async (name) => {
  const { error } = categorySchema.validate(name);
  if (error) {
    return { status: 400, result: { message: error.message } };
  }

  const category = await Category.create({ name });
  return { status: 201, result: category };
};

module.exports = { create };