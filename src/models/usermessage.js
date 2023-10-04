const express = require("express");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
    min: 10,
  },
  message: {
    type: String,
    required: true,
    minLength: 3,
  },
  date:{
      type:Date,
      default:Date.now
  }
});


const User = mongoose.model('User', userSchema);

module.exports = User;