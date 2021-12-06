import React from 'react';
import aaData from '../data/aa-current-cycle.json';

const AACurrentCycleTable = (props) => {
	return (		
		<table className="w-full mt-6 striped">
			<thead>
				<tr>
					<th className="w-auto py-2">Country</th>
					<th className="w-auto py-2">Species</th>
					<th className="w-auto py-2">Class</th>
					<th className="w-auto py-2">Date</th>
				</tr>
			</thead>
			<tbody>
				{
					aaData.map((aa,i) => {
						return (
							<tr key={`consightment-`+i}>
								<td>{aa.country}</td>
								<td>{aa.species}</td>
								<td>{aa.class}</td>
								<td>{aa.date}</td>
							</tr>
						)
					})
				}								
			</tbody>
		</table>
	)
}


export default AACurrentCycleTable;