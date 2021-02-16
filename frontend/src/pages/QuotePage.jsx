import React, { useState, useEffect } from 'react';
import Quote from '../components/Quote';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const api_url =
	'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const StyledAnchor = styled.a`
	border: none;
	text-align: center;
	cursor: pointer;
	text-transform: uppercase;
	outline: none;
	overflow: hidden;
	position: relative;
	color: #fff;
	font-weight: 700;
	font-size: 15px;
	background-color: #222;
	padding: 17px 60px;
	margin: 0 auto;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	letter-spacing: 4px;
	margin-top: 2.5rem;
	:after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		height: 490%;
		width: 140%;

		-webkit-transition: all 0.5s ease-in-out;
		transition: all 0.5s ease-in-out;
		-webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
		transform: translateX(-98%) translateY(-25%) rotate(45deg);
	}
	:hover:after {
		-webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
		transform: translateX(-9%) translateY(-25%) rotate(45deg);
	}
`;

const StyledSpan = styled.span`
	z-index: 100;
	position: relative;
`;
const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 0rem 1rem 0 1rem;
	position: relative;
	right: 42rem;
	@media (min-width: 450px) {
	}
	@media (min-width: 767px) {
		flex-direction: row;
	}
	@media (min-width: 1200px) {
	}
	@media (min-width: 1800px) {
	}
`;
const StyledApp = styled.div`
	font-family: sans-serif;
	background-image: url('https://images.unsplash.com/photo-1613316122132-81de453d8610?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80');
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const QuotePage = (props) => {
	const history = useHistory();
	const [quotesList, setQuotesList] = useState([]);
	const [quote, setQuote] = useState({});
	const [error, setError] = useState({ status: false, message: '' });

	const generateRandomNumber = (max) => {
		return Math.floor(Math.random() * max);
	};

	const setRandomQuote = (list) => {
		let randomIndex = generateRandomNumber(list.length);
		while (list[randomIndex].quote === quote.quote) {
			randomIndex = generateRandomNumber(list.length);
		}
		setQuote(quotesList[randomIndex]);
	};

	useEffect(() => {
		setError({ status: false, message: '' });
		if (quotesList.length === 0) {
			fetch(api_url)
				.then((res) => res.json())
				.then((res) => setQuotesList(res.quotes));
		} else {
			setRandomQuote(quotesList);
		}
	}, [quotesList]);

	return (
		<StyledApp>
			<StyledContainer>
				<StyledAnchor onClick={() => history.push('/')}>
					<StyledSpan>HOME</StyledSpan>
				</StyledAnchor>
			</StyledContainer>

			{error.status ? (
				<h1>{error.message}</h1>
			) : (
				<Quote value={quote} onQuoteChange={() => setRandomQuote(quotesList)} />
			)}
		</StyledApp>
	);
};

export default QuotePage;
