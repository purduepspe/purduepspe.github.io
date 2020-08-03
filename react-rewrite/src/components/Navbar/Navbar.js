import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';


import PSPE_Logo from '../../images/PSPE_logo.png';
import './style.navbar.css';



export class Navbar extends Component {

	render() {
        return(
            <div className="navbar">
                <div className="logoContainer">
                    <Link to="/"><img className="logoImage" src={PSPE_Logo}/></Link>
                </div>
                <div className="navlinkCollection">
                    
                    <Link className="navlink" to="/about">About</Link>
                    <Link className="navlink" to="/news">News</Link>
                    <Link className="navlink" to="/upcoming-events">Upcoming Events</Link>
                    <Link className="navlink" to="/annual-events">Annual Events</Link>
                    <Link className="navlink" to="/contact">Contact</Link>
                    <Link className="navlink" to="/sponsors">Sponsors</Link>
                </div>

                
            </div>
        );
    }
}

export default Navbar;
