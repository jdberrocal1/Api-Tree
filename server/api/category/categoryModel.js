var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name:{
    type:String,
    required:true,
    unique:true
  }/*,
  posts:[
    {
      ref:'posts',
      type:type:Schema.Types.ObjectId
    }
  ]*/
});

module.exports = mongoose.model('category',CategorySchema);
