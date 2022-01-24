var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true, match: /@/ },
    age: { type: Number, default: 18 },
    address: { type: String},
    bio: { type: String },
    hobbies: { type: String },
  },
  { timestamps: true }
);

var User = mongoose.model('User', userSchema);
module.exports = User;