const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const postController = require('../controllers/postController');
console.log("Router Loaded!");

router.get('/',homeController.home);
router.use('/users',require('./users'));
router.get('/posts',postController.postimg);
router.use('/likes',require('./likes'));

// Basically here,
// router.get basically bs us route pe return krega, agar vaha ek new require file daal di to vo usko render ni krta vo bs leta hai direct execute.
// For rendering another file, we use a middleware jo ki router.use se hota hai

module.exports = router;