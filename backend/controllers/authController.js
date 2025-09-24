const User = require("../model/User.js");
const jwt = require("jsonwebtoken");
const { generateOTP } = require("../utils/otp");

require("dotenv").config(); 

const JWT_SECRET = process.env.JWT_SECRET || "secret";

const requestOTP = async (req, res) => {
  try {
    const { mobile } = req.body;
    let user = await User.findOne({ mobile });

    if (!user) user = new User({ mobile });

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpire = Date.now() + 5 * 60 * 1000;

    console.log(`Generated OTP for ${mobile}: ${otp}`);

    res.json({ otp, msg: "OTP generated successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to generate OTP" });
  }
};

// Verify OTP
const verifyOTP = async (req, res) => {
  try {
    const { mobile, otp } = req.body;
    const user = await User.findOne({ mobile });

    if (!user) return res.status(400).json({ msg: "User not found" });
    if (user.otp !== otp) return res.status(400).json({ msg: "Invalid OTP" });
    if (user.otpExpire < Date.now())
      return res.status(400).json({ msg: "OTP expired" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

    user.otp = null;
    user.otpExpire = null;
    await user.save();

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { requestOTP, verifyOTP };
