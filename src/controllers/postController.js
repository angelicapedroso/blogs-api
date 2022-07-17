const postService = require('../services/postService');

const getAll = async (_req, res) => {
  const posts = await postService.getAll();
  return res.status(200).json(posts);
};

module.exports = { getAll };
