import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer.js';
import PageContent from '../components/PageContent/PageContent.js';


export class Home extends Component {
	render() {
		return(
		<React.Fragment>
			<Navbar/>
			<PageContent>Home</PageContent>
			<Footer/>
		</React.Fragment>
			
		);
	}
}

export default Home;
