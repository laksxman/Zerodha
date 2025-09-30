import React, { useState, useRef } from "react";
import { requestOTP } from "../../api/auth"; 
import OtpVerify from "./OtpVerify";
import "./signup.css";

function Signup() {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpFromBackend, setOtpFromBackend] = useState("");
  const otpInputRef = useRef(null); 

  const handleGetOtp = async () => {
    if (!mobile) return alert("Please enter your mobile number");

    try {
      const mobileWithCode = mobile.startsWith("+") ? mobile : "+91" + mobile;
      const res = await requestOTP(mobileWithCode);

      const otp = res.data.otp;

      setOtpFromBackend(otp);
      setOtpSent(true);

      setTimeout(() => {
        otpInputRef.current?.focus();
      }, 100);
    } catch (err) {
      console.error(err);
      alert("Failed to send OTP");
    }
  };

  const handleOtpSuccess = () => {
    window.location.href = "https://zerodhadashboard3.onrender.com";
  };

  return (
    <div className="container">
      <h1 className="mt-5 text-center" style={{ color: "#424242" }}>
        Open a free demat and trading account online
      </h1>
      <h3 className="mt-3 text-muted text-center">
        Start investing brokerage free and join a community of 1.6+ crore investors and traders
      </h3>

      <div className="row mt-5">
        <div className="col mt-4 text-center">
          <img src="media/images/kite.png" alt="Kite" />
        </div>

        <div className="col mt-5 ms-5 p-5">
          <h1>Signup now</h1>
          <p>Or track your existing application</p>

          {!otpSent ? (
            <div className="signup-container">
              <div className="mobile-input">
                <span className="ms-1">🇮🇳 +91</span>
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" onClick={handleGetOtp}>
                Get OTP
              </button>
            </div>
          ) : (
            <OtpVerify
              mobile={mobile.startsWith("+") ? mobile : "+91" + mobile}
              otpFromBackend={otpFromBackend}
              onSuccess={handleOtpSuccess}
              otpInputRef={otpInputRef} 
            />
          )}

          <p className="text-muted mt-3">
            By proceeding, you agree to the Zerodha <a href="">terms</a> & <a href="">privacy policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
