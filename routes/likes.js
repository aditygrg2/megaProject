const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const usersController = require('../controllers/users_controller');
const likesController = require('../controllers/likescontroller');

router.get('/',likesController.likes);
router.get('/post',postController.postimg);
router.get('/users',usersController.profile);

module.exports = router;