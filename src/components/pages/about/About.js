import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import './About.css';

class About extends Component {
	render() {
		return (
			<div className="App">
				<Helmet>
					<title>About Page</title>
					<meta name="description" content="Helmet application" />
				</Helmet>
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>React</h2>
				</div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
				<p className="App-intro">
					About Page
				</p>
			</div>
		);
	}
}

export default About;
