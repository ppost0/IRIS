const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    maxlength: 32,
    trim: true,
  },
  lastname: {
    type: String,
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
  password: {
    type: String,
    required: true,
  },
  salt: String,
}, { timestamps: true });





module.exports = mongoose.model('User', userSchema);
