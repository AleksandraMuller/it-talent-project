import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledTextContainer = styled.div`
	p {
		:first-child {
			margin-top: 0;
		}

		:last-child {
			margin-bottom: 0;
		}
	}
`;

const Container = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	border-bottom: 1px solid black;
	padding: 2.25rem 0;
	margin: auto;

	${StyledTextContainer} {
		height: ${({ expanded, height }) => (expanded ? `${height}px` : '0')};
		opacity: ${({ expanded }) => (expanded ? '1' : '0')};
		margin-top: ${({ expanded }) => (expanded ? '1rem' : '0')};
		overflow-y: hidden;
		transition: height 160ms, margin-top 160ms, opacity 300ms, visibility 300ms;
		visibility: ${({ expanded }) => (expanded ? 'visible' : 'hidden')};
	}
`;
const StyledAccoridonButton = styled.a`
	display: inline-block;

	border: 0.1em solid #ffffff;
	margin: 0 0.3em 0.3em 0;
	border-radius: 0.12em;
	box-sizing: border-box;
	text-decoration: none;
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
	color: white;
	text-align: center;
	transition: all 0.2s;
	border: 2px solid black;
	background-color: #17181a;
`;
const StyledAccoridanTitle = styled.h5`
	display: inline-block;

	border: 0.1em solid #ffffff;

	border-radius: 0.12em;
	box-sizing: border-box;
	text-decoration: none;
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
	color: white;
	text-align: center;
	transition: all 0.2s;
	border: 2px solid black;
	background-color: #17181a;
`;
const Accordion = ({
	title,
	children,
	inverted,
	onToggle,
	className,
	...rest
}) => {
	const [expanded, setExpanded] = useState(false);

	const [height, setHeight] = useState(0);
	const ref = useRef(null);

	useEffect(() => {
		setHeight(ref.current.getBoundingClientRect().height);
	});

	const handleClick = () => {
		const newValue = !expanded;
		setExpanded(newValue);
		if (onToggle) {
			onToggle(newValue);
		}
	};

	return (
		<Container
			className={className}
			expanded={expanded}
			height={height}
			{...rest}
		>
			<StyledAccoridonButton
				onClick={handleClick}
				inverted={inverted}
				expanded={expanded}
			>
				<h4 inverted={inverted}>{title}</h4>
				{/* <Icon icon={chevronDown} /> */}
			</StyledAccoridonButton>
			<StyledTextContainer>
				<div ref={ref}>
					<StyledAccoridanTitle inverted={inverted}>
						{children}
					</StyledAccoridanTitle>
				</div>
			</StyledTextContainer>
		</Container>
	);
};

export default Accordion;
