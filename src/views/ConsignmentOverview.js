import React, {useContext } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { LoggedInStatusContext } from '../store/Store';


const ConsignmentOverview = (props) => {
	const [loginStatus] = useContext(LoggedInStatusContext);

	if (loginStatus) {
		return (
			<div className="bg-background h-auto overflow-hidden content-area mb-20">
				<div className="container mx-auto">
					<div className="grid grid-cols-12 gap-x-12 gap-y-6">
						<div className="col-span-2">
							<nav className="mt-10">
								<h5 className="font-semibold p-4">Consignments</h5>
								<ul className="border-t-2 border-foreground-border">
									<li className="p-4 pl-6 border-b-2 border-background-alt-shade"><NavLink to={`/consignment-overview/${props.match.params.id}`} activeClassName="font-bold" className="no-underline text-muted">Overview</NavLink></li>
									<li className="p-4 pl-6 border-b border-background-alt-shade"><NavLink to={`/consignment-issues/${props.match.params.id}`} activeClassName="font-bold" className="no-underline text-muted">Issues</NavLink></li>
									<li className="p-4 pl-6 border-b border-background-alt-shade"><NavLink to={`/consignment-documents/${props.match.params.id}`} activeClassName="font-bold" className="no-underline text-muted">Documents &amp; declarations</NavLink></li>
								</ul>
							</nav>
						</div>
						<div className="col-span-10">
							<h2 className="mt-12 text-5xl font-light">Consignment overview</h2>	
							<h3 className="mt-8 text-3xl font-light">{ props.match.params.id }</h3>

							<div className="grid grid-cols-12 gap-6 mt-8">
								
							</div>

							<div className="grid">

								
							</div>
						</div>
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

export default ConsignmentOverview; 