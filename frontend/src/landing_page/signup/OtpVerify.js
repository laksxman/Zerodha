import React, { useState, useEffect } from "react";
import { verifyOTP } from "../../api/auth";
import "./signup.css";

export default function OtpVerify({ mobile, otpFromBackend, onSuccess, otpInputRef }) {
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (otpFromBackend) {
      alert(`Your OTP is: ${otpFromBackend}`);
      setOtp(otpFromBackend);

      // Auto-focus input if ref provided
      otpInputRef?.current?.focus();
    }
  }, [otpFromBackend, otpInputRef]);

  const handleVerifyOtp = async () => {
    if (!otp) return alert("Please enter OTP");

    try {
      const res = await verifyOTP(mobile, otp);
      localStorage.setItem("token", res.data.token);
      alert("Signup/Login successful!");
      onSuccess();
    } catch (err) {
      alert(err.response?.data?.msg || "Invalid or expired OTP");
      console.error(err);
    }
  };

  return (
    <div className="otp-container">
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        ref={otpInputRef} // attach ref for auto-focus
      />
      <button className="btn btn-success" onClick={handleVerifyOtp}>
        Verify OTP
      </button>
    </div>
  );
}
