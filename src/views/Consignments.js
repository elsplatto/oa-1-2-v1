import React, {useState, useEffect, useRef} from 'react';

import ConsignmentTable from '../components/ConsignmentTable';
import Filter from '../img/icons/filter.svg';
import Close from '../img/icons/close.svg';

const Consignments = (props) => {

	const [issuesOnly, setIssuesOnly] = useState(false);
	const [showFilter, setShowFilter] = useState(false);
	const [countryFilterArr, setCountryFilterArr] = useState([]);
	const [classFilterArr, setClassFilterArr] = useState([]);
	const [speciesFilterArr, setSpeciesFilterArr] = useState([]);


	const [filterChangeCount, setFilterChangeCount] = useState(0);

	const [filterObj, setFilterObj] = useState({});

	const prevCountryFilterArrRef = useRef();

	const handleIssuesCheckboxChange = (e) => {
		setIssuesOnly(e.target.checked)
	}

	const handleFilterCheckboxChange = (e) => {
		let arr = null;
		let obj = filterObj;
		let changeCount = filterChangeCount;

		const filterCategory = e.target.getAttribute('filtercategory').toLowerCase();
		// console.log('filterObj', Object.keys(filterObj).includes(filterCategory));

		if (Object.keys(filterObj).includes(filterCategory)) {
			arr = filterObj[filterCategory];
		}
		else {
			arr = [];
		}

		let index = null;
		if (e.target.checked) {
			arr.push(e.target.value)
		} else {
			index = arr.indexOf(e.target.value);
			arr.splice(index, 1);
		}

		if (arr.length > 0) {
			obj[filterCategory] = arr;
		}
		else {
			delete obj[filterCategory];
		}

		changeCount++;
		setFilterChangeCount(changeCount);
		setFilterObj(obj);		
	}

	const handleToggleFilter = (e) => {
		e.preventDefault();
		if (showFilter) {
			setShowFilter(false);
		}
		else {
			setShowFilter(true);
		}		
	}	

	useEffect(() => {
		prevCountryFilterArrRef.current = filterObj;	
  },[filterChangeCount]);

	return (
		<>
		<div className={`filter-slider w-80 ${showFilter ? 'open' : ''} fixed overflow-y-scroll bg-background px-8 py-10 shadow-xl h-full z-10`}>
			<a href="#" onClick={handleToggleFilter} className="absolute top-0 right-0 p-6">Close<img src={Close} className="inline-block ml-2" /></a>
			<div className="grid mt-8">
				<h5 className="font-semibold">Country</h5>
				<div className="mt-4 grid">
					<label className="flex"><input type="checkbox" value="China" filtercategory="country" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />China</label>
					<label className="flex"><input type="checkbox" value="Germany" filtercategory="country" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Germany</label>
					<label className="flex"><input type="checkbox" value="Indonesia" filtercategory="country" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Indonesia</label>
					<label className="flex"><input type="checkbox" value="Japan" filtercategory="country" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Japan</label>
					<label className="flex"><input type="checkbox" value="Russia" filtercategory="country" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Russia</label>
					<label className="flex"><input type="checkbox" value="Thailand" filtercategory="country" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Thialand</label>
					<label className="flex"><input type="checkbox" value="UAE" filtercategory="country" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />UAE</label>
					<label className="flex"><input type="checkbox" value="Vietnam" filtercategory="country" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Vietnam</label>
				</div>
			</div>

			<div className="grid mt-8">
				<h5 className="font-semibold">Class</h5>
				<div className="mt-4 grid">
					<label className="flex"><input type="checkbox" value="Breeder" filtercategory="class" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Breeder</label>
					<label className="flex"><input type="checkbox" value="Feeder" filtercategory="class" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Feeder</label>
					<label className="flex"><input type="checkbox" value="Slaughter" filtercategory="class" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Slaughter</label>
				</div>
			</div>

			<div className="grid mt-8">
				<h5 className="font-semibold">Species</h5>
				<div className="mt-4 grid">
					<label className="flex"><input type="checkbox" value="Buffalo" filtercategory="species" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Buffalo</label>
					<label className="flex"><input type="checkbox" value="Cattle" filtercategory="species" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Cattle</label>
				</div>
			</div>

		</div>
		<div className="bg-background h-auto overflow-hidden content-area mb-20">
			
			<div className="container mx-auto">
				<h2 className="mt-12 text-5xl font-light">Consignments</h2>	

				<div className="grid grid-cols-12 gap-6 mt-8 items-center">
					<div className="col-span-10">
						<label className="flex"><input type="checkbox" value="true" onChange={handleIssuesCheckboxChange} className="w-6 h-6 mr-3" />Show only consignments with issues</label>
					</div>
					<div className="col-span-2">
						<a href="#" onClick={handleToggleFilter} className="no-underline flex flex-col justify-center items-center float-right">
							<img src={Filter} className="w-8 h-8" alt="Click for filters" />
							<span className="text-sm">Filters</span>
						</a>
					</div>
				</div>

				<div className="grid">
					<ConsignmentTable issuesOnly={issuesOnly} filterObj={filterObj} />					
				</div>
			</div>			
		</div>
		</>
	)
}


export default Consignments; 