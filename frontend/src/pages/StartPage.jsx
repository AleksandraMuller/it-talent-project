import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Accordion from '../components/Accordian';
import Footer from '../components/Footer';
import {useHistory} from 'react-router-dom';
import {ReactComponent as HamburgerLogo} from '../assets/menu-outline.svg';
import {ReactComponent as HomeLogo} from '../assets/home-outline.svg';
import thinkingman from '../assets/thouhgts.png';
import robot from '../assets/robot.png';
import music from '../assets/music.png';
import academic from '../assets/academic.png';
import whiteboardman from '../assets/whiteboardman.png';

const StyledHeadline = styled.h1`
	margin-bottom: 2rem;
	color: #333;
`;

const StyledImage = styled.img`
	width: 100%;
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
	color: #222;
`;
const StyledTextWrapper = styled.div`
	width: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	font-family: 'News Cycle', sans-serif;

	@media (min-width: 767px) {
		width: 50%;
	}
`;
const StyledLink = styled(Link)`
	margin-right: 0.5rem;
	padding: 1rem;
	color: #fff;
	text-decoration: none;
	font-family: 'News Cycle', sans-serif;
	/* display: none; */
	@media (min-width: 767px) {
		display: inline-block;
	}
`;

const StyledLogoLink = styled(Link)`
	margin-right: 0.5rem;
	padding: 0.5rem;
	display: inline-block;
	font-family: 'News Cycle', sans-serif;

	@media (min-width: 767px) {
		display: none;
	}
`;

const StyledHomeLink = styled(Link)`
	margin-right: 0.5rem;
	padding: 1rem;
	color: #fff;
	text-decoration: none;
	font-family: 'News Cycle', sans-serif;
	display: none;
	@media (min-width: 767px) {
		display: inline-block;
	}
`;

const Nav = styled.nav`
	background-color: #222;
	display: flex;
	justify-content: space-between;
	font-family: 'News Cycle', sans-serif;
	letter-spacing: 1.5px;
	@media (min-width: 450px) {
	}
	@media (min-width: 767px) {
	}
	@media (min-width: 1200px) {
	}
	@media (min-width: 1800px) {
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
const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 2rem 1rem 2rem 1rem;
	@media (min-width: 450px) {
	}
	@media (min-width: 767px) {
		flex-direction: row;
		padding: 3rem 1rem 3rem 1rem;
	}
	@media (min-width: 1200px) {
	}
	@media (min-width: 1800px) {
	}
`;

const StyledContainerColored = styled(StyledContainer)`
	background-color: #eee;
`;

const StyledWrapper = styled.div`
	color: #333;
`;

const StyledNavText = styled.h3`
	/* border-bottom: 2px solid white; */
	font-size: 14px;
	color: #fff;
	letter-spacing: 5%;
	${StyledLink}:hover & {
		color: #ccc;
	}
	@media (min-width: 767px) {
		${StyledLink}:hover & {
			color: #ccc;
			border-bottom: 2px solid #ccc;
		}
	}
`;

const StyledNavContainer = styled.div`
	position: absolute;
	background-color: #222;
	flex-direction: column;
	opacity: 0.8;
	top: 3.4rem;
	display: ${(props) => (props.isVisible ? 'flex' : 'none')};

	@media (min-width: 767px) {
		position: relative;
		background-color: transparent;
		flex-direction: row;
		opacity: 1;
		top: 0;
		display: flex;
	}
`;

const StyledSpan = styled.span`
	z-index: 100;
	position: relative;
`;

const StyledFlexbox = styled.div``;
const StartPage = () => {
	const history = useHistory();
	const [isVisible, setIsVisible] = useState(false);

	return (
		<>
			<Nav>
				<StyledHomeLink>
					<HomeLogo height='22px' width='22px' />
				</StyledHomeLink>
				<StyledLogoLink onClick={() => setIsVisible(!isVisible)}>
					<HamburgerLogo height='32px' width='32px' fill='white' />
				</StyledLogoLink>
				<StyledNavContainer isVisible={isVisible}>
					<StyledLink to='/whiteboard'>
						<StyledNavText>Whiteboard</StyledNavText>
					</StyledLink>
					<StyledLink to='/stickies'>
						<StyledNavText>Stickies</StyledNavText>
					</StyledLink>
					<StyledLink to='/happythoughts'>
						<StyledNavText>Share your thoughts</StyledNavText>
					</StyledLink>

					<StyledLink to='/developer-sounds'>
						<StyledNavText>The sounds of...</StyledNavText>
					</StyledLink>
				</StyledNavContainer>
			</Nav>

			<StyledFlexbox>
				<StyledContainerColored>
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

					<StyledImage src={whiteboardman} />
				</StyledContainerColored>

				<StyledContainer>
					<StyledTextWrapper>
						<StyledHeadline>Stickies</StyledHeadline>

						<StyledText>
							This is a virtual whiteboard filled with stickies
							<br />
							that helps you and your team collaborate <br />
							to bring the best ideas to light.
						</StyledText>
						<StyledAnchor onClick={() => history.push('/stickies')}>
							<StyledSpan>EXPLORE NOW</StyledSpan>
						</StyledAnchor>
					</StyledTextWrapper>

					<StyledImageLeft src={robot} />
				</StyledContainer>
				<StyledContainerColored>
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

					<StyledImage alt='happy' src={thinkingman} />
				</StyledContainerColored>
				<StyledContainer>
					<StyledTextWrapper>
						<StyledHeadline>The sounds of developers</StyledHeadline>

						<StyledText>
							Hear the sounds that developers <br />
							make while working
						</StyledText>
						<StyledAnchor onClick={() => history.push('/developer-sounds')}>
							<StyledSpan>EXPLORE NOW</StyledSpan>
						</StyledAnchor>
					</StyledTextWrapper>

					<StyledImageLeft src={music} />
				</StyledContainer>
				<StyledContainerColored>
					<StyledTextWrapper>
						<StyledHeadline>Quote generator</StyledHeadline>

						<StyledText>
							Generate a quote <br />
							that will inspire you <br />
							and your team.
						</StyledText>
						<StyledAnchor onClick={() => history.push('/quote-generator')}>
							<StyledSpan>EXPLORE NOW</StyledSpan>
						</StyledAnchor>
					</StyledTextWrapper>

					<StyledImage src={academic} />
				</StyledContainerColored>
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
