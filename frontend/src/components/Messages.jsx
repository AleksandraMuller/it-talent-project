import { Component } from 'react';
import React from 'react';

const Messages = (props) => {
	const { messages } = props;
	return (
		<ul className='Messages-list'>
			{messages.map((m) => renderMessage(m, props))}
		</ul>
	);
};
const renderMessage = (message, props) => {
	const { member, text } = message;
	const { currentMember } = props;
	const messageFromMe = member.id === currentMember.id;
	const className = messageFromMe
		? 'Messages-message currentMember'
		: 'Messages-message';
	return (
		<li className={className}>
			<span
				className='avatar'
				style={{ backgroundColor: member.clientData.color }}
			/>
			<div className='Message-content'>
				<div className='username'>{member.clientData.username}</div>
				<div className='text'>{text}</div>
			</div>
		</li>
	);
};

export default Messages;
