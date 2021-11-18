import React from 'react';

import { ComposedChart, BarChart, Bar, Cell, XAxis, YAxis, Scatter, Tooltip, Legend, ResponsiveContainer, LabelList, Rectangle} from 'recharts';

const data = [
  {
    total: 8,
    threshold: 4,
    label: "NOI submission timeframe"
  },
  {
    total: 6,
    threshold: 5,
    label: "Vendor paperwork"
  },
  {
    total: 3,
    threshold: 5,
    label: "Testing & treatment"
  },
  {
    total: 2,
    threshold: 7,
    label: "Reject management"
  },
  {
    total: 5,
    threshold: 4,
    label: "Importing country paperwork"
  },
  {
    total: 5,
    threshold: 6,
    label: "Lameness"
  }
];

const NonComplianceTrendsWidget = (props) => {

	return (	
				

					<div className="col-span-6 border border-background-alt-shade px-7 py-10">
						<div className="w-full">						
							<h3 className="text-3xl font-light">Current cycle non-compliance trends</h3>
						</div>					

						<div className="w-full h-140 overflow-hidden mt-8">
							<ResponsiveContainer className="w-full h-96 overflow-hidden">
								<ComposedChart 
									width={'100%'}
									height={700}
									data={data}
									margin={{
										top: 20,
										right: 20,
										bottom: 100,
										left: 20,
									}}
									padding={{
										top: 0,
										right: 0,
										bottom: 0,
										left: 0
									}}>				
									<XAxis dataKey="label" tick={{fontSize: 10}} angle={-45} textAnchor="end" interval={0} />
									
									<YAxis />
									<Tooltip />
									<Legend  layout="vertical" verticalAlign="top" align="right" margin={{
										top: 0,
										right: 0,
										bottom: 0,
										left: 0}} />
									<Bar dataKey="total" stackId="a" fill="#808080">
										<LabelList dataKey="total" position="top" />
									</Bar>
									<Scatter dataKey="threshold" fill="#FCB515">
										<LabelList dataKey="threshold" position="top" fill="#FCB515" />
									</Scatter>
								
								</ComposedChart>
							</ResponsiveContainer>					
						</div>
					</div>

	)
}


export default NonComplianceTrendsWidget; 