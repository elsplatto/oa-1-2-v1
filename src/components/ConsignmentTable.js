import React, {useEffect, useState} from 'react';
import consignmentData from '../data/consignment-current-cycle.json';
import Flag from '../img/icons/flag.svg';
import LowLevel from '../img/icons/low-level-historic.svg';
import HighLevel from '../img/icons/high-level-historic.svg';

const ConsignmentTable = ({issuesOnly, filterObj}) => {
	const formatNumberToDate = (num) => {
		const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		const convertedDate = new Date(num);
		const formmatedDay = convertedDate.getDate().toString().length == 1 ? '0' + convertedDate.getDate().toString() : convertedDate.getDate().toString();
		const formattedDate = formmatedDay + ' ' + (monthArr[convertedDate.getMonth()]) + ' ' + convertedDate.getFullYear();
		return formattedDate;
	}	

	const rowHasRecordThatMatchesFilterQuery = (rowObj) => {
		let metsCountryQuery = !filterObj.country;
		let metsClassQuery = !filterObj.class;
		let metsSpeciesQuery = !filterObj.species;


		if (filterObj) {
			for (const [key, value] of Object.entries(filterObj)) {
				// console.log(`${key}: ${value}`);
				if (value.length > 0) {
					value.map((val,i) => {
						// console.log('Val:', val);
						if (rowObj[key].includes(val)) {
							// console.log(`Rowobj has a ${key} called ${val} in it `, rowObj);
							if (key == "country") {
								metsCountryQuery = true;
							}
							else if (key === "class") {
								metsClassQuery = true;
							}
							else if (key === "species") {
								metsSpeciesQuery = true;
							}
						}
					})
				}
			}		
		}
		if (metsCountryQuery && metsClassQuery && metsSpeciesQuery) {
			return true;
		} else {
			return false;
		}		
	}


	const ConsignmentTableRow = ({consignmentRow}) => {
		return (
			<tr>
				<td><a href="/">{consignmentRow.lnc}</a></td>
				<td>{consignmentRow.class}</td>
				<td>{consignmentRow.species}</td>
				<td>{consignmentRow.country}</td>
				<td>{formatNumberToDate(consignmentRow.date)}</td>
				<td className="px-4 py-2 text-sm text-left">{consignmentRow.issues}</td>
				<td className="px-4 py-2 text-sm text-left">{consignmentRow.impact}
				{
					(()=> {
						switch (consignmentRow.indicator) {
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
				consignmentData.map((consignmentRow,i) => {
					if (issuesOnly && consignmentRow.issues > 0) {
						if (rowHasRecordThatMatchesFilterQuery(consignmentRow)) {
							return (
								<ConsignmentTableRow consignmentRow={consignmentRow} key={consignmentRow.lnc} />
							)
						}
					}
					else if (!issuesOnly) {
						if (rowHasRecordThatMatchesFilterQuery(consignmentRow)) {
							return (
								<ConsignmentTableRow consignmentRow={consignmentRow} key={consignmentRow.lnc} />
							)
						}
					}
				})
			}								
			</tbody>
		</table>
	)
}






export default ConsignmentTable; 