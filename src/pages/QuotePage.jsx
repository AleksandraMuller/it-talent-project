import React, { useState, useEffect } from 'react';
import Quote from '../components/Quote';

const api_url =
	'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const QuotePage = (props) => {
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

	// reach to the api to grab a list of quotes from the server
	useEffect(() => {
		// reset error state before reaching out
		setError({ status: false, message: '' });
		// check if quotes has been already fetched
		if (quotesList.length === 0) {
			fetch(api_url)
				.then((res) => res.json())
				.then((res) => setQuotesList(res.quotes));
		} else {
			setRandomQuote(quotesList);
		}
	}, [quotesList]);

	return (
		<div>
			{error.status ? (
				<h1>{error.message}</h1>
			) : (
				<Quote value={quote} onQuoteChange={() => setRandomQuote(quotesList)} />
			)}
		</div>
	);
};

export default QuotePage;
