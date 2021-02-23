import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {graphql} from 'react-apollo';
import {flowRight as compose} from 'lodash';
import {ReactComponent as Pluslogo} from '../assets/add-circle-outline.svg';
import bookLady from '../assets/ladyOrange.png';
import redLady from '../assets/ladyInRed.png';

import {
	getThoughtQuery,
	addThoughtMutation,
	updateHeartMutation,
	deleteThoughtMutation,
} from '../queries/query';

import styled from 'styled-components';
import ThoughtCard from '../components/ThoughtCard';

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

const StyledSpan = styled.span`
	z-index: 100;
	position: relative;
`;

const StyledContainer = styled.div`
	background-color: #333;
	color: #fff;
	display: flex;
	font-family: 'News Cycle', sans-serif;
	max-width: 100vw;
	min-height: 100vh;
	overflow: hidden;
	flex-direction: column;
	@media (min-width: 767px) {
		flex-direction: row;
	}
	@media (min-width: 1200px) {
	}
	@media (min-width: 1800px) {
	}
`;

const StyledHeader = styled.div`
	padding: 3rem 0;
	text-align: center;
	text-align: -webkit-center;
`;

const StyledTitle = styled.h3`
	display: inline-block;
	text-transform: uppercase;
	letter-spacing: 2px;
	text-align: center;
	font-size: 1.5rem;
	font-family: 'News Cycle', sans-serif;

	@media (min-width: 767px) {
	}
	@media (min-width: 1200px) {
		font-size: 2rem;
	}
	@media (min-width: 1800px) {
		font-size: 2.5rem;
	}
`;

const StyledFlexboxLeft = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	overflow: hidden;
	@media (min-width: 767px) {
		width: 70%;
		border-right: 1px grey solid;
	}
	@media (min-width: 1200px) {
	}
	@media (min-width: 1800px) {
	}
`;
const StyledFlexboxRight = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	width: 100%;
	overflow: hidden;
	@media (min-width: 767px) {
		width: 30%;
	}
	@media (min-width: 1200px) {
	}
	@media (min-width: 1800px) {
	}
`;

const StyledParagraph = styled.p`
	display: inline-block;
	margin: 1rem 0 2rem 0;
	font-size: 1rem;
	text-align: center;
	@media (min-width: 767px) {
	}
	@media (min-width: 1200px) {
		font-size: 1.2rem;
	}
	@media (min-width: 1800px) {
		font-size: 1.5rem;
	}
`;

const StyledInput = styled.input`
	width: 65%;
	font-family: 'News Cycle', sans-serif;
	background-color: #f6f6f6;
	outline-color: #e86462;
	border: none;
	font-size: 1rem;

	@media (min-width: 1200px) {
		padding: 1rem 0.5rem;
		font-size: 1.3rem;
	}
	@media (min-width: 1800px) {
	}
`;

const StyledButton = styled.button`
	background-color: #e86462;
	align-self: center;
	border: none;
	width: 3rem;
	height: 100%;
	cursor: pointer;
`;

const StyledImage = styled.img`
	width: 10rem;
`;

const StyledTitleThoughtsContainer = styled.div``;

const StyledInputContainer = styled.div`
	text-align: center;
	width: 100%;
	display: flex;
	justify-content: center;
`;

const HappyThoughts = (props) => {
	const [text, setText] = useState('');
	const data = props.getThoughtQuery;
	const history = useHistory();

	const displayThoughts = () => {
		if (data.loading === true) {
			return <div>Loading thoughts...</div>;
		} else {
			return data?.thoughts
				?.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
				.map((thought) => {
					return (
						<ThoughtCard
							id={thought.id}
							message={thought.message}
							updateHeart={(e) => updateHeart(e, thought.hearts, thought.id)}
							hearts={thought.hearts}
							createdAt={thought.createdAt}
							deleteOneThought={(e) => deleteOneThought(e, thought.id)}
						/>
					);
				});
		}
	};


	const addNewThought = (e) => {
		e.preventDefault();
		text !== '' &&
			props.addThoughtMutation({
				variables: {
					message: text,
				},
				refetchQueries: [{query: getThoughtQuery}],
			});
		setText('');
	};

	const updateHeart = (e, heart, id) => {
		e.preventDefault();
		props.updateHeartMutation({
			variables: {
				id,
				hearts: heart,
			},
			refetchQueries: [{query: getThoughtQuery}],
		});
	};
	const deleteOneThought = (e, id) => {
		e.preventDefault();
		props.deleteThoughtMutation({
			variables: {
				id,
			},
			refetchQueries: [{query: getThoughtQuery}],
		});
	};

	return (
		<StyledContainer>
			<StyledFlexboxLeft>
				{/* <StyledTitleThoughtsContainer> */}
				<StyledTitle>Share your thoughts 💭💭💭</StyledTitle>
				<StyledParagraph>
					This is a virtual board for sharing your thoughts and quotes with your
					team.
				</StyledParagraph>
				<StyledInputContainer>
					<StyledInput
						value={text}
						onChange={(e) => setText(e.target.value)}></StyledInput>
					<StyledButton onClick={addNewThought}>
						<Pluslogo height='32px' width='32px'></Pluslogo>
					</StyledButton>
				</StyledInputContainer>
				{/* </StyledTitleThoughtsContainer> */}
				<StyledHeader>{displayThoughts()}</StyledHeader>
			</StyledFlexboxLeft>
			<StyledFlexboxRight>
				<StyledTitle>Generate a quote</StyledTitle>
				<StyledParagraph>...and get inspired by it!</StyledParagraph>
				<StyledImage src={redLady}></StyledImage>
				<StyledAnchor onClick={() => history.push('/quote-generator')}>
					<StyledSpan>GO TO QUOTES</StyledSpan>
				</StyledAnchor>
			</StyledFlexboxRight>
		</StyledContainer>
	);
};

export default compose(
	graphql(getThoughtQuery, {name: 'getThoughtQuery'}),
	graphql(addThoughtMutation, {name: 'addThoughtMutation'}),
	graphql(updateHeartMutation, {name: 'updateHeartMutation'}),
	graphql(deleteThoughtMutation, {name: 'deleteThoughtMutation'})
)(HappyThoughts);
