const { User } = require('../database/models');
const { generateTokenJWT } = require('../utils/tokenJWT');

const authService = {

  async authentication({ email, password }) {
    if (!email || !password) {
      return {
        status: 400,
        result: { message: 'Some required fields are missing' },
      };
    }
    const user = await User.findOne({
      attributes: ['email'],
      where: { email, password },
    });
    if (!user) {
      return {
        status: 400,
        result: { message: 'Invalid fields' },
      };
    }
    const token = generateTokenJWT(user.dataValues);
    return { status: 200, result: { token } };
  },
};

module.exports = authService;
