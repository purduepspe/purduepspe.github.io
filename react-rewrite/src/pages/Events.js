import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Event from '../components/Event/Event';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class Events extends Component {
	render() {
		return(
			<React.Fragment>
				<Navbar/>
				<div>Events</div>
				<Container fluid>
					<Row>
						<Col style={{backgroundColor: "black", color: "white"}} lg={6} xs={12}>Col 1</Col>
						<Col style={{backgroundColor: "lightblue"}} lg={6} xs={12}>Col 2</Col>
					</Row>
				</Container>
				<Event/>
			</React.Fragment>
				
			);
	}
}

export default Events;
