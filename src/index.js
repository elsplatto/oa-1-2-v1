import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route } from 'react-router-dom';


import App from './app.js';

import './styles/index.scss';


import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

// console.log('history:', history)


ReactDOM.render(

	<Router history={history} basename={'/'}>
		<App />
	</Router>, document.getElementById('app'));
	module.hot.accept();