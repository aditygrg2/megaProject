const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller');

router.get('/profile',passport.checkAuthentication,usersController.profile);
router.get('/signin',usersController.in);
router.get('/signup',usersController.up);
router.post('/create', usersController.create);
// router.post('/create-session',usersController.createSession);
router.get('/signout',usersController.signout);

//Passport.js ke liye as a middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
),usersController.createSession);

module.exports = router;