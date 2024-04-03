const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.post('/signup', userController.signup, (req, res) => {
  return res.status(200).json('signup response');
});

router.post('/login', (req, res) => {
  return res.status(200).json('dummy response - login');
});


module.exports = router;
