import React, { useState } from 'react';
import ReactStickies from 'react-stickies'; //ES6

const Stickies = () => {
	const [notes, setNotes] = useState([]);

	const onSave = () => {
		// Make sure to delete the editorState before saving to backend
		notes.map((note) => {
			delete note.editorState;
		});
		// Make service call to save notes
		// Code goes here...
	};
	const onChange = (notes) => {
		setNotes(notes);
	};
	return <ReactStickies notes={notes} onChange={onChange} />;
};

export default Stickies;
