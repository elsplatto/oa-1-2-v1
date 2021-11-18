import React, { useState, useContext, useEffect } from 'react';
import Avatar from '../img/avatar.svg';
import SiteCOA from '../img/coa.png';

const Header = (props) => {
	return (
		<footer className="bg-background-dark relative w-full border-t-4 border-item-dark-line-alt">
			<div className="container mx-auto pt-12 pb-6 border-b border-item-dark-line-alt">
				<div>
					<a href="/" className="text-action-dark pr-4">Accessibility</a>
					<a href="/" className="text-action-dark pr-4">Disclaimer</a>
					<a href="/" className="text-action-dark pr-4">Privacy</a>
				</div>
			</div>
			<div className="container mx-auto pt-8 pb-12">
				<div className="grid grid-cols-12 gap-x-6">
					<p className="col-span-6 text-text-dark mb-4 font-light">
					We acknowledge the traditional owners of country throughout Australia and recognise their
					continuing connection to land, waters and culture. We pay our respects to their Elders past,
					present and emerging.
					</p>
					<p className="col-span-12 text-text-dark font-light">
						&copy; Commonwealth of Australia
					</p>
				</div>

				
			</div>
		</footer>
  )
}

export default Header;