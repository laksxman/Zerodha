// src/landing_page/signup/OtpVerify.js
import React, { useState, useEffect } from "react";
import { verifyOTP } from "../../api/auth";
import "./signup.css";

export default function OtpVerify({ mobile, otpFromBackend, onSuccess }) {
  const [otp, setOtp] = useState("");

  // Auto-fill OTP and show alert when component mounts
  useEffect(() => {
    if (otpFromBackend) {
      alert(`Your OTP is: ${otpFromBackend}`);
      setOtp(otpFromBackend);
    }
  }, [otpFromBackend]);

  const handleVerifyOtp = async () => {
    if (!otp) return alert("Please enter OTP");
    try {
      const res = await verifyOTP(mobile, otp);
      localStorage.setItem("token", res.data.token);
      alert("Signup/Login successful!");
      onSuccess();
    } catch (err) {
      alert("Invalid or expired OTP");
      console.error(err);
    }
  };

  return (
    <div className="otp-container">
      <input
        type="number"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button className="btn btn-success" onClick={handleVerifyOtp}>
        Verify OTP
      </button>
    </div>
  );
}
