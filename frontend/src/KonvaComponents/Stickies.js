import React, { useEffect, useState } from 'react';
import ReactStickies from 'react-stickies'; //ES6
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addNote } from '../redux/notes/notesActions';
import { selectNotesArr } from '../redux/notes/notesSelector';

const Stickies = () => {
	const [notes, setNotes] = useState([]);
	const dispatch = useDispatch();

	const selectors = useSelector(
		createStructuredSelector({
			notes: selectNotesArr,
		})
	);

	const onSave = () => {
		// Make sure to delete the editorState before saving to backend
		selectors.notes.map((note) => {
			delete note.editorState;
		});
		// Make service call to save notes
		// Code goes here...
	};
	// const note = notes.map((note) => note);
	// console.log(note);
	const onChange = (notes) => {
		setNotes(notes);

		dispatch(addNote(notes));
	};
	return <ReactStickies notes={selectors.notes || []} onChange={onChange} />;
};

export default Stickies;
