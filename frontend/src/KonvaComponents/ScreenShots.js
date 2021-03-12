import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectShotsArr } from '../redux/screenshot/screenshot.selectors.js';
import { useSelector, useDispatch } from 'react-redux';
import { deleteScreenshot } from '../redux/screenshot/screenshot.actions.js';
import styled from 'styled-components';
import { ReactComponent as TrashLogo } from '../assets/trash-outline.svg';

const StyledContainer = styled.div`
	background-color: #333;
	width: 100vw;
	overflow: hidden;
	min-height: 100vh;
`;

const StyledFlexContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const StyledImage = styled.img`
	width: 100%;
	opacity: 0.6;
	/* width: 90%;
	@media (min-width: 767px) {
		width: 30%;
	}
	@media (min-width: 1200px) {
	} */
	&:hover {
		opacity: 1;
	}
`;

const StyledWrapper = styled.div`
	margin: auto;
	width: 90%;
	padding-bottom: 2rem;
	display: flex;
	flex-direction: column;
	@media (min-width: 767px) {
		width: 30%;
	}
	@media (min-width: 1200px) {
	}
`;

const StyledTitle = styled.h2`
	text-align: center;
	/* text-transform: uppercase; */
	font-family: 'News Cycle', sans-serif;
	letter-spacing: 3px;
	color: #fff;
	font-size: 1rem;
	display: block;
	padding: 1rem 0;
	@media (min-width: 767px) {
		font-size: 2.5rem;
		padding: 2rem 0;
	}
`;

const StyledButton = styled.button`
	cursor: pointer;
	border-radius: 50%;
	outline: none;
	border: none;
	align-self: flex-start;
	background-color: transparent;
`;

const ScreenShots = () => {
	const dispatch = useDispatch();
	const selectors = useSelector(
		createStructuredSelector({
			screenshots: selectShotsArr,
		})
	);

	const mapped = selectors.screenshots.map((s) => s);

	const deleteShot = (shot) => {
		dispatch(deleteScreenshot(shot));
	};
	return (
		<StyledContainer>
			<StyledTitle>Your screenshots:</StyledTitle>
			<StyledFlexContainer>
				{selectors.screenshots.map((shot) => {
					return (
						<StyledWrapper key={shot}>
							<StyledButton onClick={() => deleteShot(shot)}>
								<TrashLogo height='32px' width='32px' />
							</StyledButton>
							<StyledImage width='100px' src={shot} alt={'Screenshot'} />
						</StyledWrapper>
					);
				})}{' '}
			</StyledFlexContainer>
		</StyledContainer>
	);
};

export default ScreenShots;
