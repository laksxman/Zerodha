import React from 'react';

function Brokerage() {
    return ( 
        <div className="container mt-5">
            <div className="row m-5">
                <div className="col-6 p-2 ">
                    <a href=""><h2 style={{textAlign:"center", marginBottom:"30px"}}>Brokerage calculator</h2></a>
                    <li style={{fontSize:"16px", marginBottom:"20px"}}>Charges for Investor's Protection Fund Trust (IPFT) by NSE</li>
                    <li style={{fontSize:"14px", marginBottom:"20px", lineHeight:"1.8"}}>₹100 per order for futures and options.</li>
                    <li style={{fontSize:"14px", marginBottom:"20px"}}>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li style={{fontSize:"14px", marginBottom:"20px"}}>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li style={{fontSize:"14px", marginBottom:"20px"}}>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                </div>
                <div className="col-6 p-2 ">
                    <a href=""><h2 style={{textAlign:"center", marginBottom:"30px"}}>List of Charges</h2></a>
                        <p style={{fontSize:"16px"}}>GST</p>
                        <p style={{fontSize:"14px"}}>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                        <p style={{fontSize:"16px"}}>SEBI Charges</p>
                        <p style={{fontSize:"14px"}}>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                        <p style={{fontSize:"16px"}}>DP (Depository participant) charges</p>
                        <p style={{fontSize:"14px"}}>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                        <p style={{fontSize:"14px"}}>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                        <p style={{fontSize:"14px"}}>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>


                </div>
            </div>
        </div>
     );
}

export default Brokerage;