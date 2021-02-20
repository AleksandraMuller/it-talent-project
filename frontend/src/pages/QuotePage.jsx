import React, {useState, useEffect} from 'react';
import Quote from '../components/Quote';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import owl from '../assets/owl.png';
import decorations from '../assets/decorations.png';
import lamp from '../assets/lamp.png';

const api_url =
	'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const StyledAnchor = styled.a`
	font-family: 'News Cycle', sans-serif;
	border: none;
	text-align: center;
	cursor: pointer;
	text-transform: uppercase;
	outline: none;
	color: #fff;
	font-weight: 700;
	letter-spacing: 4px;

	background-color: #222;
	padding: 0.5rem 1rem;
	position: absolute;
	top: 1rem;
	left: 1rem;
	z-index: 100;
	font-size: 0.7rem;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	&:hover {
		background-color: #e86462;
	}
	@media (min-width: 1200px) {
		font-size: 1.2rem;
		padding: 0.5rem 2rem;
	}
`;

const StyledSpan = styled.span``;

const StyledApp = styled.div`
	font-family: 'News Cycle', sans-serif;
	background-color: #eee;
	width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledImage = styled.img`
	position: absolute;
	top: 1rem;
	right: 1rem;
	width: 5rem;
	@media (min-width: 767px) {
		width: 10rem;
	}
`;

const StyledImageBottom = styled.img`
	width: 5rem;
	@media (min-width: 767px) {
		width: 10rem;
	}
`;
const StyledBottomContainer = styled.div`
	position: absolute;
	bottom: 1rem;
	display: flex;
	justify-content: space-between;
	width: 100%;
`;
const StyledImageBottomLeft = styled.img`
	width: 5rem;
	@media (min-width: 767px) {
		width: 10rem;
	}
`;
const QuotePage = (props) => {
	const history = useHistory();
	const [quotesList, setQuotesList] = useState([]);
	const [quote, setQuote] = useState({});
	const [error, setError] = useState({status: false, message: ''});

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
		setError({status: false, message: ''});
		if (quotesList.length === 0) {
			fetch(api_url)
				.then((res) => res.json())
				.then((res) => setQuotesList(res.quotes));
		} else {
			setRandomQuote(quotesList);
		}
	}, [quotesList]);

	console.log(quotesList);

	return (
		<>
			<StyledAnchor onClick={() => history.push('/')}>
				<StyledSpan>Home</StyledSpan>
			</StyledAnchor>
			<StyledImage src={owl}></StyledImage>
			<StyledBottomContainer>
				<StyledImageBottomLeft src={lamp}></StyledImageBottomLeft>
				<StyledImageBottom src={decorations}></StyledImageBottom>
			</StyledBottomContainer>

			<StyledApp>
				{/* <StyledContainer> */}

				{/* </StyledContainer> */}

				{error.status ? (
					<h1>{error.message}</h1>
				) : (
					<Quote
						value={quote}
						onQuoteChange={() => setRandomQuote(quotesList)}
					/>
				)}
			</StyledApp>
		</>
	);
};

export default QuotePage;
