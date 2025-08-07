import React from "react";

function Universe() {
  return (
    <div
      className="container p-5 "
      style={{ color: "#424242", textAlign: "center", marginTop:"100px" }}
    >
      <h2 className="" style={{ marginBottom: "20px" }}>
        The Zerodha Universe
      </h2>
      <p style={{ marginBottom: "15px", marginTop: "16px" }}>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row ">
        <div className="col-4 p-5 mt-5">
          <a href="">
            <img src="media/images/zerodhaFundhouse.png" style={{width:"40%"}} alt="" />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </a>
        </div>
        <div className="col-4 p-5 mt-5">
          <a href="">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ objectFit: "contain", width:"50%" }}
              alt=""
            />
            <p>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </a>
        </div>
        <div className="col-4 p-5 mt-5">
          <a href="">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ objectFit: "contain", width:"50%" }}
              alt=""
            />
            <p>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-4 p-5 mt-4">
          <a href="">
            <img src="media/images/streakLogo.png" style={{width:"50%"}} alt="" />
            <p style={{color:"inherit"}}>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </a>
        </div>
        <div className="col-4 p-5 mt-4">
          <a href="">
            <img src="media/images/smallcaseLogo.png" alt="" />
            <p>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </a>
        </div>

        <div className="col-4 p-5 mt-4">
          <a href="">
            <img src="media/images/dittoLogo.png" style={{width:"30%"}} alt="" />
            <p style={{color:"inherit"}}>
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Universe;
