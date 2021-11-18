import React, {useEffect, useState} from 'react';
import consignmentData from '../data/consignment-current-cycle.json';
import Flag from '../img/icons/flag.svg';
import LowLevel from '../img/icons/low-level-historic.svg';
import HighLevel from '../img/icons/high-level-historic.svg';

const ConsignmentTable = (props) => {
	const formatNumberToDate = (num) => {
		const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		const convertedDate = new Date(num);
		const formmatedDay = convertedDate.getDate().toString().length == 1 ? '0' + convertedDate.getDate().toString() : convertedDate.getDate().toString();
		const formattedDate = formmatedDay + ' ' + (monthArr[convertedDate.getMonth()]) + ' ' + convertedDate.getFullYear();
		return formattedDate;
	}	

	return (		
		<table className="w-full mt-6 striped">
			<thead>
				<tr>
					<th className="w-auto py-2">Consignment</th>
					<th className="w-auto py-2">Class</th>
					<th className="w-auto py-2">Species</th>
					<th className="w-auto py-2">Country</th>
					<th className="w-auto py-2">Date</th>
					<th className="w-auto py-2">Issues</th>
					<th className="w-auto py-2">Impact level</th>
				</tr>
			</thead>
			<tbody>
				{
					props.issuesOnly ?
						consignmentData.map((consignment,i) => {
							return (
								props.issuesOnly && consignment.issues > 0 ?
								<tr key={`consightment-`+i}>
									<td><a href="/">{consignment.lnc}</a></td>
									<td>{consignment.class}</td>
									<td>{consignment.species}</td>
									<td>{consignment.country}</td>
									<td>{formatNumberToDate(consignment.date)}</td>
									<td className="px-4 py-2 text-sm text-left">{consignment.issues}</td>
									<td className="px-4 py-2 text-sm text-left">{consignment.impact}
									{
										(()=> {
											switch (consignment.indicator) {
												case "flag": return <img src={Flag} alt="Flagged by colleague indicator" className="pl-2 inline-block" />;
												case "low": return <img src={LowLevel} alt="Historic low level issues indicator" className="pl-2 inline-block" />;
												case "high": return <img src={HighLevel} alt="Historic high level issues indicator" className="pl-2 inline-block" />;
												default: null;
											}
										})()
									}
									</td>									
								</tr>
								: null
							)
						})
					:
					consignmentData.map((consignment,i) => {
						return (
							<tr key={`consightment-`+i}>
								<td><a href="/">{consignment.lnc}</a></td>
								<td>{consignment.class}</td>
								<td>{consignment.species}</td>
								<td>{consignment.country}</td>
								<td>{formatNumberToDate(consignment.date)}</td>
								<td className="px-4 py-2 text-sm text-left">{consignment.issues}</td>
								<td className="px-4 py-2 text-sm text-left">{consignment.impact}
								{
									(()=> {
										switch (consignment.indicator) {
											case "flag": return <img src={Flag} alt="Flagged by colleague indicator" className="pl-2 inline-block" />;
											case "low": return <img src={LowLevel} alt="Historic low level issues indicator" className="pl-2 inline-block" />;
											case "high": return <img src={HighLevel} alt="Historic high level issues indicator" className="pl-2 inline-block" />;
											default: null;
										}
									})()
								}
								</td>
								
							</tr>
						)
					})
				}								
			</tbody>
		</table>
	)
}


export default ConsignmentTable; 