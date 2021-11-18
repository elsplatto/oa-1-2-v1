import React, {useState} from 'react';

import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    year: '2016',
    compliant: 85,
    "non-compliant": 8,
		feeder: {
			compliant: 23,
			"non-compliant": 2,
			japan: {
				compliant: 11,
				'non-compliant': 1
			},
			china: {
				compliant: 9,
				"non-compliant": 0
			},
			indonesia: {
				compliant: 3,
				"non-compliant": 1
			}
		},
		slaughter: {
			compliant: 12,
			"non-compliant": 4,
			japan: {
				compliant: 2,
				'non-compliant': 1
			},
			china: {
				compliant: 2,
				"non-compliant": 0
			},
			indonesia: {
				compliant: 8,
				"non-compliant": 3
			}
		},
		breeder: {
			compliant: 50,
			"non-compliant": 2,
			japan: {
				compliant: 10,
				'non-compliant': 1
			},
			china: {
				compliant: 30,
				"non-compliant": 0
			},
			indonesia: {
				compliant: 10,
				"non-compliant": 1
			}
		},		
		japan: {
			compliant: 11,
			'non-compliant': 1
		},
		china: {
			compliant: 9,
			"non-compliant": 0
		},
		indonesia: {
			compliant: 3,
			"non-compliant": 1
		},
    year: '2017',
    compliant: 92,
    "non-compliant": 8,
		feeder: {
			compliant: 43,
			"non-compliant": 4,
			japan: {
				compliant: 11,
				'non-compliant': 1
			},
			china: {
				compliant: 25,
				"non-compliant": 2
			},
			indonesia: {
				compliant: 6,
				"non-compliant": 1
			}
		},
		slaughter: {
			compliant: 19,
			"non-compliant": 4,
			japan: {
				compliant: 3,
				'non-compliant': 1
			},
			china: {
				compliant: 8,
				"non-compliant": 1
			},
			indonesia: {
				compliant: 8,
				"non-compliant": 2
			}
		},
		breeder: {
			compliant: 68,
			"non-compliant": 5,
			japan: {
				compliant: 10,
				'non-compliant': 1
			},
			china: {
				compliant: 38,
				"non-compliant": 1
			},
			indonesia: {
				compliant: 20,
				"non-compliant": 3
			}
		},
		japan: {
			compliant: 33,
			"non-compliant": 2
		},
		china: {
			compliant: 42,
			"non-compliant": 0
		},
		indonesia: {
			compliant: 34,
			"non-compliant": 1
		}
  },
  {
    year: '2018',
    compliant: 130,
    "non-compliant": 5,
		feeder: {
			compliant: 23,
			"non-compliant": 2,
			japan: {
				compliant: 11,
				'non-compliant': 1
			},
			china: {
				compliant: 9,
				"non-compliant": 0
			},
			indonesia: {
				compliant: 3,
				"non-compliant": 1
			}
		},
		slaughter: {
			compliant: 65,
			"non-compliant": 6,
			japan: {
				compliant: 25,
				'non-compliant': 1
			},
			china: {
				compliant: 22,
				"non-compliant": 2
			},
			indonesia: {
				compliant: 18,
				"non-compliant": 3
			}
		},
		breeder: {
			compliant: 50,
			"non-compliant": 2,
			japan: {
				compliant: 10,
				'non-compliant': 1
			},
			china: {
				compliant: 30,
				"non-compliant": 0
			},
			indonesia: {
				compliant: 10,
				"non-compliant": 1
			}
		},
		japan: {
			compliant: 40,
			"non-compliant": 3
		},
		china: {
			compliant: 58,
			"non-compliant": 1
		},
		indonesia: {
			compliant: 32,
			"non-compliant": 1
		}
  },
  {
    year: '2019',
    compliant: 145,
    "non-compliant": 8,
		feeder: {
			compliant: 23,
			"non-compliant": 2,			
			japan: {
				compliant: 11,
				'non-compliant': 1
			},
			china: {
				compliant: 9,
				"non-compliant": 0
			},
			indonesia: {
				compliant: 3,
				"non-compliant": 1
			}
		},
		slaughter: {
			compliant: 12,
			"non-compliant": 4,
			japan: {
				compliant: 2,
				'non-compliant': 1
			},
			china: {
				compliant: 2,
				"non-compliant": 0
			},
			indonesia: {
				compliant: 8,
				"non-compliant": 3
			}
		},
		breeder: {
			compliant: 50,
			"non-compliant": 2,
			japan: {
				compliant: 10,
				'non-compliant': 1
			},
			china: {
				compliant: 30,
				"non-compliant": 0
			},
			indonesia: {
				compliant: 10,
				"non-compliant": 1
			}
		},
		japan: {
			compliant: 40,
			"non-compliant": 3
		},
		china: {
			compliant: 68,
			"non-compliant": 2
		},
		indonesia: {
			compliant: 37,
			"non-compliant": 3
		}
  },
  {
    year: '2020',
    compliant: 85,
    "non-compliant": 2,
		feeder: {
			compliant: 23,
			"non-compliant": 2,
			japan: {
				compliant: 11,
				'non-compliant': 1
			},
			china: {
				compliant: 9,
				"non-compliant": 0
			},
			indonesia: {
				compliant: 3,
				"non-compliant": 1
			}
		},
		slaughter: {
			compliant: 12,
			"non-compliant": 4,
			japan: {
				compliant: 2,
				'non-compliant': 1
			},
			china: {
				compliant: 2,
				"non-compliant": 0
			},
			indonesia: {
				compliant: 8,
				"non-compliant": 3
			}
		},
		breeder: {
			compliant: 50,
			"non-compliant": 2,
			japan: {
				compliant: 10,
				'non-compliant': 1
			},
			china: {
				compliant: 30,
				"non-compliant": 0
			},
			indonesia: {
				compliant: 10,
				"non-compliant": 1
			}
		},
		japan: {
			compliant: 20,
			"non-compliant": 1
		},
		china: {
			compliant: 50,
			"non-compliant": 0
		},
		indonesia: {
			compliant: 15,
			"non-compliant": 1
		}
  },
  {
    year: '2021',
    compliant: 66,
    "non-compliant": 2,
		feeder: {
			compliant: 12,
			"non-compliant": 2,
			japan: {
				compliant: 8,
				'non-compliant': 2
			},
			china: {
				compliant: 2,
				"non-compliant": 0
			},
			indonesia: {
				compliant: 2,
				"non-compliant": 0
			}
		},
		slaughter: {
			compliant: 23,
			"non-compliant": 4,
			japan: {
				compliant: 7,
				'non-compliant': 1
			},
			china: {
				compliant: 12,
				"non-compliant": 2
			},
			indonesia: {
				compliant: 5,
				"non-compliant": 1
			}
		},
		breeder: {
			compliant: 31,
			"non-compliant": 2,
			japan: {
				compliant: 4,
				'non-compliant': 0
			},
			china: {
				compliant: 22,
				"non-compliant": 1
			},
			indonesia: {
				compliant: 5,
				"non-compliant": 1
			}
		},
		japan: {
			compliant: 16,
			"non-compliant": 1
		},
		china: {
			compliant: 40,
			"non-compliant": 0
		},
		indonesia: {
			compliant: 10,
			"non-compliant": 1
		}
  }
];

