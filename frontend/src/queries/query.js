import { gql } from 'apollo-boost';

export const getThoughtQuery = gql`
	{
		thoughts {
			id
			message
			hearts
			createdAt
		}
	}
`;

export const addThoughtMutation = gql`
	mutation($message: String!) {
		addThought(message: $message) {
			id
			message
			hearts
			createdAt
		}
	}
`;

export const updateHeartMutation = gql`
	mutation($id: ID, $hearts: Int!) {
		updateHeart(id: $id, hearts: $hearts) {
			id
			message
			hearts
			createdAt
		}
	}
`;
