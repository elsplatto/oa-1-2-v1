import React, {useEffect, useContext} from 'react';
import SignInData from '../data/signins.json';
import { LoggedInStatusContext } from '../store/Store';
import { 	Redirect } from 'react-router-dom';

const SignIn = (props) => {

	const [loginStatus, setLoginStatus] = useContext(LoggedInStatusContext);

	const handleSignInClick = (e) => {
		e.preventDefault();
		const data = SignInData;
		const email = document.getElementById('email').value;
		let signInData = null;
		let signInDate = null;

		data.map((signInDetails,i) => {
			if (email == signInDetails.email) {
				// console.log('Sign in deets:', signInDetails);
				signInData = signInDetails;
				signInData.loggedIn = true;
				signInDate = new Date().getTime();
				signInData.logInDate = signInDate;
			}
		})
		// console.log('signInData:', signInData);
		if (signInData) {
			localStorage.setItem("signInData", JSON.stringify(signInData));
			setLoginStatus(signInData);	
		}	
	}

	useEffect(()=> {
		const localSignInData = JSON.parse(localStorage.getItem("signInData"));
		if (!loginStatus && localSignInData) {
			setLoginStatus(localSignInData);
		}
	},[])

	const lastPage = localStorage.getItem('lastPage');


	if (!loginStatus) {
		return (
			<div className="bg-background h-auto overflow-hidden signin-content-area mb-20 grid items-center">
				<div className="container mx-auto">
					<div className="grid grid-cols-12 gap-6">
						<div className="col-start-4 col-span-6 border border-background-alt shadow-lg p-20">
							
							<h1 className="text-2xl text-text">Sign in to your account</h1>

							<div className="mt-12">
								<label className="text-sm text-text block" htmlFor="email">
									Email address:
								</label>
								<input type="text" name="email" id="email" className="border-2 border-foreground-border rounded mt-1 w-80 h-10 p-2" />

							</div>

							<div className="mt-8">
								<label className="text-sm text-text block" htmlFor="password">
									Password:
								</label>
								<input type="password" name="password" id="password" className="border-2 border-foreground-border rounded mt-1 w-80 h-10 p-2" />

							</div>

							<div className="mt-4">
								<label className="flex text-sm text-text"><input type="checkbox" value="keep" className="w-6 h-6 mr-3 mb-3" />keep me signed in</label>
							</div>
							
							<div className="mt-4">
								<a href="#">Forgot your password?</a>
							</div>
							
							<div className="mt-4">
								<a href="#" onClick={handleSignInClick} className="inline-block bg-action py-2 px-7 text-text-dark no-underline rounded-md border-2 border-action">Sign in</a>
							</div>
							
						</div>
					</div>
				</div>			
			</div>
		)
	}
	else {
		if (lastPage) {
			return (
				<Redirect to={lastPage} />
			)
		} else {
			return (
				<Redirect to="/dashboard" />
			)
		}
		
	}
}


export default SignIn; 