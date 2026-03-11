const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      // select: false
    }
   
  },
  { timestamps: true },
);
const UserModel = mongoose.model("Radhe",UserSchema);
module.exports = UserModel;
