import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import MobileMenu from './MobileMenu.js';
import PSPE_Logo from '../../images/PSPE_logo.png';
import './style.navbar.css';




export class Navbar extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.setSTate
    // }
  
    
    

	render() {
        return(
            <React.Fragment>
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
                    
                    <svg width="30px" height="30px" viewBox="0 0 16 16" className="menuToggle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    
                    
                </div>
                {/* <MobileMenu visible={this.state.menuExpanded}/> */}
            </React.Fragment>
        );
    }
}

export default Navbar;
