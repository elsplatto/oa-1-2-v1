import React, {useContext } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { LoggedInStatusContext } from '../store/Store';
import Chevron from '../img/icons/chevron-action.svg';

import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
	AccordionItemState
} from 'react-accessible-accordion';


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
							<div calssName="w-full">
								<h2 className="mt-12 text-5xl font-light divide-solid leading-normal">Consignment issues</h2>	
								<h3 className="mt-8 text-3xl font-light divide-solid">{ props.match.params.id }</h3>
								<span className="mt-2 text-2xl font-light block">Impact level: 2</span>
								<span className="mt-2 text-lg font-light block">Exporter rep informed: Yes</span>

								<h4 className="mt-4 text-3xl">
									Issues
								</h4>

								<h5 className="mt-4 text-xl">
									Issue: ASEL Lamess
								</h5>

								<p className="mt-4 text-base">
									Observation: Injury to LF pastern.
								</p>

								<p className="mt-4 text-base">
									Notes: During drafting at the registered premises several of the lower railings became loose. This resulted in extensive injuries to the 
									cattles’ LF pastern from the metal posts.
								</p>

								<Accordion allowZeroExpanded className="mt-4 w-full">
									<AccordionItem id="evidence-item-raa-0">
											<AccordionItemHeading className="bg-background-shade">
													<AccordionItemButton className="flex flex-row p-4">
														<span className="font-semibold flex-grow text-action underline">Evidence</span>
														<AccordionItemState>														
															{({ expanded }) => (expanded ? <img src={Chevron} id="chevron-raa-0" /> : <img src={Chevron} className={`transform rotate-180`} id="chevron-raa-0" />)}
														</AccordionItemState>

													</AccordionItemButton>
											</AccordionItemHeading>
											<AccordionItemPanel>
													<p>
															Exercitation in fugiat est ut ad ea cupidatat ut in
															cupidatat occaecat ut occaecat consequat est minim minim
															esse tempor laborum consequat esse adipisicing eu
															reprehenderit enim.
													</p>
											</AccordionItemPanel>
									</AccordionItem>
								</Accordion>

								<hr className="mt-10" />
							</div>


							<div className="w-full">

								<h5 className="mt-10 text-xl">
									Issue: ASEL Lamess
								</h5>

								<p className="mt-4 text-base">
									Observation: Injury to LF pastern.
								</p>

								<p className="mt-4 text-base">
									Notes: During drafting at the registered premises several of the lower railings became loose. This resulted in extensive injuries to the 
									cattles’ LF pastern from the metal posts.
								</p>

								<Accordion allowZeroExpanded className="mt-4 w-full">
									<AccordionItem id="evidence-item-raa-1">
											<AccordionItemHeading className="bg-background-shade">
													<AccordionItemButton className="flex flex-row p-4">
														<span className="font-semibold flex-grow text-action underline">Evidence</span>
														<AccordionItemState>														
															{({ expanded }) => (expanded ? <img src={Chevron} id="chevron-raa-1" /> : <img src={Chevron} className={`transform rotate-180`} id="chevron-raa-1" />)}
														</AccordionItemState>

													</AccordionItemButton>
											</AccordionItemHeading>
											<AccordionItemPanel>
													<p>
															Exercitation in fugiat est ut ad ea cupidatat ut in
															cupidatat occaecat ut occaecat consequat est minim minim
															esse tempor laborum consequat esse adipisicing eu
															reprehenderit enim.
													</p>
											</AccordionItemPanel>
									</AccordionItem>
								</Accordion>

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