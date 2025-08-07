import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container  p-5 text-muted" style={{color:"#424242"}}>
      <div className="row  p-5">
        <div className="col-6 ps-0 ">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mmt-4">
          <h1>{productName}</h1>
          <p className="pt-2 pb-2 pl-2">{productDescription}</p>
          <div>
            <a href={tryDemo}>{tryDemo}</a>
            <a href={learnMore} style={{ marginLeft: "60px" }}>
              {learnMore}
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} className=" ms-4">
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
