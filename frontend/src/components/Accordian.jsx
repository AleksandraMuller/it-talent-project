import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ChevronLogo } from '../assets/arrow-down-outline.svg';
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
	padding: 3rem;
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
const StyledAccordAndText = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
`;
const StyledChevronLogo = styled.a`
	cursor: pointer;
`;
const StyledAccoridonButton = styled.a``;
const StyledAccoridanTitle = styled.h5`
	font-family: 'News Cycle', sans-serif;
	font-weight: bold;
`;

const StyledChildren = styled.h5`
	font-family: 'News Cycle', sans-serif;
	font-weight: 200;
	font-size: 20px;
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
			<StyledAccordAndText>
				<StyledChevronLogo>
					<ChevronLogo height="32px" width="32px" />
				</StyledChevronLogo>

				<StyledTextContainer>
					<div ref={ref}>
						<StyledAccoridanTitle inverted={inverted}>
							<StyledChildren>{children}</StyledChildren>
						</StyledAccoridanTitle>
					</div>
				</StyledTextContainer>
			</StyledAccordAndText>
		</Container>
	);
};

export default Accordion;
