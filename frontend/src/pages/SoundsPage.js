import React, {useState} from 'react';
import useSound from 'use-sound';
import trial from '../assets/trial.m4a';
import styled from 'styled-components';
import developer from '../assets/developer.png';
import {ReactComponent as PlayLogo} from '../assets/play-circle-outline.svg';
import {ReactComponent as PauseLogo} from '../assets/pause-circle-outline.svg';
import {ButtonGroup} from '../styles/Whiteboard.styles';
import computerguy from '../assets/computer-guy.png';
import typing from '../assets/typing.wav';
import compiledCode from '../assets/codecompiled.m4a';
import toilet from '../assets/toilet.m4a';
import notCompiled from '../assets/notcompiled.m4a';
import coffee from '../assets/coffee.m4a';
import codeBroke from '../assets/codebroke.m4a';
import screenShare from '../assets/screenshare.m4a';

const StyledTitle = styled.h3`
	span {
		font-family: 'Amatic SC', cursive;
	}
`;

const TitleWrapper = styled.div`
	text-align: center;
`;

const ButtonLeft = styled.button`
	background-color: transparent;

	cursor: pointer;
	margin-bottom: 2rem;
	border: none;
	outline: none;
	@media (min-width: 1200px) {
		&:nth-child(1) {
			margin-left: 10rem;
		}
		&:nth-child(4) {
			margin-left: 10rem;
		}
	}
`;

const ButtonRight = styled.button`
	background-color: transparent;
	cursor: pointer;
	margin-bottom: 2rem;
	border: none;
	outline: none;
	@media (min-width: 1200px) {
		&:nth-child(1) {
			margin-right: 10rem;
		}
		&:nth-child(3) {
			margin-right: 10rem;
		}
	}
`;

const ButtonWrapperLeft = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 1200px) {
		position: absolute;
		top: 6rem;
		left: 0.5rem;
	}
`;
const ButtonWrapperRight = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 1200px) {
		position: absolute;
		top: 14rem;
		right: 0.5rem;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const Container = styled.div`
	background-color: #f7f7f7;
	min-width: 100vw;
	min-height: 100vh;
	overflow: hidden;
`;

const Image = styled.img`
	display: block;
	margin: auto;
	padding-top: 1.5rem;
	padding-bottom: 1.5rem;

	width: 20rem;
	@media (min-width: 767px) {
		width: 38rem;
		margin-top: 4rem;
		padding: 0;
	}
	@media (min-width: 1200px) {
	}
`;

const SpanStart = styled.span``;

const Span = styled.span`
	@media (min-width: 767px) {
		font-size: 5rem;
	}
`;
const SpanMiddle = styled.span`
	@media (min-width: 767px) {
		position: absolute;
		left: 53%;
	}
`;
const SpanEnd = styled.span`
	@media (min-width: 767px) {
		font-size: 5rem;
		position: absolute;
		left: 55%;
	}
`;

const Text = styled.p`
	color: black;
	font-family: 'Amatic SC', cursive;
	font-size: 1.2rem;
	margin-bottom: 0.5rem;
	@media (min-width: 767px) {
		font-size: 1.5rem;
	}
