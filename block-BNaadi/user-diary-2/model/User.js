var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema(
    {
        name: {type: String ,required:true},
        email:{type: String , required: true ,unique :true ,match:/@/},
        age:{type:Number , default:18},
        bio:{type: String ,required:true}

    },
    {timestamps:true}
);

var User = mongoose.model('User',userSchema);
module.exports = User;