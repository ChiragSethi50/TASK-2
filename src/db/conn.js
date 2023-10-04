const mongoose = require("mongoose");



mongoose.connect("mongodb+srv://chiragsethi50:Chirag2611@cluster0.tlztvab.mongodb.net/", { useUnifiedTopology:true, useNewUrlParser:true })
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');  
})