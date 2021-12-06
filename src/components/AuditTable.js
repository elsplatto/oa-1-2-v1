import React from 'react';
import auditData from '../data/audit-table.json';

import { Link } from 'react-router-dom';

const AuditTable = (props) => {
	return (		
		<table className="w-full striped">
			<thead>
				<tr>
					<th className="w-auto py-2">Audit</th>
					<th className="w-auto py-2">Date</th>
					<th className="w-auto py-2">Auditor</th>
					<th className="w-auto py-2">Outcome</th>
					<th className="w-auto py-2">Performance cycle</th>
					<th className="w-auto py-2">CARs</th>
				</tr>
			</thead>
			<tbody>
				{
					auditData.map((audit,i) => {
						return (
							<tr key={`audit-`+i}>
								<td><Link to={`audit-detail/${audit.id}`}>{audit.title}</Link></td>
								<td>{audit.date}</td>
								<td>{audit.auditor}</td>
								<td>{audit.outcome}</td>
								<td>{audit.cycle}</td>
								<td>{audit.cars}</td>
							</tr>
						)
					})
				}								
			</tbody>
		</table>
	)
}


export default AuditTable;