const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    requied: true,
    unique: true,
    trim: true,
  },
  hashed_password: {
    type: String,
    required: true,
  },
  salt: String,
}, { timestamps: true });


// userSchema.virtual('password')
//   .set(() => {

//   })
//   .get(() => {

//   })


// userSchema.methods = {
//   authenticate: (plainPassword) => {
//     bcrypt.compare(plainPassword, this.hashed_password, function(err, result) {
//       // result == true
//     });
//   },

//   securePassword: (plainPassword) => {
//     if (!plainPassword) return '';

//     try {

//     }
//     catch {

//     }
//   }


// }





module.exports = mongoose.model('User', userSchema);
