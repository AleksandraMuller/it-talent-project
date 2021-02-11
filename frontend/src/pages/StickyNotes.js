import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import Stickies from '../KonvaComponents/Stickies';

const StyledContainer = styled.div`
	background-image: radial-gradient(black 1px, transparent 0);
	background-size: 40px 40px;
	background-position: -19px -19px;
	min-height: 100vh;
`;

const StickyNotes = () => {
	return (
		<StyledContainer>
			<Stickies />
		</StyledContainer>
	);
};

export default StickyNotes;
