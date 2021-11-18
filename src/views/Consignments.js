import React, {useState} from 'react';

import ConsignmentTable from '../components/ConsignmentTable';

const Consignments = (props) => {

	const [issuesOnly, setIssuesOnly] = useState(false);

	const handleIssuesCheckboxChange = (e) => {
		// console.log("Checked:", e.target.checked)
		setIssuesOnly(e.target.checked)
	}

	return (
		<div className="bg-background h-auto overflow-hidden content-area mb-20">
			<div className="container mx-auto">
				<h2 className="mt-12 text-5xl font-light">Consignments</h2>	

				<div className="grid grid-cols-12 gap-6 mt-8">
					<div className="col-span-10">
						<label className="flex"><input type="checkbox" value="true" onChange={handleIssuesCheckboxChange} className="w-6 h-6 mr-3" />Show only consignments with issues</label>
					</div>
					<div className="col-span-2">

					</div>
				</div>

				<div className="grid">

				<ConsignmentTable issuesOnly={issuesOnly} />
					
				</div>
			</div>			
		</div>
	)
}


export default Consignments; 