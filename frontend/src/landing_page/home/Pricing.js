import React from 'react';

function Pricing() {
    return ( 
        <div className="container mb-5" style={{color:"#424242"}}>
            <div className="row text-muted">
                <div className="col-5 p-5 mt-4">
                    <h2 className='mb-5'>Unbeatable pricing</h2>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <p className='  m-auto'><a href="" style={{textDecoration:"none"}}>See pricing <i  class="fa-solid fa-arrow-right"></i></a></p>
                </div>
                <div className="col-7 p-5">
                    <div className="row mt-5 text-muted">
                        <div className='col-4 '>
                            <img src="media/images/pricingEquity.svg" style={{width:"50%"}} alt="" />
                            <p className='fs-6 mt-0 text-muted text-center'>Free account <br /> opening</p>
                        </div>
                        <div className='col-4'>
                            <img src="media/images/pricingEquity.svg" style={{width:"50%"}} alt="" />
                            <p className='fs-6 mt-0 text-muted text-center'>Free equity delivery <br /> and direct mutual funds</p>
                        </div>
                        <div className='col-4'>
                            <img src="media/images/intradayTrades.svg" style={{width:"50%"}} alt="" />
                            <p className='fs-6 mt-0 text-muted text-center'>Intraday and <br /> F&O</p>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
     );
}

export default Pricing;