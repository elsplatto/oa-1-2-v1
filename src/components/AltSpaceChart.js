import React, { useEffect, useState } from 'react';
import altSpaceData from '../data/alt-space.json';

import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';

const AltSpaceChart = (props) => {

	const [classObj, setClassObj] = useState('breeder');
	const [transportObj, setTransportObj] = useState('air');
	const [graphData, setGraphData] = useState(altSpaceData[0]['breeder']['air']);
	const [thresholdData, setThresholdData] = useState(altSpaceData[0]['breeder']['airThreshold'])

	const handleClassChange = (e) => {
		setClassObj(e.target.value);
		constructKey();		
	}

	const handleTransportChange = (e) => {
		setTransportObj(e.target.value);
		constructKey();
	}

	const constructKey = () => {
		setGraphData(altSpaceData[0][classObj][transportObj]);
		const threshholdType = transportObj === 'air' ? 'airThreshold' : 'seaThreshold';
		setThresholdData(altSpaceData[0][classObj][threshholdType]);
	}

	return (		
		<div className="col-span-6 border border-background-alt-shade px-7 py-10">

			<div className="w-full">						
				<h3 className="text-3xl font-light">Alternate pen space eligibility</h3>
			</div>

			<div className="grid grid-cols-12 gap-4 py-4 h-auto overflow-hidden">
				<div className="col-span-4">
					<label className="text-xs text-text">Class:</label>
					<select onChange={handleClassChange} defaultValue={classObj} className="text-sm w-full border-2 border-foreground-border rounded-md text-sm text-text p-1">
						<option value="breeder">Breeder cattle</option>
						<option value="slaughter">Slaughter cattle</option>
						<option value="feeder">Feeder cattle</option>
					</select>
				</div>
				
				<div className="col-span-4">
					<label className="text-xs text-text">Transport:</label>
					<select onChange={handleTransportChange} defaultValue={transportObj} className="text-sm w-full border-2 border-foreground-border rounded-md text-sm text-text p-1">
						<option value="air">Air</option>
						<option value="sea">Sea</option>
					</select>
				</div>
			</div>

			<div className="w-full h-96 mt-8">
				<ResponsiveContainer className="w-full h-full">
					<BarChart
						width={'100%'}
						height={'100%'}
						data={graphData}
						margin={{
							top: 0,
							right: 0,
							left: 0,
							bottom: 0
						}} padding={{
							top: 0,
							right: 0,
							left: 0,
							bottom: 20
						}}>				
						<XAxis dataKey="country" />
						<YAxis domain={[0, (thresholdData + (Math.ceil(thresholdData / 4)))]} />

						<ReferenceLine y={thresholdData} label={{ position: 'top', value: 'Threshold'}} stroke={'#808080'} />
						
						<Bar dataKey={'score'} barSize={80}>
							{graphData.map((entry, index) => (								
								<Cell key={`cell-${index}`} fill={'#E0E0E0'} />
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}


export default AltSpaceChart;