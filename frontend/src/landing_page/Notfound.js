import React from 'react';
import { Link } from 'react-router-dom';
function Notfound() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h2  className='mt-5 fs-2' >404 Page not found</h2>
                <p className='text-muted'>Sorry, the page you are looking for does not exists.</p>
                <Link to="http://localhost:3000/">
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}} >HomePage</button>
                </Link>
            </div>
        </div>
     );
}

export default Notfound;