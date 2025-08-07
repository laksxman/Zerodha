import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 " style={{padding:"100px", marginTop:"70px"}}>
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <p>
            <a href={tryDemo}>{tryDemo}</a>
          </p>
        </div>
        <div className="col-6 ">
          <img src={imageURL} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
