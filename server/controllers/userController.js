const User = require('../models/userModel.js');

const userController = {};


userController.signup = async (req, res, next) => {

  const user = {
    firstname: 'Patrick',
    lastname: 'Post',
    username: 'ppost',
    email: 'hello@patrick.com',
    hashed_password: '6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090',
    salt: 'salt',
  }

  await User.create(user)



  return next()
};



module.exports = userController;