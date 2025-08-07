import React from "react";

function Team() {
  return (
    <div className="container " style={{color:"#424242"}}>
      <h2 className="text-center">People</h2>
      <div className="row align-items-center justify-content-center py-5">
        {/* Left Side: Image */}
        <div className="col-md-4 text-center">
          <img
            src="/media/images/nithinKamath.jpg"  // Ensure this is in public/media/images/
            alt="Founder"
            style={{
              borderRadius: "50%",
              width: "180px",
              height: "180px",
              objectFit: "cover",
              marginBottom: "1rem",
            }}
          />
          <h5 style={{ color: "#666666" }}>Nithin Kamath</h5>
          <p style={{ color: "grey" }}>Founder, CEO</p>
        </div>

        {/* Right Side: Description */}
        <div className="col-md-6" style={{ fontSize: "18px", }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
