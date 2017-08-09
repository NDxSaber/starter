//--React
import React from 'react';
import ReactDOM from 'react-dom';

//--Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'

//--React Router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//--ServiceWorker
import registerServiceWorker from './registerServiceWorker';

//--Global Style
import './assets/css/global.css';

//--Pages
import App from './components/App'
// import App from './components/home/App';
import About from './components/about/About';

let store = createStore(todoApp);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={App} />
				<Route path="/about" component={About} />
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();

			// <Route path="/about" component={About} />
