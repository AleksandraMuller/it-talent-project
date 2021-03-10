import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import music from '../assets/music.png';
import robot from '../assets/robot.png';
import first from '../assets/first.png';

const StyledMainContainer = styled.div`
	background-color: #eee;
	width: 100vw;
	min-height: 100vh;
`;

const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100vw;
	padding-top: 6rem;
	@media (min-width: 767px) {
		flex-direction: row;
		padding-top: 2rem;
	}
`;

const StyledAnchor = styled.a`
	border: none;
	text-align: center;
	cursor: pointer;
	text-transform: uppercase;
	outline: none;
	overflow: hidden;
	position: relative;
	color: #fff;
	font-weight: 700;
	font-size: 15px;
	background-color: #222;
	padding: 17px 60px;
	margin: 0 auto;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	letter-spacing: 4px;
	margin-top: 2.5rem;
	:after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		height: 490%;
		width: 140%;
		// background: #78c7d2;
		background: #e86462;
		-webkit-transition: all 0.5s ease-in-out;
		transition: all 0.5s ease-in-out;
		-webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
		transform: translateX(-98%) translateY(-25%) rotate(45deg);
	}
	:hover:after {
		-webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
		transform: translateX(-9%) translateY(-25%) rotate(45deg);
	}
`;

const StyledTextWrapper = styled.div`
	width: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	font-family: 'News Cycle', sans-serif;

	@media (min-width: 767px) {
		width: 40%;
	}
`;

const StyledHeadline = styled.h1`
	margin-bottom: 2rem;
	color: #333;
`;

const StyledText = styled.text`
	font-weight: 400;
	font-style: bold;
	color: #333;
`;

const StyledImage = styled.img`
	width: 19rem;
	margin-top: 2rem;
	@media (min-width: 767px) {
		order: 0;
		width: 50%;
	}
`;

const StyledSpan = styled.span`
	z-index: 100;
	position: relative;
`;

const StyledTitle = styled.h1`
	text-align: center;
	/* text-transform: uppercase; */
	font-family: 'News Cycle', sans-serif;
	letter-spacing: 3px;
	color: #333;
	font-size: 1rem;
	@media (min-width: 767px) {
		font-size: 2.5rem;
	}
`;

const TopContainer = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 1rem;
`;
const StyledStickyImage = styled.img`
	width: 2rem;
	@media (min-width: 767px) {
		width: 7rem;
	}
`;

const FirstPage = () => {
	const history = useHistory();
	return (
		<StyledMainContainer>
			<TopContainer>
				<StyledStickyImage src={first} />
				<StyledTitle>Welcome! Here is your...</StyledTitle>
			</TopContainer>
			<StyledContainer>
				<StyledTextWrapper>
					<StyledHeadline>Virtual app for teams</StyledHeadline>
					<StyledText>
						Here is the fun place to hang out for you
						<br />
						and your colleagues where you can share your thoughts,
						<br />
						think together with the help of the whiteboard <br />
						and simply get inspired.
					</StyledText>
					<StyledAnchor onClick={() => history.push('/startpage')}>
						<StyledSpan>EXPLORE NOW</StyledSpan>
					</StyledAnchor>
				</StyledTextWrapper>

				<StyledImage src={music} />
			</StyledContainer>
		</StyledMainContainer>
	);
};
export default FirstPage;
