import styled from 'styled-components';
import { ReactComponent as SquareLogo } from '../assets/square-outline.svg';
import { ReactComponent as CircleLogo } from '../assets/ellipse-outline.svg';
import { ReactComponent as ArrowLogo } from '../assets/arrow-forward-outline.svg';
import { ReactComponent as StarLogo } from '../assets/star-outline.svg';
import { ReactComponent as PenLogo } from '../assets/pencil-outline.svg';
import { ReactComponent as TrashLogo } from '../assets/trash-outline.svg';
import { ReactComponent as TextLogo } from '../assets/text-outline.svg';
import { ReactComponent as ScreenShotLogo } from '../assets/camera-outline.svg';
import { ReactComponent as SaveLogo } from '../assets/save-outline.svg';
import { ReactComponent as BrushLogo } from '../assets/brush-outline.svg';

export const ButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: 100;
	top: 1rem;
	right: 1rem;
	background-color: #fff;
`;

export const Button = styled.button`
	width: 4rem;
	/* align-self: flex-end; */
	background-color: #fff;
	border: none;
	padding: 0.5rem 0;
	cursor: pointer;
	outline: none;
	margin: 0 auto;
	&:hover {
		background-color: #f9ffbe;
	}
`;

export const StyledInput = styled.input`
	/* align-self: flex-end;
	width: 4rem;
	background-color: #fff;
	border: 0 none; */
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;

export const StyledGrid = styled.div`
	background: #f7f7f7;
	overflow: hidden;
	min-height: 100vh;
	/* background-image: radial-gradient(black 1px, transparent 0);
	background-size: 40px 40px;
	background-position: -19px -19px; */
	background-size: 80px 80px;
	background-image: linear-gradient(to right, #eee 1px, transparent 1px),
		linear-gradient(to bottom, #eee 1px, transparent 1px);
`;

export const StyledTitle = styled.div`
	position: absolute;
	top: 1rem;
	left: 1rem;
	background-color: #fff;
	opacity: 0.3;
	color: #000;
	box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
	width: 10rem;
	padding: 0.5rem;
`;

export const StyledText = styled.p``;

export const StyledLabel = styled.label`
	cursor: pointer;
	padding: 0.5rem 0;
	text-align: center;
	&:hover {
		background-color: #f9ffbe;
	}
`;

export const StyledSquareLogo = styled(SquareLogo)`
	${Button}:focus & {
		animation: wiggle 125ms infinite;
		animation-timing-function: linear;
	}
	@keyframes wiggle {
		0% {
			transform: translate(2px, 0);
		}
		50% {
			transform: translate(-2px, 0);
		}
		100% {
			transform: translate(2px, 0);
		}
	}
`;

export const StyledBrushLogo = styled(BrushLogo)`
	${Button} {
		position: 'absolute';
		top: '2rem';
		right: '20rem';
	}

	${Button}:focus & {
		animation: wiggle 125ms infinite;
		animation-timing-function: linear;
	}
	@keyframes wiggle {
		0% {
			transform: translate(2px, 0);
		}
		50% {
			transform: translate(-2px, 0);
		}
		100% {
			transform: translate(2px, 0);
		}
	}
`;

export const StyledCircleLogo = styled(CircleLogo)`
	${Button}:focus & {
		animation: wiggle 125ms infinite;
		animation-timing-function: linear;
	}
	@keyframes wiggle {
		0% {
			transform: translate(2px, 0);
		}
		50% {
			transform: translate(-2px, 0);
		}
		100% {
			transform: translate(2px, 0);
		}
	}
`;

export const StyledArrowLogo = styled(ArrowLogo)`
	${Button}:focus & {
		animation: wiggle 125ms infinite;
		animation-timing-function: linear;
	}
	@keyframes wiggle {
		0% {
			transform: translate(2px, 0);
		}
		50% {
			transform: translate(-2px, 0);
		}
		100% {
			transform: translate(2px, 0);
		}
	}
`;

export const StyledStarLogo = styled(StarLogo)`
	${Button}:focus & {
		animation: wiggle 125ms infinite;
		animation-timing-function: linear;
	}
	@keyframes wiggle {
		0% {
			transform: translate(2px, 0);
		}
		50% {
			transform: translate(-2px, 0);
		}
		100% {
			transform: translate(2px, 0);
		}
	}
`;

export const StyledPenLogo = styled(PenLogo)`
	${Button}:focus & {
		animation: wiggle 125ms infinite;
		animation-timing-function: linear;
	}
	@keyframes wiggle {
		0% {
			transform: translate(2px, 0);
		}
		50% {
			transform: translate(-2px, 0);
		}
		100% {
			transform: translate(2px, 0);
		}
	}
`;

export const StyledTrashLogo = styled(TrashLogo)`
	${Button}:focus & {
		animation: wiggle 125ms infinite;
		animation-timing-function: linear;
	}
	@keyframes wiggle {
		0% {
			transform: translate(2px, 0);
		}
		50% {
			transform: translate(-2px, 0);
		}
		100% {
			transform: translate(2px, 0);
		}
	}
`;

export const StyledTextLogo = styled(TextLogo)`
	${Button}:focus & {
		animation: wiggle 125ms infinite;
		animation-timing-function: linear;
	}
	@keyframes wiggle {
		0% {
			transform: translate(2px, 0);
		}
		50% {
			transform: translate(-2px, 0);
		}
		100% {
			transform: translate(2px, 0);
		}
	}
`;

export const StyledScreenShotLogo = styled(ScreenShotLogo)`
	${Button}:focus & {
		animation: wiggle 125ms infinite;
		animation-timing-function: linear;
	}
	@keyframes wiggle {
		0% {
			transform: translate(2px, 0);
		}
		50% {
			transform: translate(-2px, 0);
		}
		100% {
			transform: translate(2px, 0);
		}
	}
`;

export const StyledSaveLogo = styled(SaveLogo)`
	${Button}:focus & {
		animation: wiggle 125ms infinite;
		animation-timing-function: linear;
	}
	@keyframes wiggle {
		0% {
			transform: translate(2px, 0);
		}
		50% {
			transform: translate(-2px, 0);
		}
		100% {
			transform: translate(2px, 0);
		}
	}
`;

export const PickerContainer = styled.div``;
