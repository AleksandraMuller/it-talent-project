import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
	width: 60%;
	background-color: transparent;
	font-family: 'News Cycle', sans-serif;

	/* border: 5px solid orange; */
`;

const StyledButton = styled.a`
	background-color: #222;
	color: #fff;
	border: none;
	padding: 0.5rem 15px;
	text-transform: uppercase;
	font-size: 0.7rem;
	text-decoration: none;
	font-weight: 700;
	letter-spacing: 4px;
	cursor: pointer;
	font-family: 'News Cycle', sans-serif;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

	&:hover {
		background-color: #e86462;
	}

	@media (min-width: 1200px) {
		font-size: 1.2rem;
	}
`;

const StyledAuthor = styled.h3`
	color: black;
	font-weight: lighter;
	font-size: 1rem;
	text-align: right;
	font-family: 'News Cycle', sans-serif;
	margin: 0.7rem 0 0.7rem 0;
	@media (min-width: 450px) {
	}
	@media (min-width: 767px) {
		font-size: 1.2rem;
		margin: 0.7rem 0;
	}
	@media (min-width: 1200px) {
		font-size: 2rem;
		margin: 1.5rem 0;
	}
	@media (min-width: 1800px) {
	}
`;

const StyledQuote = styled.h1`
	color: black;
	font-weight: 500;
	font-size: 1.3rem;
	line-height: 1.4;
	font-family: 'News Cycle', sans-serif;
	@media (min-width: 450px) {
	}
	@media (min-width: 767px) {
		font-size: 1.7rem;
	}
	@media (min-width: 1200px) {
		font-size: 2.6rem;
	}
	@media (min-width: 1800px) {
	}
`;

const Quote = (props) => {
	const {value} = props;

	return (
		<>
			<StyledWrapper>
				<StyledQuote>{value.quote}</StyledQuote>
				<StyledAuthor>-{value.author}</StyledAuthor>
				<StyledButton onClick={props.onQuoteChange}>New Quote</StyledButton>
			</StyledWrapper>
		</>
	);
};

export default Quote;
