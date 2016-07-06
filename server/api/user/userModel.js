var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    },
    manager: {
        type: Boolean,
        required: true
    },
    lands:[
        {
            type: Schema.Types.ObjectId,
            ref: 'land'
        }
    ]

});

module.exports = mongoose.model('user',UserSchema);
