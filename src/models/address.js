const express = require("express");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  address1: {
    type: String,
    required: true,

  },
  address2: {
    type: String,
    required: true,

  },
  postcode: {
    type: String,
    required: true,
  
  },
  state: {
    type: String,
    required: true,
   
  }, 
  area: {
    type: String,
    required: true,
   
  },
  country: {
    type: String,
    required: true,
  
  },
  state: {
    type: String,
    required: true,
    
  },
  landmark: {
    type: String,
    required: true,
    
  },


});


const addlog = mongoose.model('addlog', userSchema);

module.exports = addlog;