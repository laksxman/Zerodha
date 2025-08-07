import React from 'react';

function Awards() {
    return ( 
        <div className="container  mb-5" style={{color:"#424242"}}>
            <div className='row '>
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="Zerodha award badge" />
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                        <div className="row">
                            <div className="col-6 ">
                                <ul>
                                    <li className='mt-3'>Futures and Options</li>
                                    <li className='mt-3'>Commodity derivatives</li>
                                    <li className='mt-3'>Currency derivatives</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li className='mt-3'>Stocks & IPOs</li>
                                    <li className='mt-3'>Direct mutual funds</li>
                                    <li className='mt-3'>Bonds and Govt. Securities</li>
                                </ul>
                            </div>
                        </div>
                        <img src="media/images/pressLogos.png" style={{width:"90%"}} alt="Press and media logos" className='mt-4' />
                </div>
            </div>
        </div>
     );
}

export default Awards;
