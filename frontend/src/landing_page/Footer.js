import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(245,245,245"}}>
        <div className="container border-top mt-5">
            <div className="row mt-5">
                <div className="col">
                    <img
                        className="mb-4"
                        src="media/images/logo.svg"
                        style={{ width: "50%" }}
                        alt="logo"
                    />
                    <p className="text-muted ">
                        © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
                    </p>
                    <div className="row">
                        <div className="col text-muted">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                        </div>
                        <div className="col text-muted">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                                <i className="fa-brands fa-square-facebook"></i>
                            </a>
                        </div>
                        <div className="col text-muted">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                        <div className="col text-muted">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                        <div className="col text-muted">
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                        <div className="col text-muted">
                            <a href="https://t.me" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                                <i className="fa-brands fa-telegram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <p>Account</p>
                    <div className="text-muted lh-lg ">
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Open demat account</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Minor demat account</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>NRI demat account</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Commodity</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Dematerialisation</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Fund transfer</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>MTF</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Referral program</a><br />
                    </div>
                </div>

                <div className="col">
                    <p>Support</p>
                    <div className="text-muted lh-lg ">
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Contact us</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Support portal</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>How to file a complaint?</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Status of your complaints</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Bulletin</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Circular</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Z-Connect blog</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Downloads</a><br />
                    </div>
                </div>

                <div className="col">
                    <p>Company</p>
                    <div className="text-muted lh-lg ">
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>About</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Philosophy</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Press & media</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Careers</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Zerodha Cares (CSR)</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Zerodha.tech</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Open source</a><br />
                    </div>
                </div>

                <div className="col">
                    <p>Quick links</p>
                    <div className="text-muted lh-lg ">
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Upcoming IPOs</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Brokerage charges</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Market holidays</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Economic calendar</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Calculators</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Markets</a><br />
                        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>Sectors</a><br />
                    </div>
                </div>

            </div>
            <div className="mt-5 text-small text-muted" style={{fontSize:"12px"}}>
                <p>
                Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
                no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
                Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
                through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
                Registration no.: INZ000038238 Registered Address: Zerodha Broking
                Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
                School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
                any complaints pertaining to securities broking please write to 
                <a href="" style={{textDecoration:"none"}}> complaints@zerodha.com</a>, for DP related to <a href="" style={{textDecoration:"none"}}> dp@zerodha.com</a>. Please
                ensure you carefully read the Risk Disclosure Document as prescribed
                by SEBI | ICF
                </p>
                <p>
                Procedure to file a complaint on <a href="" style={{textDecoration:"none"}}>SEBI SCORES:</a> Register on SCORES
                portal. Mandatory details for filing complaints on SCORES: Name, PAN,
                Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
                Speedy redressal of the grievances
                </p>
                <p>
                Investments in securities market are subject to market risks; read all
                the related documents carefully before investing.
                </p>
                <p>
                Attention investors: 1) Stock brokers can accept securities as margins
                from clients only by way of pledge in the depository system w.e.f
                September 01, 2020. 2) Update your e-mail and phone number with your
                stock broker / depository participant and receive OTP directly from
                depository on your e-mail and/or mobile number to create pledge. 3)
                Check your securities / MF / bonds in the consolidated account
                statement issued by NSDL/CDSL every month.
                </p>
                <p>
                India's largest broker based on networth as per NSE. <a href="" style={{textDecoration:"none"}}>NSE broker
                factsheet</a>
                </p>
                <p>
                "Prevent unauthorised transactions in your account. Update your mobile
                numbers/email IDs with your stock brokers. Receive information of your
                transactions directly from Exchange on your mobile/email at the end of
                the day. Issued in the interest of investors. KYC is one time exercise
                while dealing in securities markets - once KYC is done through a SEBI
                registered intermediary (broker, DP, Mutual Fund etc.), you need not
                undergo the same process again when you approach another
                intermediary." Dear Investor, if you are subscribing to an IPO, there
                is no need to issue a cheque. Please write the Bank account number and
                sign the IPO application form to authorize your bank to make payment
                in case of allotment. In case of non allotment the funds will remain
                in your bank account. As a business we don't give stock tips, and have
                not authorized anyone to trade on behalf of others. If you find anyone
                claiming to be part of Zerodha and offering such services, please
                <a href="" style={{textDecoration:"none"}}>create a ticket here</a>.
                </p>
            </div>
            <div className="text-center mb-3 text-muted" style={{ fontSize: "14px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "36px" }}>
                <a href="https://www.nseindia.com/" style={{ textDecoration: "none", color: "inherit" }}>NSE</a>
                <a href="https://www.bseindia.com/" style={{ textDecoration: "none", color: "inherit" }}>BSE</a>
                <a href="https://www.mcxindia.com/" style={{ textDecoration: "none", color: "inherit" }}>MCX</a>
                <a href="https://zerodha.com/terms-and-conditions/" style={{ textDecoration: "none", color: "inherit" }}>Terms &amp; conditions</a>
                <a href="https://zerodha.com/policies-and-procedures/" style={{ textDecoration: "none", color: "inherit" }}>Policies &amp; procedures</a>
                <a href="https://zerodha.com/privacy-policy/" style={{ textDecoration: "none", color: "inherit" }}>Privacy policy</a>
                <a href="https://zerodha.com/disclosure/" style={{ textDecoration: "none", color: "inherit" }}>Disclosure</a>
                <a href="https://zerodha.com/investor-attention/" style={{ textDecoration: "none", color: "inherit" }}>For investor's attention</a>
                <a href="https://zerodha.com/tos/investor-charter/" style={{ textDecoration: "none", color: "inherit" }}>Investor charter</a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
