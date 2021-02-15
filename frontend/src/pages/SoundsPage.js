import React from 'react';
import useSound from 'use-sound';
import trial from '../assets/trial.m4a';
import styled from 'styled-components';
import developer from '../assets/developer.png';
import { ReactComponent as PlayLogo } from '../assets/play-circle-outline.svg';
import { ButtonGroup } from '../styles/Whiteboard.styles';

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
	width: 20rem;
	@media (min-width: 767px) {
		width: 40rem;
	}
	@media (min-width: 1200px) {
		width: 50rem;
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
		left: 50%;
	}
`;
const SpanEnd = styled.span`
	@media (min-width: 767px) {
		font-size: 5rem;
		position: absolute;
		left: 52%;
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
	const [play] = useSound(trial);
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
			<Image src={developer}></Image>
			<ButtonWrapper>
				<ButtonWrapperLeft>
					<ButtonLeft onClick={play}>
						<Text>When the code compiled</Text>
						<PlayLogo height='40px' width='40px' />
					</ButtonLeft>
					<ButtonLeft onClick={play}>
						<Text>When the code is not compiling</Text>
						<PlayLogo height='40px' width='40px' />
					</ButtonLeft>
					<ButtonLeft onClick={play}>
						<Text>The coffee effect</Text>
						<PlayLogo height='40px' width='40px' />
					</ButtonLeft>
					<ButtonLeft onClick={play}>
						<Text>When working from home</Text>
						<PlayLogo height='40px' width='40px' />
					</ButtonLeft>
				</ButtonWrapperLeft>
				<ButtonWrapperRight>
					<ButtonRight onClick={play}>
						<Text>The keyboard sounds</Text>
						<PlayLogo height='40px' width='40px' />
					</ButtonRight>
					<ButtonRight onClick={play}>
						<Text>When code suddenly breaks</Text>
						<PlayLogo height='40px' width='40px' />
					</ButtonRight>
					<ButtonRight onClick={play}>
						<Text>When screen sharing</Text>
						<PlayLogo height='40px' width='40px' />
					</ButtonRight>
				</ButtonWrapperRight>
			</ButtonWrapper>
		</Container>
	);
};

export default SoundsPage;
