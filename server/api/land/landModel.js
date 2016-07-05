var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LandSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  province:{
    type:String,
    required:true
  },
  canton:{
    type:String,
    required:true
  },
  district:{
    type:String,
    required:true
  },
  address:{
    type:String
  },
  owner:{
    type:Schema.Types.ObjectId,
    ref:'user',
    required:true
  }
});

module.exports = mongoose.model('land',LandSchema);
