import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectShotsArr } from '../redux/screenshot/screenshot.selectors.js';
import { useSelector } from 'react-redux';

const ScreenShots = () => {
	const selectors = useSelector(
		createStructuredSelector({
			screenshots: selectShotsArr,
		})
	);

	const mapped = selectors.screenshots.map((s) => s);
	console.log(mapped);
	return (
		<div>
			{selectors.screenshots.map((shot) => {
				return <img width='100px' src={shot} alt={'Screenshot'} />;
			})}{' '}
		</div>
	);
};

export default ScreenShots;
