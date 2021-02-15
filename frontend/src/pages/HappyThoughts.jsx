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

const HappyThoughts = (props) => {
	const [text, setText] = useState('');
	const data = props.getThoughtQuery;

	console.log(data);

	// const [hearts, setHearts] = useState();
	const displayThoughts = () => {
		if (data.loading === true) {
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
		text !== '' &&
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
