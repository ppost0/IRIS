const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {};



// ======================|CREATE JWT|========================

createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: '10d'});
}













// ===================|SIGN UP NEW USER|=====================

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
    // Register user in db
    const user = await User.create({ firstname, lastname, email, username, password: hash });
    // Create JWT
    const token = createToken(user._id);
    res.locals.email = email;
    res.locals.token = token;
    return next();
  }
  catch(error) {
    return res.status(500).json({ error: error.message });
  }

};



// =================|LOGIN EXISTING USER|=====================

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
    return res.status(400).json({ error: 'Could not login.' });
  }


  // Set password by finding db entry depending on if user or email was used to login
  let registeredPassword = '';
  if (emailExists) registeredPassword = emailExists.password;
  if (usernameExists) registeredPassword = usernameExists.password;


  // Check if entered password matches
  const matched = await bcrypt.compare(password, registeredPassword);
  if (!matched) {
    console.log('Password is incorrect.')
    return res.status(400).json({ error: 'Could not login.' })
  }


  try {
    res.locals.user = username ? username : email;
    const token = createToken(emailExists ? emailExists._id : usernameExists._id);
    res.locals.token = token;
    return next();
  }
  catch(error) {
    return res.status(500).json({ error: error.message });
  }

}


module.exports = userController;
