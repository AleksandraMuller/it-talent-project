import React, { useState } from 'react';
import Img from './Img';
import Rectangle from './Rectangle';
import CircleSize from './CircleSize';
import StarSize from './StarSize';
import ArrowSize from './ArrowSize';

import { Stage, Layer } from 'react-konva';
import { ReactComponent as ImageLogo } from '../assets/image-outline.svg';

import { addLine } from '../services/brush.js';
import { getText } from '../services/textNode';
import Konva from 'konva';
import styled from 'styled-components';
import { useScreenshot } from 'use-screenshot-hook';
import { useHistory } from 'react-router-dom';

import {
	Button,
	ButtonGroup,
	StyledSquareLogo,
	StyledCircleLogo,
	StyledArrowLogo,
	StyledSaveLogo,
	StyledPenLogo,
	StyledStarLogo,
	StyledTrashLogo,
	StyledTextLogo,
	StyledGrid,
	StyledInput,
	StyledLabel,
	StyledText,
	StyledTitle,
	StyledScreenShotLogo,
} from '../styles/Whiteboard.styles';

const { v1: uuidv1 } = require('uuid');

const Whiteboard = () => {
	const { image, takeScreenshot } = useScreenshot();
	const [screenshots, setScreenShots] = useState([]);
	const [isDragging, setIsDragging] = useState(false);
	const [x, setX] = useState(500);
	const [y, setY] = useState(500);
	const stageEl = React.createRef();
	const shapeRef = React.useRef();
	const layerEl = React.createRef();
	const fileUploadEl = React.createRef();
	const [circles, setCircles] = useState([]);
	const [stars, setStars] = useState([]);
	const [arrows, setArrows] = useState([]);
	const [texts, setTexts] = useState([]);
	const [images, setImages] = useState([]);
	const [position, setPosition] = useState({});
	const [obj, setObj] = useState();
	const [selectedId, selectShape] = useState(null);
	const [rectangles, setRectangles] = useState([]);
	const [shapes, setShapes] = useState([]);
	const history = useHistory();

	const drawLine = () => {
		addLine(stageEl.current.getStage(), layerEl.current, 'brush', 'pink');
	};

	const eraseLine = () => {
		addLine(stageEl.current.getStage(), layerEl.current, 'erase');
	};

	const addCircle = () => {
		const circleAttrs = {
			x: 100,
			y: 100,
			width: 100,
			height: 100,
			radius: 40,
			fill: 'red',
			strokeWidth: 5,
		};
		setCircles([...circles, circleAttrs]);
	};

	const addRectangular = () => {
		const rectAttrs = {
			id: rectangles.length + 1,
			x: 100,
			y: 100,
			width: 100,
			height: 100,
			fill: 'blue',
		};
		setRectangles([...rectangles, rectAttrs]);
	};

	const addStar = () => {
		const starAttrs = {
			x: 200,
			y: 100,
			numPoints: 6,
			innerRadius: 40,
			outerRadius: 70,
			fill: 'yellow',
			stroke: 'black',
			strokeWidth: 4,
		};
		setStars([...stars, starAttrs]);
	};

	const addArrow = () => {
		const arrow = {
			x: 200,
			y: 150,
			points: [0, 0, 100, 100],
			pointerLength: 20,
			pointerWidth: 20,
			fill: 'black',
			stroke: 'black',
			strokeWidth: 4,
		};
		setArrows([...arrows, arrow]);
	};

	const addText = () => {
		// const simpleText = {
		// 	x: 20,
		// 	y: 60,
		// 	text: 'ADD TEXT',
		// 	fontSize: 18,
		// 	fontFamily: 'Calibri',
		// 	fill: '#555',
		// 	width: 300,
		// 	padding: 20,
		// 	align: 'center',
		// };

		// setTexts([...texts, simpleText]);
		getText(stageEl.current.getStage(), layerEl.current);
	};

	const handleDragEnd = (e) => {
		setIsDragging(false);
		const pos = {
			x: e.target.x(),
			y: e.target.y(),
		};
		setPosition(pos);
	};

	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let reader = new FileReader();
			reader.onload = (e) => {
				const id = uuidv1();
				images.push({
					content: reader.result,
					id,
				});
				setImages([...images, e.target.result]);
				// fileUploadEl.current.value = null;
			};
			reader.readAsDataURL(event.target.files[0]);
		}
	};

	const checkDeselect = (e) => {
		// deselect when clicked on empty area
		const clickedOnEmpty = e.target === e.target.getStage();
		if (clickedOnEmpty) {
			selectShape(null);
		}
	};

	const addScreenShot = () => {
		takeScreenshot();
		setScreenShots([...screenshots, image]);
	};

	console.log(image);

	return (
		<StyledGrid>
			<StyledTitle>
				<StyledText>Not a Miro Board</StyledText>
			</StyledTitle>
			<ButtonGroup>
				<Button onClick={addRectangular}>
					<StyledSquareLogo height='32px' width='32px' stroke='grey' />
				</Button>
				<Button onClick={addCircle}>
					{' '}
					<StyledCircleLogo height='32px' width='32px' stroke='grey' />
				</Button>
				<Button onClick={addStar}>
					{' '}
					<StyledStarLogo height='32px' width='32px' stroke='grey' />
				</Button>
				<Button onClick={addArrow}>
					{' '}
					<StyledArrowLogo height='32px' width='32px' stroke='grey' />
				</Button>
				{/* <Button>Emojis??</Button> */}
				<Button onClick={drawLine}>
					{' '}
					<StyledPenLogo height='32px' width='32px' stroke='grey' />
				</Button>
				<Button onClick={eraseLine}>
					<StyledTrashLogo height='32px' width='32px' stroke='grey' />
				</Button>
				<Button onClick={addText}>
					<StyledTextLogo height='32px' width='32px' stroke='grey' />
				</Button>

				{/* <Button>Undo</Button> */}
				<StyledInput
					type='file'
					name='file'
					id='file'
					onChange={onImageChange}></StyledInput>
				<StyledLabel for='file'>
					{' '}
					<ImageLogo height='32px' width='32px' stroke='grey' />
				</StyledLabel>
				<Button onClick={addScreenShot}>
					<StyledScreenShotLogo height='32px' width='32px' stroke='grey' />
				</Button>
				<Button onClick={() => history.push('/screenshots')}>
					<StyledSaveLogo height='32px' width='32px' stroke='grey' />
				</Button>
			</ButtonGroup>
			<Stage
				ref={stageEl}
				width={window.innerWidth}
				height={window.innerHeight}
				onMouseDown={checkDeselect}
				onTouchStart={checkDeselect}>
				<Layer ref={layerEl}>
					{images.map((image, index) => {
						return (
							<Img
								key={index}
								imageUrl={image.content}
								isSelected={image.id === selectedId}
								onSelect={() => {
									selectShape(image.id);
								}}
								onChange={(newAttrs) => {
									const imgs = images.slice();
									imgs[index] = newAttrs;
								}}
								onDragEnd={handleDragEnd}
							/>
						);
					})}
					{circles.map((circle, index) => {
						return (
							<CircleSize
								key={index}
								fill='red'
								shapeProps={circle}
								isSelected={circle.id === selectedId}
								onSelect={() => {
									selectShape(circle.id);
								}}
								onChange={(newAttrs) => {
									const circle = circles.slice();
									circle[index] = newAttrs;
									setCircles(circle);
								}}
								onDragEnd={handleDragEnd}
							/>
						);
					})}
					{rectangles.map((rect, index) => {
						return (
							<Rectangle
								key={index}
								fill='blue'
								shapeProps={rect}
								isSelected={rect.id === selectedId}
								onSelect={() => {
									selectShape(rect.id);
								}}
								onChange={(newAttrs) => {
									const rects = rectangles.slice();
									rects[index] = newAttrs;
									setRectangles(rects);
								}}
								onDragEnd={handleDragEnd}
							/>
						);
					})}

					{stars.map((star, index) => {
						return (
							<StarSize
								key={index}
								shapeProps={star}
								isSelected={star.id === selectedId}
								onSelect={() => {
									selectShape(star.id);
								}}
								onChange={(newAttrs) => {
									const starChange = stars.slice();
									starChange[index] = newAttrs;
									setStars(starChange);
								}}
								onDragEnd={handleDragEnd}
							/>
						);
					})}
					{arrows.map((arrow, index) => {
						return (
							<ArrowSize
								key={index}
								shapeProps={arrow}
								isSelected={arrow.id === selectedId}
								onSelect={() => {
									selectShape(arrow.id);
								}}
								onChange={(newAttrs) => {
									const arrowChange = arrows.slice();
									arrowChange[index] = newAttrs;
									setArrows(arrowChange);
								}}
								onDragEnd={handleDragEnd}
							/>
						);
					})}
				</Layer>
			</Stage>
		</StyledGrid>
	);
};

export default Whiteboard;
