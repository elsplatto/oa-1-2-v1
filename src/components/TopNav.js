import React, {useContext} from 'react';
import Avatar from '../img/avatar.svg';
import { LoggedInStatusContext } from '../store/Store';

const TopNav = (props) => {
	const [loginStatus, setLoginStatus] = useContext(LoggedInStatusContext);

	const handleSignOut = (e) => {
		e.preventDefault();
		localStorage.removeItem('signInData');
		setLoginStatus(null);
	}

	return (
		<nav className="bg-background-shade-dark border-b-8 border-item-dark-line-alt">
			<div className="container mx-auto">
				<div className="grid grid-cols-12 gap-x-6">
					<div className="col-span-8 text-base">
						<ul className="absolute">
							<li className="float-left">
								<a href="/" className="p-4 block text-text-dark border-b-8 border-background-shade-dark no-underline">Exporters</a>
							</li>
							<li className="float-left">
								<a href="#" className="p-4 block text-action-dark no-underline" onClick={handleSignOut}>Sign out</a>
							</li>
						</ul>
					</div>
					<div className="col-span-4">
						<div className="float-right">
							<a href="#" className="p-4 block text-action-dark no-underline">Welcome, Morgan <img src={Avatar} alt="Avatar image" className="pl-2 float-right" /></a>
						</div>
					</div>
				</div>
			</div>
		</nav>

	)
}

export default TopNav;