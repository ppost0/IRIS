const User = require('../models/userModel.js');

const userController = {};


userController.signup = async (req, res, next) => {


  // Grab data from request here
  const { firstname, lastname, email, username, password } = req.body;

  // Check if required fields are missing
  if (!email, !username, !password) {
    return res.status(400).json({ error: 'Required fields missing.' })
  }


  // dummy data for testing
  // const account = {
  //   firstname: 'Cynthia',
  //   lastname: 'Jones',
  //   username: 'cjones22',
  //   email: 'hello@cynthia.com',
  //   hashed_password: '6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090',
  //   salt: 'salt',
  // }

  // Add document to db
  try {
    const user = await User.create({ firstname, lastname, email, username, password });
    res.locals.email = email;
    return next();
  }
  catch(error) {
    return res.status(500).json('Could not register user ' + email );
  };

};



module.exports = userController;