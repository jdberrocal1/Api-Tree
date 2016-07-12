var mongoose = require('mongoose');
var User = require('../user/userModel');
var ObjectId = require('mongoose').Types.ObjectId;
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

LandSchema.post('save',function (doc,next){
    var userObjectId = new ObjectId(this._doc.owner.toString());
    var landObjectId = new ObjectId(this._id.toString());
    User.findOne( {"_id": userObjectId}, function (err, user){
        if(err){
            this.invalidate('user', 'There was an error associating the land with an owner');
        } else if ( user != null) {
            var lands=user.lands;
            lands.push(landObjectId);
            user.lands.set(lands);
            user.save();
        } else {
            this.invalidate('user', 'There is not owner existing');
        }
    });
    next();
});

module.exports = mongoose.model('land',LandSchema);
