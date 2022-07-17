const categoryService = require('../services/categoryService');

const create = async (req, res) => {
    const { name } = req.body;
    const category = await categoryService.create(name);
    const { status, result } = category;
    return res.status(status).json(result);
};

module.exports = { create };
