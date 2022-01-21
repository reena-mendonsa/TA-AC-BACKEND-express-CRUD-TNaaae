var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    age: { type: Number, default: 18},
    email: {type: String,unique:true, required:true, match:/@/ }
  },
  { timestamps: true }
);

var User = mongoose.model("User", userSchema);
module.exports = User;