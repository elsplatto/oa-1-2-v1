import React, {useState, useEffect, useRef, useContext} from 'react';
import ConsignmentTable from '../components/ConsignmentTable';
import DatePicker from 'react-datepicker';
import { Redirect } from 'react-router-dom';
import { LoggedInStatusContext } from '../store/Store';
import Close from '../img/icons/close.svg';

const Consignments = (props) => {

	const [issuesOnly, setIssuesOnly] = useState(false);

	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null)

	const [dateRange, setDateRange] = useState([null, null]);
	
	const [filterChangeCount, setFilterChangeCount] = useState(0);

	const [filterObj, setFilterObj] = useState({});

	const [lncSearch, setLncSearch] = useState(null);

	const prevCountryFilterArrRef = useRef();

	const handleIssuesCheckboxChange = (e) => {
		setIssuesOnly(e.target.checked)
	}

	localStorage.setItem('lastPage', '/consignments');

	const handleFilterCheckboxChange = (e) => {
		let arr = null;
		let obj = filterObj;
		let changeCount = filterChangeCount;

		const filterCategory = e.target.getAttribute('filtercategory').toLowerCase();

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

	const clearDaterange = (e) => {
		e.preventDefault();
		setStartDate(null);
		setEndDate(null);
		setDateRange([null, null]);
	}

	const handleClearFilters = (e) => {
		e.preventDefault();
		let changeCount = filterChangeCount;
		setStartDate(null);
		setEndDate(null);
		setDateRange([null, null]);
		setFilterObj({});
		setIssuesOnly(false);
		changeCount++;
		setFilterChangeCount(changeCount);
		setLncSearch(null);
		clearSearch();
	}

	const handleLNCSearch = (e) => {
		e.preventDefault();
		const searchEl = document.getElementById('LNCSearch');
		// console.log('LNCSearch', searchEl)
		if (searchEl) {
			setLncSearch(searchEl.value);
		}
		// console.log('lncSearch:', lncSearch);
	}

	const handleSearchClear = (e) => {
		e.preventDefault();
		clearSearch();		
	}

	const clearSearch = () => {
		const searchEl = document.getElementById('LNCSearch');
		// console.log('LNCSearch', searchEl)
		if (searchEl) {
			setLncSearch(null);
			searchEl.value = '';
		}
	}

	const valueInObj = (key, value) => {
		if (filterObj[key]) {
			if (filterObj[key].includes(value)) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	useEffect(() => {
		prevCountryFilterArrRef.current = filterObj;
		if (startDate && endDate && endDate > startDate) {
			setDateRange([startDate, endDate]);
		}
  },[filterChangeCount, startDate, endDate]);

	const [loginStatus] = useContext(LoggedInStatusContext);

	if (loginStatus) {
		return (			
			<div className="bg-background h-auto overflow-hidden content-area mb-20">				
				<div className="container mx-auto">
					<div className="grid grid-cols-12 mt-12 gap-x-14">
						<div className="col-span-2">
							<div className="grid mt-4 border-b border-foreground-border">
								<a href="#" onClick={handleClearFilters} className="inline-block bg-background py-2 px-7 text-action no-underline rounded-md border-2 border-background">Reset filters</a>
							</div>
							{/* <div className="grid mt-4 border-b border-foreground-border pb-8">
								<h5 className="font-semibold">Show issues only?</h5>
								<div className="mt-4 grid relative">
									<label className="flex"><input type="checkbox" value="true" checked={issuesOnly} onChange={handleIssuesCheckboxChange} className="w-6 h-6 mr-3" />Yes</label>
								</div>
							</div> */}

							<div className="grid mt-8 border-b border-foreground-border pb-8">
								<h5 className="font-semibold">Filter by date range</h5>
								<div className="mt-4 grid relative">
									<span className="block text-sm">From:</span>
									<div className="relative">
										<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" />
									</div>
									<span className="block text-sm">to:</span>
									<div className="relative">
										<DatePicker selected={endDate} onChange={(date) => setEndDate(date)} dateFormat="dd/MM/yyyy" />
									</div>
									<div className="mt-2">
										<a href="#" className="text-sm" onClick={clearDaterange}>Clear date range</a>
									</div>
								</div>
							</div>

							<div className="grid mt-8 border-b border-foreground-border pb-8">
								<h5 className="font-semibold">Filter by country</h5>
								<div className="mt-4 grid">
									<label className="flex"><input type="checkbox" checked={valueInObj('country','China')} value="China" filtercategory="country" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />China</label>
									<label className="flex"><input type="checkbox" checked={valueInObj('country','Germany')} value="Germany" filtercategory="country" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Germany</label>
									<label className="flex"><input type="checkbox" checked={valueInObj('country','Indonesia')} value="Indonesia" filtercategory="country" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Indonesia</label>
									<label className="flex"><input type="checkbox" checked={valueInObj('country','Japan')} value="Japan" filtercategory="country" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Japan</label>
									<label className="flex"><input type="checkbox" checked={valueInObj('country','Russia')} value="Russia" filtercategory="country" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Russia</label>
									<label className="flex"><input type="checkbox" checked={valueInObj('country','Thailand')} value="Thailand" filtercategory="country" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Thailand</label>
									<label className="flex"><input type="checkbox" checked={valueInObj('country','UAE')} value="UAE" filtercategory="country" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />UAE</label>
									<label className="flex"><input type="checkbox" checked={valueInObj('country','Vietnam')} value="Vietnam" filtercategory="country" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Vietnam</label>
								</div>
							</div>

							<div className="grid mt-8 border-b border-foreground-border pb-8">
								<h5 className="font-semibold">Filter by class</h5>
								<div className="mt-4 grid">
									<label className="flex"><input type="checkbox" checked={valueInObj('class','Breeder')} value="Breeder" filtercategory="class" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Breeder</label>
									<label className="flex"><input type="checkbox" checked={valueInObj('class','Feeder')} value="Feeder" filtercategory="class" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Feeder</label>
									<label className="flex"><input type="checkbox" checked={valueInObj('class','Slaughter')} value="Slaughter" filtercategory="class" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Slaughter</label>
								</div>
							</div>

							<div className="grid mt-8 border-b border-foreground-border pb-8">
								<h5 className="font-semibold">Filter by species</h5>
								<div className="mt-4 grid">
									<label className="flex"><input type="checkbox" checked={valueInObj('species','Buffalo')} value="Buffalo" filtercategory="species" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Buffalo</label>
									<label className="flex"><input type="checkbox" checked={valueInObj('species','Cattle')} value="Cattle" filtercategory="species" className="w-6 h-6 mr-3 mb-3" onChange={handleFilterCheckboxChange} />Cattle</label>
								</div>
							</div>
						</div>

						<div className="col-span-10">
							<h2 className="text-5xl font-light leading-normal">Consignments</h2>	

							<div className="flex mt-8 relative">
								<div className="flex-grow items-center flex">
									<label className="flex"><input type="checkbox" value="true" checked={issuesOnly} onChange={handleIssuesCheckboxChange} className="w-6 h-6 mr-3" />Only consignments with issues</label>
								</div>
								<input type="text" name="LNCSearch" id="LNCSearch" placeholder="Enter LNC" className="inline-block border-2 border-foreground-border border-r-0 rounded-l w-40 p-2" />
								<a href="#" onClick={handleLNCSearch} className="inline-block bg-action py-2 px-7 text-text-dark no-underline rounded-r border-2 border-action">Search</a>
								{
									lncSearch ? <a onClick={handleSearchClear} href="#" className="absolute right-28 top-2 p-2"><img src={Close} className="w-3 h-3" alt="Clear search box icon" /></a> : null
								}
								
							</div>

							<div className="grid">
								<ConsignmentTable issuesOnly={issuesOnly} filterObj={filterObj} dateRange={dateRange} lncSearch={lncSearch} />					
							</div>
						</div>
					</div>					
				</div>			
			</div>
		)
		} else {
			return (
				<Redirect to="/sign-in" />
			)
		}
}



export default Consignments; 