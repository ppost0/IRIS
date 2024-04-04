const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');


const userController = {};


userController.signup = async (req, res, next) => {

  // Grab data from request here
  const { firstname, lastname, email, username, password } = req.body;


  // Check if required fields are missing
  if (!email || !username || !password) {
    return res.status(400).json({ error: 'Required fields missing.' });
  }


  // Check if email exists
  const emailExists = await User.exists({ email });
  if (emailExists) {
    return res.status(400).json({ error: 'Email already in use.' });
  }


  // Check if username exists
  const usernameExists = await User.exists({ username });
  if (usernameExists) {
    return res.status(400).json({ error: 'Username already in use.' });
  }


  // Hash user password
  const salt = await bcrypt.genSalt();
  // console.log('salt --->', salt);
  const hash = await bcrypt.hash(password, salt);
  // console.log('hash --->', hash);




  // Add document to db
  try {
    const user = await User.create({ firstname, lastname, email, username, password: hash });
    res.locals.email = email;
    return next();
  }
  catch(error) {
    return res.status(500).json({ error: error.message });
  }

};

userController.login = async (req, res, next) => {


  // Grab data from request here
  const { email, username, password } = req.body;


  // Check if required fields are missing
  if ((!email && !username) || !password) {
    return res.status(400).json({ error: 'Required fields missing.' });
  }


  // Check if email or username exists
  const emailExists = await User.findOne({ email });
  const usernameExists = await User.findOne({ username });
  if (!emailExists && !usernameExists) {
    console.log('Username or email does not exist');
    return res.status(400).json({ error: 'Email / username or password incorrect.' });
  }

  let registeredPassword = '';
  if (emailExists) registeredPassword = emailExists.password;
  if (usernameExists) registeredPassword = usernameExists.password;

  // Check password
  const matched = await bcrypt.compare(password, registeredPassword);
  if (!matched) {
    console.log('Password is incorrect.')
    return res.status(400).json({ error: 'Email/username or password incorrect.' })
  }


  // Add document to db
  try {
    res.locals.user = username || email;
    return next();
  }
  catch(error) {
    return res.status(500).json({ error: error.message });
  }



}


module.exports = userController;
