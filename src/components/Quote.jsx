import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
	margin: auto;
	width: 60%;
	padding: auto;
	padding: 4rem;
	margin-top: 15rem;
`;

const StyledButton = styled.button`
	background-color: black;
	color: #fff;
	border: none;
	border-radius: 3px;
	padding: 0 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	text-decoration: none;
	cursor: pointer;
`;

const StyledAuthor = styled.h3`
	color: black;
	font-weight: lighter;
	font-size: 1.4rem;
	text-align: right;
`;

const StyledQuote = styled.h1`
	color: black;
	margin-bottom: 40px;
	font-family: 'Playfair Display', serif;
	font-weight: 500;
	font-size: 2.6rem;
	line-height: 1.4;
`;
const StyledBackgroundImage = styled.html`
	background-image: url('https://images.unsplash.com/photo-1612993229521-dab666b46b2b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80');
`;

const Quote = (props) => {
	const { value } = props;

	return (
		<>
			<StyledBackgroundImage>
				<StyledWrapper>
					<StyledQuote>{value.quote}</StyledQuote>
					<StyledAuthor>-{value.author}</StyledAuthor>
					<div>
						<a
							href={` ${props.value.author}`}
							target="_blank"
							rel="noopener noreferrer"
						></a>
						<StyledButton onClick={props.onQuoteChange}>New Quote</StyledButton>
					</div>
				</StyledWrapper>
			</StyledBackgroundImage>
		</>
	);
};

export default Quote;
