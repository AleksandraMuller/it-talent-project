import React, { useState } from 'react';
import GetImage from './KonvaComponents/GetImage';
import Img from './KonvaComponents/Img';
import Rectangle from './KonvaComponents/Rectangle';
import CircleSize from './KonvaComponents/CircleSize';
import StarSize from './KonvaComponents/StarSize';
import ArrowSize from './KonvaComponents/ArrowSize';
import { ReactComponent as SquareLogo } from './assets/square-outline.svg';
import { ReactComponent as CircleLogo } from './assets/ellipse-outline.svg';
import { ReactComponent as ArrowLogo } from './assets/arrow-forward-outline.svg';
import { ReactComponent as StarLogo } from './assets/star-outline.svg';
import { ReactComponent as PenLogo } from './assets/pencil-outline.svg';
import { ReactComponent as TrashLogo } from './assets/trash-outline.svg';
import { ReactComponent as ImageLogo } from './assets/image-outline.svg';

import {
	Stage,
	Layer,
	Line,
	Text,
	Circle,
	Transformer,
	Rect,
	Star,
	Arrow,
	Image,
} from 'react-konva';
import styled from 'styled-components';
import { addLine } from './services/brush.js';
import Konva from 'konva';

const { v1: uuidv1 } = require('uuid');

const ButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: 100;
	top: 1rem;
	right: 1rem;
	background-color: #fff;
`;

const Button = styled.button`
	width: 4rem;
	align-self: flex-end;
	background-color: #fff;
	border: none;
	padding: 0.5rem 0;
	cursor: pointer;
`;

const StyledInput = styled.input`
	align-self: flex-end;
	width: 4rem;
	background-color: #fff;
	border: 0 none;
`;

const StyledGrid = styled.div`
	background: #f7f7f7;
	overflow: hidden;
	min-height: 100vh;
	/* background-image: radial-gradient(black 1px, transparent 0);
	background-size: 40px 40px;
	background-position: -19px -19px; */
	background-size: 80px 80px;
	background-image: linear-gradient(to right, #eee 1px, transparent 1px),
		linear-gradient(to bottom, #eee 1px, transparent 1px);
`;

const StyledTitle = styled.div`
	position: absolute;
	top: 1rem;
	left: 1rem;
	background-color: #fff;
	opacity: 0.3;
	color: #000;
	box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
	width: 10rem;
	padding: 0.5rem 0;
`;

const StyledText = styled.p``;

const Whiteboard = () => {
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

	const shapeEnum = {
		CIRCLE: 'circle',
		RECTANGLE: 'rectangle',
		STAR: 'star',
		ARROW: 'arrow',
		TEXT: 'text',
		IMAGE: 'image',
	};

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
		const simpleText = new Konva.Text({
			x: 20,
			y: 60,
			text: 'ADD TEXT',
			fontSize: 18,
			fontFamily: 'Calibri',
			fill: '#555',
			width: 300,
			padding: 20,
			align: 'center',
		});
		setTexts([...texts, simpleText]);
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

	console.log(rectangles.map((rect) => rect));

	const checkDeselect = (e) => {
		// deselect when clicked on empty area
		const clickedOnEmpty = e.target === e.target.getStage();
		if (clickedOnEmpty) {
			selectShape(null);
		}
	};

	return (
		<StyledGrid>
			<StyledTitle>
				<StyledText>Not a Miro Board</StyledText>
			</StyledTitle>
			<ButtonGroup>
				<Button onClick={addRectangular}>
					<SquareLogo height='32px' width='32px' stroke='grey' />
				</Button>
				<Button onClick={addCircle}>
					{' '}
					<CircleLogo height='32px' width='32px' stroke='grey' />
				</Button>
				<Button onClick={addStar}>
					{' '}
					<StarLogo height='32px' width='32px' stroke='grey' />
				</Button>
				<Button onClick={addArrow}>
					{' '}
					<ArrowLogo height='32px' width='32px' stroke='grey' />
				</Button>
				{/* <Button>Emojis??</Button> */}
				<Button onClick={drawLine}>
					{' '}
					<PenLogo height='32px' width='32px' stroke='grey' />
				</Button>
				<Button onClick={eraseLine}>
					<TrashLogo height='32px' width='32px' stroke='grey' />
				</Button>
				<Button onClick={addText}>Text</Button>
				{/* <Button>Upload image</Button> */}
				<Button>Undo</Button>
				{/* <ImageLogo height='32px' width='32px' stroke='grey' /> */}
				<StyledInput type='file' onChange={onImageChange}></StyledInput>
			</ButtonGroup>

			<Stage
				ref={stageEl}
				width={window.outerWidth}
				height={window.outerHeight}
				onMouseDown={checkDeselect}
				onTouchStart={checkDeselect}>
				<Layer ref={layerEl}>
					{images.map((image, i) => {
						return (
							<Img
								key={i}
								imageUrl={image.content}
								isSelected={image.id === selectedId}
								onSelect={() => {
									selectShape(image.id);
								}}
								onChange={(newAttrs) => {
									const imgs = images.slice();
									imgs[i] = newAttrs;
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
					{texts.map((text, index) => {
						return (
							<Text
								x={20}
								y={60}
								text='ADD TEXT'
								fontSize={18}
								fontFamily='Calibri'
								fill={isDragging ? 'green' : 'black'}
								width={300}
								padding={20}
								align='center'
								draggable
								onDragStart={() => {
									setIsDragging(true);
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
