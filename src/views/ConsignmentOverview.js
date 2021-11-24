import React, {useContext } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { LoggedInStatusContext } from '../store/Store';
import ContactIcon from '../img/icons/contact-card.svg';


const ConsignmentOverview = (props) => {
	const [loginStatus] = useContext(LoggedInStatusContext);

	localStorage.setItem('lastPage', '/consignment-overview/' + props.match.params.id);

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
							<h2 className="mt-12 text-5xl font-light divide-solid">Consignment overview</h2>	
							<h3 className="mt-8 text-3xl font-light divide-solid">{ props.match.params.id }</h3>
							<span className="mt-2 text-2xl font-light block">Impact level: 2</span>
							<span className="mt-2 text-lg font-light block">Exporter rep informed: Yes</span>

							<h4 className="block text-lg mt-8 ">Summary</h4>

							<div className="grid grid-cols-12 gap-y-2 gap-x-4 font-light text-sm border-b border-gray-300 mt-2 pb-2">
								<div className="col-span-3">
									Application ID: 3155
								</div>
								<div className="col-span-3">
									Species: Cattle
								</div>
								<div className="col-span-3">
									Departure: 28 Oct 2021
								</div>
								<div className="col-span-3">
									RE: Booyong Pastoral Facility
								</div>
							</div>
							<div className="grid grid-cols-12 gap-y-2 gap-x-4 font-light text-sm border-b border-gray-300 mt-2 pb-2">
								<div className="col-span-3">
									Destination: Japan
								</div>
								<div className="col-span-3">
									Type: Notice of intent: SEA
								</div>
							</div>



							<h4 className="block text-lg mt-8 ">Issues summary</h4>

							<table className="w-full mt-2">
								<thead>
									<tr>
										<th className="w-auto py-2">Qty</th>
										<th className="w-auto py-2">Category</th>
										<th className="w-auto py-2">Issue</th>
										<th className="w-auto py-2">Species</th>
										<th className="w-auto py-2">Class</th>
										<th className="w-auto py-2">Country</th>
										<th className="w-auto py-2">Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Systemic conditions</td>
										<td className="overflow-ellipsis overflow-hidden">Anorexia (inappetence or 'shy feeders')</td>
										<td>Cattle</td>
										<td>Slaughter</td>
										<td>Japan</td>
										<td>-</td>
									</tr>
									<tr>
										<td>1</td>
										<td>External/skin</td>
										<td className="overflow-ellipsis overflow-hidden">Generalised ringworm</td>
										<td>Cattle</td>
										<td>Slaughter</td>
										<td>Japan</td>
										<td>-</td>
									</tr>
									<tr>
										<td>1</td>
										<td>Musculoskeletal system</td>
										<td className="overflow-ellipsis overflow-hidden">Abnormal gait or lameness of any kind</td>
										<td>Cattle</td>
										<td>Slaughter</td>
										<td>Japan</td>
										<td><a href="#">Closed</a></td>
									</tr>
								</tbody>
							</table>

							<div className="font-light">
								<h4 className="block text-lg mt-8">Full document inspection: Yes</h4>
								<span className="text-xs block mt-2">Author: Jarrod Phillips</span>
								<span className="text-xs block">Date: 28 Oct 2021</span>
								<p className="mt-2">
									Full document inspection carried out due to frequent frequent issues with vendor declarations on previous consignments.
								</p>
							</div>


							<h4 className="block text-lg mt-8 ">Livestock summary</h4>

							<table className="w-full mt-2">
								<thead>
									<tr>
										<th className="w-auto py-2">Qty</th>
										<th className="w-auto py-2">Species</th>
										<th className="w-auto py-2">Class</th>
										<th className="w-auto py-2">Commodity</th>
										<th className="w-auto py-2">Breed</th>
										<th className="w-auto py-2">Premises</th>
										<th className="w-auto py-2">Arrival</th>
										<th className="w-auto py-2">Departure</th>
										<th className="w-auto py-2">Country</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>400</td>
										<td>Cattle</td>
										<td>Slaughter</td>
										<td>Bull</td>
										<td>Angus</td>
										<td>Booyong Pastoral Facility</td>
										<td>18 Oct 2021</td>
										<td>28 Oct 2021</td>
										<td>Japan</td>
									</tr>
									<tr>
										<td>200</td>
										<td>Cattle</td>
										<td>Breeder</td>
										<td>Heifer</td>
										<td>Angus</td>
										<td>Booyong Pastoral Facility</td>
										<td>18 Oct 2021</td>
										<td>28 Oct 2021</td>
										<td>Japan</td>
									</tr>
									<tr>
										<td>140</td>
										<td>Sheep</td>
										<td>Slaughter</td>
										<td>Whether</td>
										<td>Merino</td>
										<td>Booyong Pastoral Facility</td>
										<td>18 Oct 2021</td>
										<td>28 Oct 2021</td>
										<td>Japan</td>
									</tr>
								</tbody>
							</table>


							<h4 className="block text-lg mt-8 ">Personnel</h4>

							<table className="w-full mt-2">
								<thead>
									<tr>
										<th className="w-auto py-2">Role</th>
										<th className="w-auto py-2">Name</th>
										<th className="w-auto py-2">Email</th>
										<th className="w-auto py-2">Mobile</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>AAv</td>
										<td>Wayne Johns</td>
										<td><a href="mailto:w.johns@aav.com">w.johns@aav.com</a></td>
										<td>0421 415 987</td>
									</tr>
									<tr>
										<td>Exporter rep</td>
										<td>John Walker</td>
										<td><a href="mailto:john.walker@abcse.com">john.walker@abcse.com</a></td>
										<td>0401 215 900</td>
									</tr>
									<tr>
										<td>RVO</td>
										<td>Jarrod Phillips</td>
										<td><a href="mailto:jarrod.phillips@agriculture.gov.au">jarrod.phillips@agriculture.gov.au</a></td>
										<td>0418 999 777</td>
									</tr>
								</tbody>
							</table>



							<h4 className="block text-lg mt-8 ">Premises</h4>

							<table className="w-full mt-2">
								<thead>
									<tr>
										<th className="w-auto py-2">RE</th>
										<th className="w-auto py-2">Contact</th>
										<th className="w-auto py-2">Address</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Booyong Pastoral Facility</td>
										<td className="table-cell align-middle"><span className="pt-2 float-left">Ted Mae</span><img src={ContactIcon} className="float-right" /></td>										
										<td>42 Wallaby Way, Grafton, NSW 2478</td>
									</tr>
									<tr>
										<td>Bellyando Cattle Yards</td>
										<td className="table-cell align-middle"><span className="pt-2 float-left">Phil Graham</span><img src={ContactIcon} className="float-right" /></td>										
										<td>1 Washout Road, Fern Gully, NSW 2777</td>
									</tr>
								</tbody>
							</table>

						</div>

						<div className="grid">

							
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