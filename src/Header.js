import React from 'react';
import './Header1.css';


function header() {
    return (
        <div className = "header">

            <span>
                <img className= 'header_logoM' src = './m.jpg'/>
                <h2>markeeton</h2>
                </span>          
            <div className="header_search">
                <input className= 'header_searchIn' type = "text" />
            </div>

            <div className="header_nav">
                <div className ='header_option'>
                    <span className ='option_1'>Hello Friend</span>
                    <span className ='option_2'>Sign In</span>
                </div>
                <div className ='header_option'>
                    <span className ='option_1'>Returns</span>
                    <span className ='option_1'>& Orders</span>
                </div>
                <div className ='header_option'>Cart</div>
                <div className ='header_option'></div>
            </div>
        </div>
    )
}

export default header
