import React, { Component } from 'react';
import './style.adminhome.css';

export class Admin extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		authenticated: this.props.user.authenticated,

	// 	}
	// }
	
	render() {
		return(
			<div className="flexbox-layout">
				<div className="navbar">
					<div>
						<h3 className="desktop-only-notice">Currently only supporting desktop</h3>
						<h1 className="title">PSPE Admin Portal</h1>
						<h3 className="username">Logged in as:</h3>
					</div>
					<div className="nav-element">
					</div>
				</div>
				<div  className="content">
					sdf
				</div>
			</div>
				
			);
	}
}

export default Admin;
