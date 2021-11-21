import React, { useState, useContext, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import TitleArea from './components/TitleArea';

import Audits from './views/Audits';

import Dashboard from './views/Dashboard';

import Consignments from './views/Consignments';




const App = (props) => {  
	console.log('App props', props)
	return (
		<>
		<Router>
			<Header {...props} />
			<TitleArea {...props} />
				<Switch>
					<Route path={`${props.basename}/dashboard`} render={(props) => (
						<Dashboard {...props} />
					)}/>
					<Route path={`${props.basename}/consignments`} render={(props) => (
						<Consignments {...props} />
					)}/>
					<Route path={`${props.basename}/audits`} render={(props) => (
						<Audits {...props} />
					)}/>
				</Switch>
			<Footer />
		</Router>
		</>
	)	
}

export default App;