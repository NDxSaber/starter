import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import logo from './logo.svg';
import './App.css';

class About extends Component {
	render() {
		return (
			<div className="App">
				<Helmet>
					<title>About</title>
					<meta name="description" content="Helmet application" />
				</Helmet>
				<p className="App-intro">
					About
				</p>
			</div>
		);
	}
}

export default About;
