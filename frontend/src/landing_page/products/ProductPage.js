import React from "react";
import Hero from "../products/Hero";
import LeftSection from "../products/LeftSection";
import RightSection from "../products/RightSection";
import Universe from "../products/Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo→"
        learnMore="Learn more→"
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo="Learn more→"
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin→"
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo="Kite Connect→"
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Versity mobile"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="mt-5 text-center fs-4">Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/">Zerodha.tech</a> blog.</p>
      <Universe />
      <div className="text-center">
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto", textAlign:"center"}} >Sign up for free</button>
      </div>
    </>
  );
}

export default ProductPage;
