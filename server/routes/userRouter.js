const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

// router.post('/login', userController.login, (req, res) => {
//   return res.status(200).json('dummy response - login');
// });

// router.post('/signup', userController.signup, (req, res) => {
//   return res.status(200).json('dummy response - signup');
// });


module.exports = router;