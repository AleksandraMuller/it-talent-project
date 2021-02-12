import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Accordion from '../components/Accordian';
import Footer from '../components/Footer';
import { useHistory } from 'react-router-dom';

const StyledHeadline = styled.h1`
	color: #17181a;
	font-size: 3rem;
	font-weight: 900;
	line-height: 10rem;

	padding-top: 12rem;
	margin: 1rem;
`;

const StyledImage = styled.img`
	height: 50vh;
	position: absolute;
	left: 1;
	right: 2.25rem;
	top: 9rem;
	padding-right: 2rem;
	margin-bottom: 3rem;
`;
const StyledImage2 = styled.img`
	height: 68vh;
	position: absolute;
	padding-top: 10rem;
	padding-right: 2rem;
	margin-bottom: 3rem;
	left: 1;
	right: 2.25rem;
	top: 40rem;
`;

const StyledImage3 = styled.img`
	height: 46vh;
	position: absolute;
	padding-top: 10rem;
	padding-right: 2rem;
	margin-bottom: 3rem;
	left: 1;
	right: 2.25rem;
	top: 80rem;
	padding-right: 2rem;
	margin-bottom: 3rem;
`;

const StyledText = styled.text`
	font-weight: 400;
	font-style: bold;
`;
const StyledTextWrapper = styled.div`
	margin-left: 5rem;
`;
const StyledLink = styled(Link)`
	color: white;
	margin-right: 1rem;
	padding: 1rem;
	text-decoration: none;
`;
const Nav = styled.nav`
	box-shadow: rgba(233, 233, 233, 0.25) 0 1px;
	border-bottom: 2px solid white;
	background-color: #17181a;
	display: flex;
	justify-content: flex-end;
`;

const StyledAnchor = styled.a`
	display: inline-block;
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
	}
`;
const StyledContainer = styled.div``;

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: row-reverse;
	flex-direction: column;
	width: 56vh;
`;

const StyledNavText = styled.h3`
	border-bottom: 2px solid white;
	font-family: Tele2 Sans;
	font-style: Regular;
	font-size: 14px;
	line-height: 28px;
	letter-spacing: 5%;
`;

const StyledContainer2 = styled.div``;
const StyledContainer3 = styled.div``;
const StartPage = () => {
	const history = useHistory();
	return (
		<>
			<div>
				<Nav>
					<StyledLink>
						<StyledNavText>Home</StyledNavText>
					</StyledLink>
					<StyledLink to="/whiteboard">
						<StyledNavText>whiteboard</StyledNavText>
					</StyledLink>
					<StyledLink to="/happythoughts">
						<StyledNavText>Happy thoughts</StyledNavText>
					</StyledLink>
					<StyledLink to="/chatt">
						<StyledNavText>Chatt</StyledNavText>
					</StyledLink>
					<StyledLink to="/stickies">
						<StyledNavText>Stickies</StyledNavText>
					</StyledLink>
					<StyledLink to="/quote-generator">
						<StyledNavText>Quote generator</StyledNavText>
					</StyledLink>
					<StyledLink to='/chattpage'>
						<StyledNavText>ChattPage</StyledNavText>
					</StyledLink>
				</Nav>
			</div>

			<StyledContainer>
				<StyledHeadline>Online whiteboard</StyledHeadline>
				<StyledTextWrapper>
					<StyledText>
						This is a virtual whiteboard that helps <br />
						you and your team collaborate <br />
						to bring the best ideas to light.
					</StyledText>
				</StyledTextWrapper>

				<StyledImage src="https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80" />
				<StyledAnchor onClick={() => history.push('/whiteboard')}>
					GO TO WHITEBOARD
				</StyledAnchor>
			</StyledContainer>
			<StyledContainer2>
				<StyledHeadline>Happy Thoughts</StyledHeadline>
				<StyledTextWrapper>
					<StyledText>
						This is a virtual whiteboard that helps <br />
						you and your team collaborate <br />
						to bring the best ideas to light.
					</StyledText>
				</StyledTextWrapper>

				<StyledImage2
					alt="happy"
					src="https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
				/>
				<StyledAnchor onClick={() => history.push('/happythoughts')}>
					GO TO HAPPYTHOUGHTS
				</StyledAnchor>
			</StyledContainer2>

			<StyledContainer3>
				<StyledHeadline>Talent chatt</StyledHeadline>
				<StyledTextWrapper>
					<StyledText>
						This is a virtual whiteboard that helps <br />
						you and your team collaborate <br />
						to bring the best ideas to light.
					</StyledText>
				</StyledTextWrapper>

				<StyledImage3 src="https://images.unsplash.com/photo-1488998287214-1e668a8e0dc4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
				<StyledAnchor onClick={() => history.push('/chatt')}>
					GO TO CHATT
				</StyledAnchor>
			</StyledContainer3>
			<StyledContainer3>
				<StyledHeadline>Quote generator</StyledHeadline>
				<StyledTextWrapper>
					<StyledText>
						This is a virtual whiteboard that helps <br />
						you and your team collaborate <br />
						to bring the best ideas to light.
					</StyledText>
				</StyledTextWrapper>

				<StyledImage3 src="https://images.unsplash.com/photo-1488998287214-1e668a8e0dc4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
				<StyledAnchor onClick={() => history.push('/quote-generator')}>
					GO TO QOUTEGENERATOR
				</StyledAnchor>
			</StyledContainer3>
			<StyledWrapper>
				<Accordion title="Why is the sky blue?">
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
				<Accordion title="What Is a Black Hole?">
					A black hole is an area of such immense gravity that nothing -- not
					even light -- can escape from it.
				</Accordion>
			</StyledWrapper>

			<Footer />
		</>
	);
};

export default StartPage;
