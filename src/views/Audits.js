import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { LoggedInStatusContext } from '../store/Store';


const Audits = (props) => {
	const [loginStatus] = useContext(LoggedInStatusContext);

	localStorage.setItem('lastPage', '/audits');

	if (loginStatus) {
		return (
			<div className="bg-background h-auto overflow-hidden content-area mb-20">
				<div className="container mx-auto">
					<h2 className="mt-12 text-5xl font-light">Audits</h2>	

					<div className="grid grid-cols-12 gap-6 mt-8">
						
					</div>

					<div className="grid">

						
					</div>
				</div>			
			</div>
		)
	} else {
		return (
			<Redirect to="/sign-in" />
		)
	}
}


export default Audits; 