import React, {useContext } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { LoggedInStatusContext } from '../store/Store';
import IssuesDetails from '../data/issues-details.json';


const ConsignmentIssues = (props) => {
	const [loginStatus] = useContext(LoggedInStatusContext);
	

	localStorage.setItem('lastPage', '/consignment-issues/' + props.match.params.id);

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
							<div className="w-full">
								<h2 className="mt-12 text-5xl font-light divide-solid leading-normal">Consignment issues</h2>	
								<h3 className="mt-8 text-3xl font-light divide-solid">{ props.match.params.id }</h3>
								<span className="mt-2 text-2xl font-light block">Impact level: 2</span>
								<span className="mt-2 text-lg font-light block">Exporter rep informed: Yes</span>

								<h4 className="mt-4 text-3xl">
									Issues
								</h4>
								{
									IssuesDetails.map((issue,i) => {
										return (
											<div key={`issue-${i}`}>
												<h5 className="mt-4 text-2xl">
													{issue.category}: {issue.diagnosis}
												</h5>
												<p className="mt-4">
													<strong>Animals effected:</strong> {issue.number_affected}
												</p>
												<p className="mt-2">
													<strong>RFID: </strong> 
													{
														issue.RFID.map((id,k) => {
															return (
																<span key={`rfid-${i}-${k}`}>{id}{(k+1) < issue.RFID.length ? ', ' : null}</span>
															)
														})
													}
												</p>
												<p className="mt-2">
													Other consignments with this issue.
												</p>
												<p className="mt-2">
													<a href="#">{issue.related_consignments}</a>
												</p>

												<h6 className="mt-4 text-lg underline">
													Observation
												</h6>
												<p>
													{issue.observations}
												</p>

												<h6 className="mt-4 text-lg underline">
													Notes
												</h6>
												<p>
													{issue.notes}
												</p>

												<h6 className="mt-4 text-lg underline">
													Evidence
												</h6>
												<ul>
													{
														issue.evidence.map((media, j) => {
															return (
																<li key={`media-${i}-${j}`}><a href={media.link}>{media.text}</a></li>
															)
														})
													}
												</ul>
												<hr className="mt-10" />
											</div>
										)
									})
								}
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

export default ConsignmentIssues;