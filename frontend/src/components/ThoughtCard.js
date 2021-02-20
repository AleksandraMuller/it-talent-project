import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {ReactComponent as HeartLogo} from '../assets/heart-outline.svg';
import {ReactComponent as TrashLogo} from '../assets/trash-outline.svg';

const StyledCardContainer = styled.div`
	background-color: #4c4c4c;
	margin-bottom: 1rem;
	padding: 1rem 1rem 1rem 0;
	width: 100%;
	@media (min-width: 767px) {
	}
	@media (min-width: 1200px) {
		width: 70%;
	}
	@media (min-width: 1800px) {
	}
`;

const StyledButton = styled.button`
	display: flex;
	padding: 5px 10px;
	font-size: 16px;
	color: white;
	border: none;
	border-radius: 8px;
	margin-left: 10px;
	background-color: #e86462;
	cursor: pointer;
`;
const StyledHeartDateWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
const StyledDate = styled.p`
	align-self: flex-end;
`;
const StyledMessage = styled.p`
	padding: 1rem;
	word-break: break-all;
`;
const StyledTrashLogo = styled.a`
	background-color: transparent;
	color: white;
	cursor: pointer;
`;
const StyledLogoAndMessage = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
`;
const ThoughtCard = ({
	id,
	message,
	updateHeart,
	hearts,
	createdAt,
	deleteOneThought,
}) => {
	console.log(typeof createdAt);
	return (
		<StyledCardContainer key={id}>
			<StyledLogoAndMessage>
				<StyledTrashLogo onClick={deleteOneThought}>
					<TrashLogo height='32px' width='32px' />
				</StyledTrashLogo>
				<StyledMessage>{message}</StyledMessage>
			</StyledLogoAndMessage>

			<StyledHeartDateWrapper>
				<StyledButton onClick={updateHeart}>
					<HeartLogo height='22px' width='22px' />
					{hearts}
				</StyledButton>
				<StyledDate>{moment(parseInt(createdAt)).fromNow()}</StyledDate>
			</StyledHeartDateWrapper>
		</StyledCardContainer>
	);
};

export default ThoughtCard;
