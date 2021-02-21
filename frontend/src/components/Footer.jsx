import React, { useState } from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const StyledContainer = styled.div`
	background-color: #17181a;
	min-height: 25vh;
	color: white;
	font-size: 13px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const StyledLink = styled(HashLink)`
	height: 8rem;
	margin-bottom: 1rem;
	color: #fff;
	font-family: 'News Cycle', sans-serif;
	text-decoration: none;
	font-size: 1.5rem;
`;

const StyledParagraph = styled.p`
	padding-bottom: 1rem;
	font-family: 'News Cycle', sans-serif;
	color: #fff;
`;

const StyledAttrHide = styled(StyledParagraph)`
	padding-left: 1rem;
	display: ${(props) => (props.visible ? 'block' : 'none')};
`;

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledButton = styled.button`
	padding-bottom: 1rem;
	font-family: 'News Cycle', sans-serif;
	color: #fff;
	background-color: transparent;
	border: none;
	width: min-content;
	margin: auto;
	cursor: pointer;
	&:hover {
		color: #ccc;
		outline: none;
	}
`;

const Footer = () => {
	const [visible, setVisible] = useState(false);

	const handleToggle = () => {
		setVisible(!visible);
	};
	return (
		<StyledContainer>
			<StyledLink to='#top'>To top</StyledLink>
			<StyledWrapper>
				<StyledButton onClick={handleToggle}>Attributions</StyledButton>
				<StyledAttrHide visible={visible}>
					{' '}
					Images and Icons are taken from Ionicons (https://ionicons.com/) and
					Icons8 (https://icons8.com/)
				</StyledAttrHide>
				<StyledParagraph>
					Designed and built by Aleksandra Müller, Iman Dualeh, Sinny Jamwal{' '}
					{'\u00A9'} 2021
				</StyledParagraph>
			</StyledWrapper>
		</StyledContainer>
	);
};

export default Footer;
