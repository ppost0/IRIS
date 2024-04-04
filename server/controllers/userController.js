const User = require('../models/userModel.js');

const userController = {};


userController.signup = async (req, res, next) => {

  // Grab data from request here
  const { firstname, lastname, email, username, password } = req.body;

  // Check if required fields are missing
  if (!email, !username, !password) {
    return res.status(400).json({ error: 'Required fields missing.' });
  }

  // Check if email exists
  const emailExists = await User.exists({ email });
  console.log('emailexists --->', emailExists);
  if (emailExists) {
    return res.status(400).json({ error: 'Email already in use.' });
  }

  // Check if username exists
  const usernameExists = await User.exists({ username });
  console.log('usernamexists ---->', usernameExists)
  if (usernameExists) {
    return res.status(400).json({ error: 'Username already in use.' });
  }


  // Add document to db
  try {
    const user = await User.create({ firstname, lastname, email, username, password });
    res.locals.email = email;
    return next();
  }
  catch(error) {
    return res.status(500).json({ error: error.message });
  };

};



module.exports = userController;