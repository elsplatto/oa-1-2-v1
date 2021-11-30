import React, {useEffect, useState} from 'react';
import consignmentData from '../data/consignment-current-cycle.json';
import Flag from '../img/icons/flag.svg';
import LowLevel from '../img/icons/low-level-historic.svg';
import HighLevel from '../img/icons/high-level-historic.svg';
import { Link } from 'react-router-dom';

const ConsignmentTable = ({issuesOnly, filterObj, dateRange, lncSearch}) => {
	const formatNumberToDate = (num) => {
		const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		const convertedDate = new Date(num);
		const formmatedDay = convertedDate.getDate().toString().length == 1 ? '0' + convertedDate.getDate().toString() : convertedDate.getDate().toString();
		const formattedDate = formmatedDay + ' ' + (monthArr[convertedDate.getMonth()]) + ' ' + convertedDate.getFullYear();
		return formattedDate;
	}	

	const rowHasRecordThatMatchesFilterQuery = (rowObj) => {
		let meetsCountryQuery = !filterObj.country;
		let meetsClassQuery = !filterObj.class;
		let meetsSpeciesQuery = !filterObj.species;
		let meetsDateQuery = !dateRange[0];
		let meetsLNCSearchQuery = !lncSearch;

		if (filterObj) {
			for (const [key, value] of Object.entries(filterObj)) {
				// console.log(`Key: ${key} - Value: ${value}`);
				if (value.length > 0) {
					value.map((val,i) => {
						// console.log('Val:', val);
						if (rowObj[key].includes(val)) {
							// console.log(`Rowobj has a ${key} called ${val} in it `, rowObj);
							if (key == "country") {
								meetsCountryQuery = true;
							}
							else if (key === "class") {
								meetsClassQuery = true;
							}
							else if (key === "species") {
								meetsSpeciesQuery = true;
							}						
						}
						
					})
				}				
			}		
		}

		if (dateRange[0] && dateRange[1]) {
			if (rowObj.date > (new Date(dateRange[0]).getTime()) && rowObj.date < (new Date(dateRange[1]).getTime())) {
				meetsDateQuery = true;				
			}
		} 

		if (lncSearch) {
			
			// if  (rowObj.lnc.indexOf(lncSearch) > -1 || rowObj.lnc == lncSearch) {
			// 	console.log(`%cLNC meets query ${rowObj.lnc}`,'color: green; font-size: 20px;');
			// 	console.log(`%cLowercase rowObj LNC ${rowObj.lnc.toString().toLowerCase()}`,'color: blue;');
			// 	console.log(`%cLowercase search string ${lncSearch.toString().toLowerCase()}`,'color: blue;');
			// 	console.log(`%cIn ${lncSearch.toString().toLowerCase()}`,'color: blue;');
			// 	meetsLNCSearchQuery = true;
			// }
			if (rowObj.lnc.toString().toLowerCase().indexOf(lncSearch.toString().toLowerCase()) > -1 || (rowObj.lnc.toString().toLowerCase() == lncSearch.toString().toLowerCase())) {
				meetsLNCSearchQuery = true;
			}
		}

		if (meetsCountryQuery && meetsClassQuery && meetsSpeciesQuery && meetsDateQuery && meetsLNCSearchQuery) {
			return true;
		} else {
			return false;
		}		
	}


	const ConsignmentTableRow = ({consignmentRow}) => {
		return (
			<tr>
				<td><Link to={`/consignment-overview/${consignmentRow.lnc}`}>{consignmentRow.lnc}</Link></td>
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