`;

const SoundsPage = () => {
	const [song, setSong] = useState();
	const [play, {stop}] = useSound(song);

	const [playingCodeCompiled, setPlayingCodeCompiled] = useState(false);
	const [playingNotCompiled, setPlayingNotCompiled] = useState(false);
	const [playingCoffee, setPlayingCoffee] = useState(false);
	const [playingHome, setPlayingHome] = useState(false);
	const [playingKeyboard, setPlayingKeyboard] = useState(false);
	const [playingCodeBreaks, setPlayingCodeBreaks] = useState(false);
	const [playingScreenSharing, setPlayingScreenSharing] = useState(false);

	const playCodeCompiled = () => {
		playingCodeCompiled ? stop() : play();
		setPlayingCodeCompiled(!playingCodeCompiled);
	};

	const playCodeNotCompiled = () => {
		playingNotCompiled ? stop() : play();
		setPlayingNotCompiled(!playingNotCompiled);
	};

	const playCoffee = () => {
		setPlayingCoffee(!playingCoffee);
		playingCoffee ? stop() : play();
	};

	const playHome = () => {
		setPlayingHome(!playingHome);
		playingHome ? stop() : play();
	};

	const playKeyboard = () => {
		setPlayingKeyboard(!playingKeyboard);
		playingKeyboard ? stop() : play();
	};

	const playCodeBreaks = () => {
		setPlayingCodeBreaks(!playingCodeBreaks);
		playingCodeBreaks ? stop() : play();
	};

	const playScreenShot = () => {
		setPlayingScreenSharing(!playingScreenSharing);
		playingScreenSharing ? stop() : play();
	};

	return (
		<Container>
			<TitleWrapper>
				<StyledTitle>
					<SpanStart>The</SpanStart>
					<Span> sounds </Span>
					<br></br>
					<SpanMiddle>of </SpanMiddle>
					<SpanEnd>developers </SpanEnd>
				</StyledTitle>
			</TitleWrapper>
			<Image src={computerguy}></Image>
			<ButtonWrapper>
				<ButtonWrapperLeft>
					<ButtonLeft
						onClick={playCodeCompiled}
						onMouseDown={() => setSong(compiledCode)}>
						<Text>When the code compiled</Text>
						{playingCodeCompiled ? (
							<PauseLogo height='40px' width='40px' />
						) : (
							<PlayLogo height='40px' width='40px' />
						)}
					</ButtonLeft>
					<ButtonLeft
						onClick={playCodeNotCompiled}
						onMouseDown={() => setSong(notCompiled)}>
						<Text>When the code is not compiling</Text>
						{playingNotCompiled ? (
							<PauseLogo height='40px' width='40px' />
						) : (
							<PlayLogo height='40px' width='40px' />
						)}
					</ButtonLeft>
					<ButtonLeft onClick={playCoffee} onMouseDown={() => setSong(coffee)}>
						<Text>The coffee effect</Text>
						{playingCoffee ? (
							<PauseLogo height='40px' width='40px' />
						) : (
							<PlayLogo height='40px' width='40px' />
						)}
					</ButtonLeft>
					<ButtonLeft onClick={playHome} onMouseDown={() => setSong(toilet)}>
						<Text>When working from home</Text>
						{playingHome ? (
							<PauseLogo height='40px' width='40px' />
						) : (
							<PlayLogo height='40px' width='40px' />
						)}
					</ButtonLeft>
				</ButtonWrapperLeft>
				<ButtonWrapperRight>
					<ButtonRight
						onClick={playKeyboard}
						onMouseDown={() => setSong(typing)}>
						<Text>The keyboard sounds</Text>
						{playingKeyboard ? (
							<PauseLogo height='40px' width='40px' />
						) : (
							<PlayLogo height='40px' width='40px' />
						)}
					</ButtonRight>
					<ButtonRight
						onClick={playCodeBreaks}
						onMouseDown={() => setSong(codeBroke)}>
						<Text>When code suddenly breaks</Text>
						{playingCodeBreaks ? (
							<PauseLogo height='40px' width='40px' />
						) : (
							<PlayLogo height='40px' width='40px' />
						)}
					</ButtonRight>
					<ButtonRight
						onClick={playScreenShot}
						onMouseDown={() => setSong(screenShare)}>
						<Text>When screen sharing</Text>
						{playingScreenSharing ? (
							<PauseLogo height='40px' width='40px' />
						) : (
							<PlayLogo height='40px' width='40px' />
						)}
					</ButtonRight>
				</ButtonWrapperRight>
			</ButtonWrapper>
		</Container>
	);
};

export default SoundsPage;
