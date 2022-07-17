const categoryService = require('../services/categoryService');

const create = async (req, res) => {
    const { name } = req.body;
    const category = await categoryService.create(name);
    const { status, result } = category;
    return res.status(status).json(result);
};

const getAll = async (_req, res) => {
    const result = await categoryService.getAll();
    return res.status(200).json(result);
};

module.exports = { create, getAll };
