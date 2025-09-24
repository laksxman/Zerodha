const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    otp: {
      type: String,
      default: null, 
    },
    otpExpire: {
      type: Date,
      default: null, 
    },
  },
  { timestamps: true } 
);

module.exports = mongoose.model("User", userSchema);
