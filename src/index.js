import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './assets/css/global.css';
import App from './components/home/App';
import About from './components/about/About';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/about" component={About} />
		</div>
	</Router>, 
	document.getElementById('root')
);
registerServiceWorker();
