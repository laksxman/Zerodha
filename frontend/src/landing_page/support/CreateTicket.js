import React from 'react';

function createTicket() {
    return ( 
        <div className="container">
            <div className="row  ms-5  p-5">
                <h2>To create a ticket, select a relevant topic</h2>
            </div>
            <div className="row  m-5 p-5">
                <div className="col-4 mb-5">
                    <h5>Account Opening</h5>
                        <a href="" style={{lineHeight:"2.5"}} >Resident individual</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Minor</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Non Resident Indian (NRI)</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Company, Partnership, HUF and LLP</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Glossary</a><br/>
                </div>
                <div className="col-4  mb-5">
                    <h5>Your Zerodha Account</h5>
            
                        <a href="" style={{lineHeight:"2.5"}} >Your Profile</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Account modificaton</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Client Master Report(CMR)</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Nomination</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Transfer and conversion of securities</a><br/>
                
                </div>
                <div className="col-4  mb-5">
                    <h5>Kite</h5>
                
                        <a href="" style={{lineHeight:"2.5"}} >IPO</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Trading FAQs</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Margin Trading Faculty(MTF)</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Charts and Orders</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >General</a><br/>
                    
                </div>
                <div className="col-4">
                    <h5>Funds</h5>
                
                        <a href="" style={{lineHeight:"2.5"}} >Add Money</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Withdraw money</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Add Bank Account</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Emandates</a><br/>
                    
                </div>
                <div className="col-4 ">
                    <h5>Console</h5>
                
                        <a href="" style={{lineHeight:"2.5"}} >Portfolio</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Corporate Actions</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Funds Statements</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Reports</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Profile</a><br/>
                    
                </div>
                <div className="col-4 ">
                    <h5> Coin</h5>
                
                        <a href="" style={{lineHeight:"2.5"}} >Mutual fund</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Fixed Deposite(FD)</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Features on Coin</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >Payments and Orders</a><br/>
                        <a href="" style={{lineHeight:"2.5"}} >General</a><br/>
                    
                </div>
            </div>
        </div>
     );
}

export default createTicket;