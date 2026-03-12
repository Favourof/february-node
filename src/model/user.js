const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    min: [18, "User must be atleast 18 years anove"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // role:{
  //   type:String,
  //   default: "user"
  // }
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
