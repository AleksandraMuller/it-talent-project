import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const StyledContainer = styled.div`
	/* padding: 2rem; */
	background-color: #17181a;
	height: 25vh;
	color: white;
	font-family: 'Roboto', sans-serif;
	font-size: 13px;
	line-height: 1.5rem;
	text-align: center;
	/* z-index: -2; */
	/* position: relative; */
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Link = styled(HashLink)`
	height: 8rem;
	margin-bottom: 1rem;
`;

const StyledParagraph = styled.p`
	padding-bottom: 1rem;
`;

const Footer = () => {
	return (
		<StyledContainer>
			<Link to="#top"></Link>
			<StyledParagraph>
				Designed and built by Aleksandra Müller, Iman Dualeh , Sinny Jamwal{' '}
				{'\u00A9'} 2021
			</StyledParagraph>
		</StyledContainer>
	);
};

export default Footer;
