import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route } from 'react-router-dom';
import Store from './store/Store';


import App from './app.js';

import './styles/index.scss';


import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

// const baseURL = process.env.NODE_ENV === "production" ? "/oa-1-2-v1" : '';

ReactDOM.render(
<Store>
	<Router history={history} basename="/">
		<App basename="/" history={history} />
	</Router>
</Store>, document.getElementById('app'));