import React from 'react';
import styled, { css } from 'styled-components';

let {
	Hue,
	Saturation,
	Alpha,
	EditableInput,
} = require('react-color/lib/components/common');

function Picker() {
	return (
		<div
			style={{
				width: 20,
				height: 20,
				borderRadius: 20,
				background: 'rgba(255,255,255,0.2)',
				border: '1px solid white',
				boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
				boxSizing: 'border-box',
			}}
		/>
	);
}

const StyledDotChangeColor = styled.div`
	background: ${({ props }) => props.changeColor};
	border: black 1px solid;
	height: 10px;
	width: 10px;
	display: inline-block;
	border-radius: 50%;
	margin-left: 0.5rem;
`;
const StyledDotSelectColor = styled.div`
	background: ${({ props }) => props.backgroundColor};
	border: black 1px solid;
	height: 10px;
	width: 10px;
	display: inline-block;
	border-radius: 50%;
	margin-left: 0.5rem;
`;

const StyledButton = styled.button`
	border: none;
	padding: 0.3rem;
	margin-bottom: 0.5rem;
	cursor: pointer;
`;

const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const ColorPicker = (props) => {
	const handleChange = (data) => {
		props.setColor(data);
	};

	const selectColor = (color) => {
		const rgba = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
		props.setBackgroundColor(rgba);
	};

	const changeColor = (color) => {
		const rgba = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
		props.setChangeColor(rgba);
	};

	console.log(props);

	return (
		<div style={{ width: '200px' }}>
			<EditableInput
				style={{
					wrap: {
						position: 'relative',
						width: 200,
						height: 50,
					},
					input: {
						position: 'absolute',
						top: 17,
						height: 33,
						width: '100%',
						border: 0,
						borderBottom: '1px solid #E2E2E2',
					},
				}}
				value={props.hex}
				onChange={(data) => handleChange(data.Hex)}
			/>
			<div
				style={{
					width: '200px',
					height: '200px',
					position: 'relative',
				}}>
				<Saturation {...props} onChange={handleChange} pointer={Picker} />
			</div>
			<div
				style={{
					width: '200px',
					height: '20px',
					position: 'relative',
				}}>
				<Hue {...props} onChange={handleChange} pointer={Picker} />
			</div>
			<div
				style={{
					width: '200px',
					height: '20px',
					position: 'relative',
				}}>
				<Alpha {...props} pointer={Picker} onChange={handleChange} />
			</div>
			<FlexContainer>
				<div>
					<StyledButton onClick={() => selectColor(props.rgb)}>
						Select a color
					</StyledButton>
					<StyledDotSelectColor props={props}></StyledDotSelectColor>
				</div>
				<div>
					<StyledButton onClick={() => changeColor(props.rgb)}>
						Change color
					</StyledButton>
					<StyledDotChangeColor props={props}></StyledDotChangeColor>
				</div>
			</FlexContainer>
		</div>
	);
};

export default ColorPicker;
