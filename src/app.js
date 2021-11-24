import React, { useContext, useEffect } from 'react';
import { 
  HashRouter,
  Switch,
  Route,
	Redirect } from 'react-router-dom';

import Header from './components/Header';
import TopNav from './components/TopNav';
import Footer from './components/Footer';

import TitleArea from './components/TitleArea';

import Audits from './views/Audits';

import Dashboard from './views/Dashboard';

import Consignments from './views/Consignments';

import ConsignmentOverview from './views/ConsignmentOverview';
import ConsignmentIssues from './views/ConsignmentIssues';
import ConsignmentDocuments from './views/ConsignmentDocuments';

import SignIn from './views/SignIn';
import { LoggedInStatusContext } from './store/Store';

const App = (props) => {  

	const [loginStatus, setLoginStatus] = useContext(LoggedInStatusContext);
	const localSignInData = JSON.parse(localStorage.getItem("signInData"));

	// if (!loginStatus && localSignInData) {
	// 	setLoginStatus(localSignInData);
	// }
	
	
	return (
			<HashRouter {...props}>
				<Header {...props} />
					{
					loginStatus ? 
						<TopNav {...props} />
						: null
					}
					{
					loginStatus ? 
						<TitleArea {...props} />
						: null
					}
					<Switch>
						<Route exact path="/">
								<Redirect to="/sign-in" />
						</Route>
						<Route path={`/sign-in`} render={(props) => (
							<SignIn {...props} />
						)}/>
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
						<Route path={`/consignment-issues/:id`} render={(props) => (
							<ConsignmentIssues {...props} />
						)}/>
						<Route path={`/consignment-documents/:id`} render={(props) => (
							<ConsignmentDocuments {...props} />
						)}/>
					</Switch>
				<Footer />
			</HashRouter>
	)	
}

export default App;