const ConsignmentComplianceChart = (props) => {

	const handleMarketChange = (e) => {
		let complianceObj = consignmentComplianceKeyObj;
		let nonComplianceObj = consignmentNonComplianceObj;

		complianceObj['market'] = e.target.value;
		nonComplianceObj['market'] = e.target.value;

		setConsignmentComplianceKeyObj(complianceObj);
		setConsignmentNonComplianceKeyObj(nonComplianceObj);

		constructKey();
	}

	const handleClassChange = (e) => {
		let complianceObj = consignmentComplianceKeyObj;
		let nonComplianceObj = consignmentNonComplianceObj;

		complianceObj['class'] = e.target.value;
		nonComplianceObj['class'] = e.target.value;

		setConsignmentComplianceKeyObj(complianceObj);
		setConsignmentNonComplianceKeyObj(nonComplianceObj);

		constructKey();

	}

	const constructKey = () => {
		let str = '';		

		if (consignmentComplianceKeyObj['class'].length > 0) {
			str = consignmentComplianceKeyObj['class'] + '.';
		}
		if (consignmentComplianceKeyObj['market'].length > 0) {
			str = str + consignmentComplianceKeyObj['market'] + '.';
		}
		if (consignmentComplianceKeyObj['transport'].length > 0) {
			str = str + consignmentComplianceKeyObj['transport'] + '.';
		}

		setConsignmentComplianceDataKey(str + 'compliant');
		setConsignmentNonComplianceDataKey(str + 'non-compliant');
	}


	const [consignmentComplianceDataKey, setConsignmentComplianceDataKey] = useState('compliant');
	const [consignmentNonComplianceDataKey, setConsignmentNonComplianceDataKey] = useState('non-compliant');


	const [consignmentComplianceKeyObj, setConsignmentComplianceKeyObj] = useState({class: '',market: '',transport: '',mode: 'compliant'});
	const [consignmentNonComplianceObj, setConsignmentNonComplianceKeyObj] = useState({class: '',market: '',transport: '',mode: 'non-compliant'});

	return (
		<div className="col-span-6 border border-background-alt-shade px-7 py-10">

			<div className="w-full">						
				<h3 className="text-3xl font-light">Total consignments and compliance</h3>
			</div>

			<div className="grid grid-cols-12 gap-4 py-4 h-auto overflow-hidden">
				<div className="col-span-4">
					<label className="text-xs text-text">Commodity:</label>
					<select 
					onChange={handleClassChange} 
					className="text-sm w-full border-2 border-foreground-border rounded-md text-sm text-text p-1">
						<option value="">Select commodity</option>
						<option value="breeder">Breeder cattle</option>
						<option value="slaughter">Slaughter cattle</option>
						<option value="feeder">Feeder cattle</option>
					</select>
				</div>
				<div className="col-span-4"><label className="text-xs text-text">Market:</label>
					<select 
					onChange={handleMarketChange} 
					className="text-sm w-full border-2 border-foreground-border rounded-md text-sm text-text p-1">
						<option value="">Select market</option>
						<option value="china">China</option>
						<option value="indonesia">Indonesia</option>
						<option value="japan">Japan</option>
					</select>
				</div>
				<div className="col-span-4">
					<label className="text-xs text-text">Transport:</label>
					<select className="text-sm w-full border-2 border-foreground-border rounded-md text-sm text-text p-1">
						<option value="">Both</option>
						<option value="air">Air</option>
						<option value="sea">Sea</option>
					</select>
				</div>
			</div>

			<div className="w-full h-96 overflow-hidden mt-8">
				<ResponsiveContainer className="w-full h-full">
					<BarChart
						width={'100%'}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 0,
							left: 0,
							bottom: 5,
						}}>				
						<XAxis dataKey="year" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey={consignmentComplianceDataKey} stackId="a" fill="#E0E0E0" />
						<Bar dataKey={consignmentNonComplianceDataKey} stackId="a" fill="#808080" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}


export default ConsignmentComplianceChart; 