import React, { useState, useEffect } from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import {
	getThoughtQuery,
	addThoughtMutation,
	updateHeartMutation,
} from '../queries/query';

import styled from 'styled-components';

const StyledContainer = styled.div`
	font-family: 'Oswald', sans-serif;
	background-color: #fff;
`;

const StyledHeader = styled.div`
	padding: 3rem 0;
`;

const StyledContentCardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-bottom: 2rem;
`;

const StyledTitle = styled.h1`
	text-transform: uppercase;
	text-align: center;
	font-size: 2rem;
	color: #020816;
	@media (min-width: 450px) {
	}
	@media (min-width: 767px) {
		font-size: 2.5rem;
	}
	@media (min-width: 1200px) {
		font-size: 3.5rem;
	}
	@media (min-width: 1800px) {
		font-size: 4.5rem;
	}
`;

const StyledParagraph = styled.p`
	text-align: center;
	font-size: 1.2rem;
	margin: 1rem 1rem 0 1rem;
	color: #020816;
	@media (min-width: 450px) {
		font-size: 1.5rem;
	}
	@media (min-width: 767px) {
		font-size: 2rem;
	}
	@media (min-width: 1200px) {
	}
	@media (min-width: 1800px) {
	}
`;

const HappyThoughts = (props) => {
	const [text, setText] = useState('');
	// const [hearts, setHearts] = useState();
	const displayThoughts = () => {
		const data = props.getThoughtQuery;
		if (data.loading) {
			return <div>Loading thoughts...</div>;
		} else {
			return data.thoughts.map((thought) => {
				return (
					<div key={thought.id}>
						<p>{thought.message}</p>
						<button onClick={(e) => updateHeart(e, thought.hearts, thought.id)}>
							{thought.hearts}
						</button>
						<p>{thought.createdAt}</p>
					</div>
				);
			});
		}
	};

	console.log(text);

	const addNewThought = (e) => {
		e.preventDefault();
		props.addThoughtMutation({
			variables: {
				message: text,
			},
			refetchQueries: [{ query: getThoughtQuery }],
		});
	};

	const updateHeart = (e, heart, id) => {
		e.preventDefault();
		props.updateHeartMutation({
			variables: {
				id,
				hearts: heart,
			},
			refetchQueries: [{ query: getThoughtQuery }],
		});
	};

	return (
		<StyledContainer>
			<input value={text} onChange={(e) => setText(e.target.value)}></input>
			<button onClick={addNewThought}>Add your thought</button>
			<StyledHeader>{displayThoughts()}</StyledHeader>
		</StyledContainer>
	);
};

export default compose(
	graphql(getThoughtQuery, { name: 'getThoughtQuery' }),
	graphql(addThoughtMutation, { name: 'addThoughtMutation' }),
	graphql(updateHeartMutation, { name: 'updateHeartMutation' })
)(HappyThoughts);
