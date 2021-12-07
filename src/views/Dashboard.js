import React, {useState, useContext} from 'react';
import Button from '../components/Button';
import ConsignmentTableWidget from '../components/ConsignmentTableWidget';
import ConsignmentComplianceChart from '../components/ConsignmentComplianceChart';
import NonComplianceTrendsWidget from '../components/NonComplianceTrendsWidget';
import { LoggedInStatusContext } from '../store/Store';
import {Link} from 'react-router-dom';

import { Redirect } from 'react-router-dom';

import AACurrentCycleTable from '../components/AACurrentCycleTable';
import AuditTable from '../components/AuditTable';

import AltSpaceChart from '../components/AltSpaceChart';

import MandMChartWidget from '../components/MandMChartWidget';

localStorage.setItem('lastPage', '/dashboard');

const Dashboard = (props) => {


	const [consignmentData, setConsignmentData] = useState('default');
	const [loginStatus] = useContext(LoggedInStatusContext);

	if (loginStatus) {
		
		return (
			<div className="bg-background h-auto overflow-hidden content-area mb-20">
				<div className="container mx-auto">
					<h2 className="mt-12 text-5xl font-light leading-normal">Dashboard</h2>
					<h3 className="mt-8 text-3xl font-light">Performance level: 1</h3>
						
					<div className="grid grid-cols-12 gap-6">
						<div className="col-span-3">
							<span className="text-base mt-8 block">Next audit due: 13 Nov 2021</span>
						</div>
						<div className="col-span-3">
							<span className="text-base mt-8 block">Previous audit: <a href="/">12 Feb 2021</a></span>
						</div>
					</div>

					<div className="grid grid-cols-12 gap-6 mt-8">
						<div className="col-span-3">
							<Button link="/" type="primary" text="Download audit guide" />
						</div>

						<div className="col-span-3">
							<Button link="/" type="secondary" text="View audit history" />
						</div>

						<div className="col-span-3">
							<Button link="/" type="tertiary" text="View outstanding CARs" />
						</div>
					</div>


					<div className="grid grid-cols-12 mt-12 px-7 py-10 border border-background-alt-shade">
						<div className="col-span-12">
							<h3 className="text-3xl font-light">Current cycle consignments</h3>
						</div>
						<div className="col-span-12">
							<ConsignmentTableWidget />
						</div>
						<div className="col-span-12 mt-8">
							<Button link="./consignments" type="primary" text="View all consignments" />
						</div>
					</div>

					<div className="col-span-12 mt-12 border border-background-alt-shade px-7 py-10">
						<div className="w-full">						
							<h3 className="text-3xl font-light">Recently approved SEPs and management plans</h3>
						</div>
						<div className="w-full h-auto overflow-hidden">
							<AACurrentCycleTable />
						</div>
					</div>

					<div className="grid grid-cols-12 gap-6 mt-12">
						<NonComplianceTrendsWidget />
						<ConsignmentComplianceChart />
					</div>

					<div className="grid grid-cols-12 gap-6 mt-12 px-7 py-10 border border-background-alt-shade">
						<div className="col-span-12">
							<h3 className="text-3xl font-light">Audits</h3>
						</div>
						<div className="col-span-12">
							<AuditTable />
						</div>
						<div className="col-span-6 mt-8">
							<Button link="./audits" type="primary" text="View audit history" />
						</div>
						<div className="col-span-6 mt-8 flex items-center">
							<span className="mr-6 flex-grow">Next audit: 23 Dec 2022</span>
							<span>Previous audit: <a href="#">23 Dec 2021</a></span>
						</div>
					</div>

					<div className="grid grid-cols-12 gap-6 mt-12">
						<MandMChartWidget />			
						<AltSpaceChart />		
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

export default Dashboard; 