const User = require('../models/userModel');

const userController = {};

/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/
userController.signup = (req, res, next) => {

  const dummyData = {
    username: 'ppost',
    password: 'abc123'
  }


    User.create(dummyData)
      .then((user) => {
        user.save();
        res.locals.username = dummyData.username;
        console.log('inside mongoose create');
        return next();
      })
        .catch(() => {
          const err = {
            log: 'Express error handler caught error in userController.signup',
            status: 500,
            message: { err: 'An error has occurred' },
          };
          return next(err);
        });

    return next()
};



module.exports = userController;