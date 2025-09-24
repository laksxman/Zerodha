// authController.js
const User = require("../model/User.js");
const jwt = require("jsonwebtoken");
const { generateOTP } = require("../utils/otp");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET || "secret";

// Helper: normalize mobile number
const formatMobile = (mobile) => (mobile.startsWith("+") ? mobile : "+91" + mobile);

// Request OTP
const requestOTP = async (req, res) => {
  try {
    let { mobile } = req.body;
    if (!mobile) return res.status(400).json({ msg: "Mobile number required" });

    mobile = formatMobile(mobile);

    // Find or create user
    let user = await User.findOne({ mobile });
    if (!user) user = new User({ mobile });

    // Generate OTP and expiry
    const otp = generateOTP(); // 6-digit string
    const otpExpire = Date.now() + 5 * 60 * 1000; // 5 minutes

    user.otp = otp;
    user.otpExpire = otpExpire;
    await user.save(); // ✅ Save OTP to DB

    console.log(`Generated OTP for ${mobile}: ${otp}`);

    // TODO: Send OTP via SMS (Twilio, etc.) in production
    res.json({ msg: "OTP generated successfully!", otp }); // otp only for dev/testing
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to generate OTP" });
  }
};

// Verify OTP
const verifyOTP = async (req, res) => {
  try {
    let { mobile, otp } = req.body;
    if (!mobile || !otp) return res.status(400).json({ msg: "Mobile and OTP required" });

    mobile = formatMobile(mobile);

    const user = await User.findOne({ mobile });
    if (!user) return res.status(400).json({ msg: "User not found" });

    if (user.otp !== otp) return res.status(400).json({ msg: "Invalid OTP" });
    if (user.otpExpire < Date.now()) return res.status(400).json({ msg: "OTP expired" });

    // OTP verified → generate JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

    // Clear OTP
    user.otp = null;
    user.otpExpire = null;
    await user.save();

    res.json({ msg: "OTP verified successfully!", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { requestOTP, verifyOTP };
