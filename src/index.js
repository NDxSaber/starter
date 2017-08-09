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
import Home from './components/pages/home/Home';
import List from './components/pages/list/List';
import Todo from './components/pages/todo/Todo';
import About from './components/pages/about/About';

let store = createStore(todoApp);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/home" component={Home} />
				<Route path="/list/rumah" component={List} />
				<Route path="/detail" component={List} />
				<Route path="/todo" component={Todo} />
				<Route path="/about" component={About} />
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
