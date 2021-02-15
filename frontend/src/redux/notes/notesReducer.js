import { NotesActionTypes } from '../notes/notesTypes';
import { addAnswerToArray } from './notesUtils';

const INITIAL_STATE = {
	notes: [],
};

export const notesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case NotesActionTypes.ADD_NOTES:
			return {
				...state,
				notes: action.payload,
			};

		default:
			return state;
	}
};
