const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    Name:{
      type:String,
      required:true
    },
    username:{
      type:String,
      required:true
    },
    itemname: {
    type: String,
  },
  description : {
    type: String,
    required: true,
    unique: true,
  },
  lostlocation: {
    type: String,
    required: true,
    unique: true,
  },
  postimage:{
    type:String,
  },

 
});



const post = mongoose.model("post", postSchema);
module.exports = post;
