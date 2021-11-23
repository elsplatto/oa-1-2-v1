import React, { useState, useContext, useEffect } from 'react';
import SiteCOA from '../img/coa.png';

const Header = (props) => {
	return (
		<header className="bg-header">
			{/* <div className="absolute z-40 top-1 left-0">
				<div className="absolute z-40 top-1 left-0 text-green sm:hidden block">
					Extra Small
				</div>
				<div className="absolute z-40 top-1 left-0 text-pink hidden md:hidden sm:block">
					Small
				</div>
				<div className="absolute z-40 top-1 left-0 text-teal hidden lg:hidden md:block">
					Medium
				</div>
				<div className="absolute z-40 top-1 left-0 text-orange hidden xl:hidden lg:block">
					Large
				</div>
				<div className="absolute z-40 top-1 left-0 text-yellow hidden lg:hidden xl:block">
					Extra Large
				</div>
			</div> */}


			<div className="container mx-auto lg:py-8 md:py-5 py-4">
				<div className="grid grid-cols-12 gap-x-6">
					<div className="col-span-3">
						<a href="/" className="lock"><img src={SiteCOA} alt="Australian coat of arms" /></a>
					</div>
					<div className="col-span-9 justify-center flex flex-col border-l border-white pl-6">
						<span className="block text-white text-2xl font-bold">Live Animal Exports</span>
						{/* <span>Service description</span> */}
					</div>
				</div>
			</div>
		</header>

		
	
  )
}

export default Header;