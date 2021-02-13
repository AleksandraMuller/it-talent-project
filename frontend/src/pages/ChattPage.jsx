import '../Chat.css';
import Messages from '../components/Messages';
import React, { Component, useState } from 'react';
import Inputmessage from '../components/Inputmessage';

function randomName() {
	const adjectives = [
		'happy',
		'dizzy',
		'drunk',
		'skillful',
		'silent',
		'loud',
		'charming',
		'horrible',
		'sweet',
		'angry',
		'sad',
		'excited',
		'strange',
		'cool',
		'awful',
		'nice',
		'patient',
		'amazing',
		'broken',
		'old',
		'young',
		'shy',
		'wild',
		'moody',
		'grumpy',
		'sleepy',
		'nameless',
	];
	const nouns = [
		'Developer',
		'Tester',
		'Manager',
		'Mother',
		'Father',
		'Daughter',
		'Son',
		'IT-talent',
		'Project Owner',
		'Human',
		'Dragon',
		'Actor',
		'Singer',
		'Dancer',
	];

	const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
	const noun = nouns[Math.floor(Math.random() * nouns.length)];
	return adjective + noun;
}

function randomColor() {
	return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}

class ChattPage extends Component {
	state = {
		messages: [],
		member: {
			username: randomName(),
			color: randomColor(),
		},
	};

	constructor() {
		super();
		this.drone = new window.Scaledrone('aIqby01BATa1PH1e', {
			data: this.state.member,
		});
		this.drone.on('open', (error) => {
			if (error) {
				return console.error(error);
			}
			const member = { ...this.state.member };
			member.id = this.drone.clientId;
			this.setState({ member });
		});
		const room = this.drone.subscribe('observable-room');
		room.on('data', (data, member) => {
			const messages = this.state.messages;
			messages.push({ member, text: data });
			this.setState({ messages });
		});
	}

	render() {
		return (
			<div className='ChattPage'>
				<div className='Chat-header'>
					<h1>Welocme to the T Chat...</h1>
				</div>
				<Messages
					messages={this.state.messages}
					currentMember={this.state.member}
				/>
				<Inputmessage onSendMessage={this.onSendMessage} />
			</div>
		);
	}

	onSendMessage = (message) => {
		this.drone.publish({
			room: 'observable-room',
			message,
		});
	};
}
export default ChattPage;
