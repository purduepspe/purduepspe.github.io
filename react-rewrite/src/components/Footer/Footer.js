import React from 'react'
import './style.footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { CommunicationEmail } from 'material-ui/svg-icons';


export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-callout">
                <h1>Get in Touch</h1>
                <h2>Stay connected for updates on all things PSPE!</h2>
            </div>
            <div className="icons">
                <FontAwesomeIcon onClick={() => window.location = 'https://www.facebook.com'} className="icon" icon={faFacebookSquare} size="3x" style={{color: 'white'}}/>
                <FontAwesomeIcon className="icon" icon={faLinkedinIn} size="3x" style={{color: 'white'}}/>
                <FontAwesomeIcon className="icon" icon={faTwitterSquare} size="3x" style={{color: 'white'}}/>
                {/* <__MaterialUI.icon CommunicationEmail/> */}
            </div>
            
        </div>
    )
}
