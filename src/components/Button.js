import React from 'react';
import {Link } from 'react-router-dom';

const Button = (props) => {
	if (props.type === 'secondary') {
		return (
			<Link to={props.link} className="inline-block bg-background py-2 px-7 text-action no-underline rounded-md border-2 border-action">{props.text}</Link>
		)
	}
	else if (props.type === 'tertiary') {
		return (
			<Link to={props.link} className="inline-block bg-background py-2 px-7 text-action no-underline rounded-md border-2 border-background">{props.text}</Link>
		)
	}
	else {
		return (
			<Link to={props.link} className="inline-block bg-action py-2 px-7 text-text-dark no-underline rounded-md border-2 border-action">{props.text}</Link>
		)
	}
	
}


export default Button; 