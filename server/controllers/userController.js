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

// /**
// * createUser - create and save a new User into the database.
// */
// userController.signup = (req, res, next) => {

//   if (req.body.username && req.body.password) {
//     res.locals.newUser = {...req.body}; //Object.assign(req.body)
//     // insert thew newUser object the model document inside our mongoose
//     User.create(res.locals.newUser)
//       .then(
//         function() {
//           User.findOne({username: `${res.locals.user}`})
//             .then((data) => {
//               res.locals.id = data._id.toString();
//             })
//         }
//       )
//     return next();
//   } else {
//     return next('Error: Invalid user input');
//   }

// };

// /**
// * verifyUser - Obtain username and password from the request body, locate
// * the appropriate user in the database, and then authenticate the submitted password
// * against the password stored in the database.
// */
// userController.verifyUser = (req, res, next) => {
//   // write code here
//   res.locals.user = req.body.username;
//   res.locals.pw = req.body.password;


//   User.findOne({username: `${res.locals.user}`})
//     .then((data) => {
//       console.log(data);
//       if (data !== null && data.password === res.locals.pw) {
//         res.locals.id = data._id.toString();
//         console.log(data._id.toString(), 'data id')
//         console.log(req.body, 'req.body');
//         return next();
//       }
//       else {
//         res.redirect('/signup');
//       }
//     });
//   // return next();

// };

module.exports = userController;