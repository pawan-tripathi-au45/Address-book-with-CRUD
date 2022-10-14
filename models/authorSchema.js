const mongoose = require("mongoose");

const addressBook = new mongoose.Schema({
  name: 
  {type:String,
  required:true},
  
  age: 
  {type:Number,
  required:true},
  
  mobile_number: 
  {type:String,
  required:true},
  
  email: 
  {type:String,
  required:true},
  
  profession: 
  {type:String,
  required:true},
});

const contactDetails = new mongoose.model("addressBook", addressBook);

module.exports = contactDetails;
