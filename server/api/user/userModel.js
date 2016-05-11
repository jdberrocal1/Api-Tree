var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  fullname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    unique:true
  },
  telephone:{
    type:String,
    required:true
  },
  manager: {
    type: Boolean,
    required: true
  }

});

module.exports = mongoose.model('user',UserSchema);
