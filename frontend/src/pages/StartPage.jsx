import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Accordion from '../components/Accordian';
import Footer from '../components/Footer';
import { useHistory } from 'react-router-dom';

const StyledHeadline = styled.h1`
	/* color: #17181a;
	font-size: 3rem;
	font-weight: 900;
	line-height: 10rem;

	padding-top: 12rem;
	margin: 1rem; */
	margin-bottom: 2rem;
`;

const StyledImage = styled.img`
	width: 100%;
	height: 25rem;
	justify-self: flex-end;
	order: -1;
	@media (min-width: 767px) {
		order: 0;
		width: 50%;
	}
`;

const StyledImageLeft = styled(StyledImage)`
	order: -1;
`;

const StyledText = styled.text`
	font-weight: 400;
	font-style: bold;
`;
const StyledTextWrapper = styled.div`
	width: 100%;
	text-align: center;
	/* margin-left: 5rem; */
	display: flex;
	flex-direction: column;
	@media (min-width: 767px) {
		width: 50%;
	}
`;
const StyledLink = styled(Link)`
	color: white;
	margin-right: 1rem;
	padding: 1rem;
	text-decoration: none;
	font-family: 'News Cycle', sans-serif;
`;
const Nav = styled.nav`
	box-shadow: rgba(233, 233, 233, 0.25) 0 1px;
	background-color: #17181a;
	display: flex;
	justify-content: flex-end;
	font-family: 'News Cycle', sans-serif;
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
		background: #d35400;
		-webkit-transition: all 0.5s ease-in-out;
		transition: all 0.5s ease-in-out;
		-webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
		transform: translateX(-98%) translateY(-25%) rotate(45deg);
	}
	:hover:after {
		-webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
		transform: translateX(-9%) translateY(-25%) rotate(45deg);
	}

	/* display: inline-block;
	padding: 0.35em 1.2em;
	border: 0.1em solid #ffffff;
	margin: 0 0.3em 0.3em 0;
	border-radius: 0.12em;
	box-sizing: border-box;
	text-decoration: none;
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
	color: white;
	text-align: center;
	transition: all 0.2s;
	border: 2px solid black;
	background-color: #17181a;
	margin: 5rem;

	&:hover {
		color: black;
		background-color: white;
	} */
`;
const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 1rem 1rem 0 1rem;
	@media (min-width: 450px) {
	}
	@media (min-width: 767px) {
		flex-direction: row;
	}
	@media (min-width: 1200px) {
	}
	@media (min-width: 1800px) {
	}
`;

const StyledWrapper = styled.div`
	/* display: flex;
	flex-direction: row-reverse;
	flex-direction: column;
	width: 56vh; */
`;

const StyledNavText = styled.h3`
	border-bottom: 2px solid white;
	font-family: Tele2 Sans;
	font-style: Regular;
	font-size: 14px;
	line-height: 28px;
	letter-spacing: 5%;
`;

const StyledSpan = styled.span`
	z-index: 100;
	position: relative;
`;

const StyledFlexbox = styled.div``;
const StartPage = () => {
	const history = useHistory();
	return (
		<>
			<Nav>
				<StyledLink>
					<StyledNavText>Home</StyledNavText>
				</StyledLink>
				<StyledLink to='/whiteboard'>
					<StyledNavText>Whiteboard</StyledNavText>
				</StyledLink>
				<StyledLink to='/happythoughts'>
					<StyledNavText>Share your thoughts</StyledNavText>
				</StyledLink>
				<StyledLink to='/chatt'>
					<StyledNavText>Chatt</StyledNavText>
				</StyledLink>
				<StyledLink to='/stickies'>
					<StyledNavText>Stickies</StyledNavText>
				</StyledLink>
				<StyledLink to='/quote-generator'>
					<StyledNavText>Quote generator</StyledNavText>
				</StyledLink>
			</Nav>

			<StyledFlexbox>
				<StyledContainer>
					<StyledTextWrapper>
						<StyledHeadline>Online whiteboard</StyledHeadline>

						<StyledText>
							This is a virtual whiteboard that helps <br />
							you and your team collaborate <br />
							to bring the best ideas to light.
						</StyledText>
						<StyledAnchor onClick={() => history.push('/whiteboard')}>
							<StyledSpan>EXPLORE NOW</StyledSpan>
						</StyledAnchor>
					</StyledTextWrapper>

					<StyledImage src='https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80' />
				</StyledContainer>
				<StyledContainer>
					<StyledTextWrapper>
						<StyledHeadline>Share Your Thoughts</StyledHeadline>

						<StyledText>
							This is a virtual board for sharing <br />
							your thoughts and quotes <br />
							with your team.
						</StyledText>
						<StyledAnchor onClick={() => history.push('/happythoughts')}>
							<StyledSpan>EXPLORE NOW</StyledSpan>
						</StyledAnchor>
					</StyledTextWrapper>

					<StyledImageLeft
						alt='happy'
						src='https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80'
					/>
				</StyledContainer>

				<StyledContainer>
					<StyledTextWrapper>
						<StyledHeadline>Talent chatt</StyledHeadline>

						<StyledText>
							This is a virtual whiteboard that helps <br />
							you and your team collaborate <br />
							to bring the best ideas to light.
						</StyledText>
						<StyledAnchor onClick={() => history.push('/chatt')}>
							<StyledSpan>EXPLORE NOW</StyledSpan>
						</StyledAnchor>
					</StyledTextWrapper>

					<StyledImage src='https://images.unsplash.com/photo-1488998287214-1e668a8e0dc4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' />
				</StyledContainer>
				<StyledContainer>
					<StyledTextWrapper>
						<StyledHeadline>Quote generator</StyledHeadline>

						<StyledText>
							This is a virtual whiteboard that helps <br />
							you and your team collaborate <br />
							to bring the best ideas to light.
						</StyledText>
						<StyledAnchor onClick={() => history.push('/quote-generator')}>
							<StyledSpan>EXPLORE NOW</StyledSpan>
						</StyledAnchor>
					</StyledTextWrapper>

					<StyledImageLeft src='https://images.unsplash.com/photo-1488998287214-1e668a8e0dc4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' />
				</StyledContainer>
			</StyledFlexbox>
			<StyledWrapper>
				<Accordion title='Why is the sky blue?'>
					Sunlight reaches Earth's atmosphere and is scattered in all directions
					by all the gases and particles in the air. Blue light is scattered
					more than the other colors because it travels as shorter, smaller
					waves. This is why we see a blue sky most of the time.
				</Accordion>
				<Accordion title="What's It Like Inside Jupiter?">
					It's really hot inside Jupiter! No one knows exactly how hot, but
					scientists think it could be about 43,000°F (24,000°C) near Jupiter's
					center, or core.
				</Accordion>
				<Accordion title='What Is a Black Hole?'>
					A black hole is an area of such immense gravity that nothing -- not
					even light -- can escape from it.
				</Accordion>
			</StyledWrapper>

			<Footer />
		</>
	);
};

export default StartPage;
