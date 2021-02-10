import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const StyledContainer = styled.div`
	font-family: 'Oswald', sans-serif;
	background-color: #fff;
`;

const StyledHeader = styled.div`
	padding: 3rem 0;
`;

const StyledContentCardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-bottom: 2rem;
`;

const StyledTitle = styled.h1`
	text-transform: uppercase;
	text-align: center;
	font-size: 2rem;
	color: #020816;
	@media (min-width: 450px) {
	}
	@media (min-width: 767px) {
		font-size: 2.5rem;
	}
	@media (min-width: 1200px) {
		font-size: 3.5rem;
	}
	@media (min-width: 1800px) {
		font-size: 4.5rem;
	}
`;

const StyledParagraph = styled.p`
	text-align: center;
	font-size: 1.2rem;
	margin: 1rem 1rem 0 1rem;
	color: #020816;
	@media (min-width: 450px) {
		font-size: 1.5rem;
	}
	@media (min-width: 767px) {
		font-size: 2rem;
	}
	@media (min-width: 1200px) {
	}
	@media (min-width: 1800px) {
	}
`;

const HappyThoughts = () => {
	return (
		<StyledContainer>
			<StyledHeader>
				<StyledTitle>chatt</StyledTitle>
				<StyledParagraph>connect</StyledParagraph>
			</StyledHeader>
		</StyledContainer>
	);
};

export default HappyThoughts;
