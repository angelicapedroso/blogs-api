const { Router } = require('express');
const userController = require('../controllers/userController');
const { tokenValidate } = require('../middlewares/authMiddleware');

const router = Router();

router.post('/', userController.create);

router.get('/', tokenValidate, userController.getAll);

module.exports = router;