const { Router } = require('express');
const postController = require('../controllers/postController');
const { tokenValidate } = require('../middlewares/authMiddleware');

const router = Router();

router.get('/', tokenValidate, postController.getAll);

router.get('/:id', tokenValidate, postController.getById);

module.exports = router;
