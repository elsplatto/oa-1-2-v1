import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import ChevronGraySm from '../img/icons/chevron-right-gray-sm.svg';
import ContactIcon from '../img/icons/contact-card.svg';

const TitleArea = (props) => {

	const childPage = (match, location) => {
		// console.log('match', match)
		if (match) {
			if (match.isExact) {
				return true
			}
		}
		else if (location.pathname.indexOf('consignment-overview') > -1 || location.pathname.indexOf('consignment-issues') > -1 || location.pathname.indexOf('consignment-documents') > -1) {
			return true;
		}
		else {
			return false;
		}
	}
	
	return (
		<section className="pt-6 bg-background-shade h-auto">
			<div className="container mx-auto overflow-hidden">
					<ul className="breadcrumbs block relative">
						<li className="float-left text-base"><a href="/">Home</a><img src={ChevronGraySm} className="pl-2 inline-block" alt="" /></li>
						<li className="float-left text-base pl-2"><a href="/">Exporters</a><img src={ChevronGraySm} className="pl-2 inline-block" alt="" /></li>
						<li className="float-left text-base pl-2 mr-2">ABC Southern Exports</li>
					</ul>
			</div>
			<div className="container mx-auto overflow-hidden">
				<div className="grid grid-cols-12">
					<div className="col-span-12">
						<h1 className="font-semibold text-5xl pt-8 text-text inline-block">ABC Southern Exports</h1>
					</div>
				</div>

				<div className="grid grid-cols-12 pt-8">
					<div className="col-span-12">
						<ul className="block relative secondary-nav">
							<li className="float-left text-base">
								<NavLink to="/dashboard" activeClassName="border-action text-text" className="no-underline inline-block border-transparent border-b-8 p-4">Dashboard</NavLink>
							</li>
							<li className="float-left text-base">
								<NavLink to="/consignments" isActive={childPage} activeClassName="border-action text-text" className="no-underline inline-block border-transparent border-b-8 p-4">Consignments</NavLink>
							</li>
							<li className="float-left text-base">
								<NavLink to="/audits" activeClassName="border-action text-text" className="no-underline inline-block border-transparent border-b-8 p-4">Audits</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
export default TitleArea; 