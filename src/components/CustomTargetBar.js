import React from 'react';

const CustomTargetBar = (props) => {
	const { fill, x, y, width, height, amt, t } = props;

	let totalHeight = y + height;
	let targetY = totalHeight - ((height/amt) * t)

	return <svg>
			<line x1={x - 8} x2={x + (width + 8)} y1={targetY} y2={targetY} stroke={"#2967c1"} strokeWidth={2} strokeDasharray={"10 5"}/>
	</svg>;
};

export default CustomTargetBar;