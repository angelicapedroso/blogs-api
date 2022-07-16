const { Router } = require('express');
const userController = require('../controllers/userController');
const { tokenValidate } = require('../middlewares/authMiddleware');

const router = Router();

router.post('/', userController.create);

router.get('/', tokenValidate, userController.getAll);

router.get('/:id', tokenValidate, userController.getById);

module.exports = router;
