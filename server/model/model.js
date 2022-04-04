const mongoose = require("mongoose");
var schema = new mongoose.Schema({
  name: { type: String, required: true },
  specie:{ type:String, required:true},
  gender: String,
  vaccine: String
});

const Userdb = mongoose.model('userdb', schema)

module.exports=Userdb;