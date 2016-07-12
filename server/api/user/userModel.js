var mongoose = require('mongoose');
//var Land = require('../land/landModel');
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

/*UserSchema.pre('remove',function (doc,next){
    var userObjectId = new ObjectId(this._doc._id.toString());
    var landsByUser=[];

    Land.find( {"owner": userObjectId}, function (err, lands){
        if(err){
            this.invalidate('user', 'There was an error associating the land with an owner');
        } else if ( lands != null) {
            var x = lands;
        } else {
            this.invalidate('user', 'There is not owner existing');
        }
    });
    next();
});*/



module.exports = mongoose.model('user',UserSchema);
