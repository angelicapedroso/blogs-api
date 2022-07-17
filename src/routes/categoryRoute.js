const { Router } = require('express');
const categoryController = require('../controllers/categoryController');
const { tokenValidate } = require('../middlewares/authMiddleware');

const router = Router();

router.post('/', tokenValidate, categoryController.create);

module.exports = router;
