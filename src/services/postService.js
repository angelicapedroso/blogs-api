const { BlogPost, User, Category } = require('../database/models');

const postQuery = {
  include: [{
    model: User,
    as: 'user',
    attributes: {
      exclude: ['password'],
    },
  }, {
    model: Category,
    as: 'categories',
  }],
};

const getAll = async () => {
  const posts = await BlogPost.findAll(postQuery);
  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, postQuery);
  if (!post) return { status: 404, result: { message: 'Post does not exist' } };
  return { status: 200, result: post };
};

module.exports = { getAll, getById };
