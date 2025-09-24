const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  mobile: { type: String, unique: true },
  otp: { type: String },
  otpExpire: { type: Date }
});

module.exports = userSchema;
