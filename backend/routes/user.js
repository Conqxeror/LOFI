require("dotenv").config();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Key =require('./Key')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
 
  password: {
    type: String,
    required: true,
    unique: true,
  },
  confirmpassword: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
    unique: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// token generate
userSchema.methods.generateAuthtoken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, Key,{
      expiresIn:"1d"
    });
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
