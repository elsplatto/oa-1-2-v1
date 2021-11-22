import React, { useState, useContext, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import TitleArea from './components/TitleArea';

import Audits from './views/Audits';

import Dashboard from './views/Dashboard';

import Consignments from './views/Consignments';

import ConsignmentOverview from './views/ConsignmentOverview';

const App = (props) => {  
	
	return (
		<>
		<Router>
			<HashRouter {...props}>
				<Header {...props} />
				<TitleArea {...props} />
					<Switch>
						<Route path={`/dashboard`} render={(props) => (
							<Dashboard {...props} />
						)}/>
						<Route path={`/consignments`} render={(props) => (
							<Consignments {...props} />
						)}/>
						<Route path={`/audits`} render={(props) => (
							<Audits {...props} />
						)}/>
						<Route path={`/consignment-overview/:id`} render={(props) => (
							<ConsignmentOverview {...props} />
						)}/>
					</Switch>
				<Footer />
			</HashRouter>
		</Router>
		</>
	)	
}

export default App;