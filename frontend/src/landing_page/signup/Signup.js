import React from "react";

function Signup() {
  return (
    <div className="container">
      <h1 className="mt-5 " style={{ textAlign: "center", color: "#424242" }}>
        Open a free demat and trading account online
      </h1>
      <h3 className="mt-3 text-muted" style={{ textAlign: "center" }}>
        Start investing brokerage free and join a community of 1.6+ crore
        investors and traders
      </h3>
      <div className="row mt-5">
        <div className="col  mt-4 text-center">
          <img src="media/images/kite.png" alt="" />
        </div>
        <div className="col mt-5 ms-5 p-5">
          <h1>Signup now</h1>
          <p>Or track your existing application</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "300px",
              padding: "5px",
            }}
          >
            <span className="ms-1 ">🇮🇳 +91</span>
            <input
              type="number"
              placeholder="Enter your mobile number"
              style={{ border: "none", outline: "none", flex: "1" }}
            />
          </div>
          <button
            onClick={() =>
              (window.location.href = "https://zerodhadashboard3.onrender.com")
            }
            className="p-2 btn btn-primary fs-5 mt-4 mb-5"
            style={{ width: "30%", margin: "0 auto" }}
          >
            Sign Up
          </button>
          <p className="text-muted">
            By proceeding, you agree to the Zerodha <a href="">terms</a> &{" "}
            <a href="">privacy policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
