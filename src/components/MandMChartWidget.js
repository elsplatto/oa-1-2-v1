import React from 'react';

import { PieChart, Pie, Sector, Legend, Cell, ResponsiveContainer } from 'recharts';

const data = [  
  { name: 'No incident', value: 98.1 },
  { name: 'Mortality', value: 0.5 },
  { name: 'Morbidity', value: 1.5 },
];
const fillColors = ['#c4c4c4', '#A30C33', '#FCB515',];
const strokeColors = ['#c4c4c4', '#A30C33', '#FCB515',];

const MandMChartWidget = (props) => {

	return (	
				

					<div className="col-span-6 border border-background-alt-shade px-7 py-10">
						<div className="w-full">						
							<h3 className="text-3xl font-light">Current cycle mortality &amp; morbidity</h3>
						</div>					

						<div className="w-full h-80 overflow-hidden mt-8">
							<ResponsiveContainer>
								<PieChart>
									<Pie
										data={data}
										innerRadius={80}
										outerRadius={140}
										fill="#8884d8"
										paddingAngle={0.5}
										dataKey="value" nameKey="name"
										startAngle={-270}
									>
										{data.map((entry, index) => (
											<Cell key={`cell-${index}`} fill={fillColors[index % fillColors.length]} stroke={strokeColors[index % strokeColors.length]} />
										))}
									</Pie>
									<Legend verticalAlign="top" height={36}/>
								</PieChart>		
							</ResponsiveContainer>
						</div>
					</div>

	)
}


export default MandMChartWidget; 