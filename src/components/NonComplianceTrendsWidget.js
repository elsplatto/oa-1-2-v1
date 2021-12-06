import React from 'react';

import { ComposedChart, BarChart, Bar, Text, XAxis, YAxis, Scatter, Tooltip, Legend, ResponsiveContainer, LabelList, ReferenceLine, Rectangle} from 'recharts';

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
    threshold: 6,
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



const DashedLine = (props) => {
	// console.log('dashed line props:', props)
	return (
		<svg width="46" height="4" style={{"overflow": "visible"}}>
			<line y1={props.cy} x1={props.cx + 35} y2={props.cy} x2={props.cx - 35} stroke="#808080" strokeDasharray="2 2"/>
		</svg>
	)
}

const LegendTextManager = (value, entry) => {
  const { color } = entry;
  return <span style={{'color': '#333', 'textTransform': 'capitalize'}}>{value}</span>;
};

const CustomLabel = () => {
	return (
			<Text
					color="#808080" 
					margin={{
						top: 0,
						right: 20,
						bottom: 20,
						left: 0,
					}}
					x={0}
					y={0}
					dx={-300}
					dy={40}
					textAnchor="start"
					verticalAnchor="end"
					width={180}
					transform="rotate(-90)"> 
					Total issues          
			</Text>
	);
};


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
							left: 0,
						}}
						padding={{
							top: 0,
							right: 0,
							bottom: 0,
							left: 0
						}}>				
						<XAxis dataKey="label" tick={{fontSize: 10}} angle={-45} textAnchor="end" interval={0} />
						
						<YAxis label={<CustomLabel />} />
						<Tooltip />
						<Legend layout="vertical" verticalAlign="top" align="center" padding={{
							top: 0,
							right: 0,
							bottom: 20,
							left: 0}} formatter={LegendTextManager} payload={
								[
									{ id: 'total', value: 'Total', type: 'square', color: '#E0E0E0'},
									{ id: 'threshold', value: 'Threshold', type: 'line', color: '#808080'},
								]
							 } />
						<Bar dataKey="total" stackId="a" fill="#E0E0E0">
							{/* <LabelList dataKey="total" position="top" /> */}
						</Bar>
						<Scatter dataKey="threshold" fill="#808080" shape={<DashedLine />}>
							<LabelList dataKey="threshold" position="top" fill="#808080" />
						</Scatter>
					
					</ComposedChart>
				</ResponsiveContainer>					
			</div>
		</div>
	)
}


export default NonComplianceTrendsWidget; 