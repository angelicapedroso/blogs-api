const { User } = require('../database/models');
const { userSchema } = require('../schemas/userSchema');
const { generateTokenJWT } = require('../utils/tokenJWT');

const create = async (data) => {
  const { error } = userSchema.validate(data);
  if (error) {
    return { status: 400, result: { message: error.message } };
  }

  const { email } = data;
  const userExists = await User.findOne({
    where: { email },
  });
  if (userExists) {
    return { status: 409, result: { message: 'User already registered' } };
  }

  const user = await User.create(data);
  const newUser = user.toJSON();
  const { password, ...values } = newUser;
  const token = generateTokenJWT(values);
  return { status: 201, result: { token } };
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  if (!user) {
    return { status: 404, result: { message: 'User does not exist' },
    };
  }
  return { status: 200, result: user };
};

module.exports = { create, getAll, getById };
