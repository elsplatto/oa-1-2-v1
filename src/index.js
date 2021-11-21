import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route } from 'react-router-dom';


import App from './app.js';

import './styles/index.scss';


import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

const baseURL = process.env.NODE_ENV === "production" ? "/oa-1-2-v1" : '';

ReactDOM.render(

	<Router history={history} basename={baseURL}>
		<App basename={baseURL} />
	</Router>, document.getElementById('app'));