import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
	margin: auto;
	width: 60%;
	padding: auto;
	padding: 4rem;
	margin-top: 15rem;
	background-color: white;
	border: 5px solid orange;
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

const Quote = (props) => {
	const { value } = props;

	return (
		<>
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
		</>
	);
};

export default Quote;
