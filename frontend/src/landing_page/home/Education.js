import React from 'react';

function Education() {
    return ( 
        <div className="container mb-5">
            <div className="row ">
                <div className="col-6">
                    <img src="media/images/education.svg" className='mb-5' alt="" />
                </div>
                <div className="col-6">
                    <h2>Free and open market education</h2>
                    <div className="row">
                        <p className='text-muted pe-5 mt-2'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <p className='p-2   m-auto'><a href="" style={{textDecoration:"none"}}>Varsity <i  class="fa-solid fa-arrow-right"></i></a></p>
                    </div>
                    <div className="row">
                        <p className='text-muted pe-5 mt-2'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <p className='p-2   m-auto'><a href="" style={{textDecoration:"none"}}>TradingQ&A <i  class="fa-solid fa-arrow-right"></i></a></p>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Education;