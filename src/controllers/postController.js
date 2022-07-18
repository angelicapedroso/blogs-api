const postService = require('../services/postService');

const getAll = async (_req, res) => {
  const posts = await postService.getAll();
  return res.status(200).json(posts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getById(id);
  const { status, result } = post;
  return res.status(status).json(result);
};

module.exports = { getAll, getById };
