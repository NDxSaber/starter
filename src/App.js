import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Helmet>
					<title>My Title</title>
					<meta name="description" content="Helmet application" />
				</Helmet>
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>React</h2>
				</div>
				<p className="App-intro">
					Too get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;
