import { NotesActionTypes } from '../notes/notesTypes';

export const addNote = (note) => ({
	type: NotesActionTypes.ADD_NOTES,
	payload: note,
});
