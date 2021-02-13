import { Component } from 'react';
import React, { useState } from 'react';

const Inputmessage = ({ onSendMessage }) => {
	const [text, setText] = useState('');

	const onChange = (e) => {
		setText(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setText('');
		onSendMessage(text);
	};

	return (
		<div className='Input'>
			<form onSubmit={(e) => onSubmit(e)}>
				<input
					onChange={(e) => onChange(e)}
					value={text}
					type='text'
					placeholder=' Message and ENTER'
					autofocus='true'
				/>
				<button>Send</button>
			</form>
		</div>
	);
};

export default Inputmessage;
