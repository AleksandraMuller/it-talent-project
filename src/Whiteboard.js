import React, { useState } from 'react';
import GetImage from './KonvaComponents/GetImage';
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
// import Circle from './KonvaComponents/Circle';
import styled from 'styled-components';
import { addLine } from './services/brush.js';
import Konva from 'konva';

const { v1: uuidv1 } = require('uuid');

const ButtonGroup = styled.div``;

const Button = styled.button``;

const Whiteboard = () => {
	const [isDragging, setIsDragging] = useState(false);
	const [x, setX] = useState(500);
	const [y, setY] = useState(500);
	const stageEl = React.createRef();
	const shapeRef = React.useRef();
	const layerEl = React.createRef();
	const fileUploadEl = React.createRef();
	const [circles, setCircles] = useState([]);
	const [rectagulars, setRectangulars] = useState([]);
	const [stars, setStars] = useState([]);
	const [arrows, setArrows] = useState([]);
	const [texts, setTexts] = useState([]);
	const [images, setImages] = useState([]);
	const [, updateState] = React.useState();
	const [position, setPosition] = useState({});

	const drawLine = () => {
		addLine(stageEl.current.getStage(), layerEl.current, 'brush', 'pink');
	};

	const eraseLine = () => {
		addLine(stageEl.current.getStage(), layerEl.current, 'erase');
	};

	const addCircle = () => {
		const circ = new Konva.Circle({
			x: 100,
			y: 100,
			width: 100,
			height: 100,
			radius: 40,
			fill: 'red',
			strokeWidth: 5,
		});
		setCircles([...circles, circ]);
	};

	const addRectangular = () => {
		const rect = new Konva.Rect({
			x: 100,
			y: 100,
			width: 100,
			height: 100,
			radius: 40,
			fill: 'red',
			strokeWidth: 5,
		});
		setRectangulars([...rectagulars, rect]);
	};

	const addStar = () => {
		const sta = new Konva.Star({
			x: 200,
			y: 100,
			numPoints: 6,
			innerRadius: 40,
			outerRadius: 70,
			fill: 'yellow',
			stroke: 'black',
			strokeWidth: 4,
		});
		setStars([...stars, sta]);
	};

	const addArrow = () => {
		const arrow = new Konva.Arrow({
			x: 200,
			y: 150,
			points: [0, 0, 100, 100],
			pointerLength: 20,
			pointerWidth: 20,
			fill: 'black',
			stroke: 'black',
			strokeWidth: 4,
		});
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

	const forceUpdate = React.useCallback(() => updateState({}), []);
	console.log(images);

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

	return (
		<div>
			<ButtonGroup>
				<Button onClick={addRectangular}>Rectangle</Button>
				<Button onClick={addCircle}>Circle</Button>
				<Button onClick={addStar}>Star</Button>
				<Button onClick={addArrow}>Arrow</Button>
				<Button>Emojis??</Button>
				<Button onClick={drawLine}>Pen</Button>
				<Button onClick={eraseLine}>Erase</Button>
				<Button onClick={addText}>Text</Button>
				<Button>Upload image</Button>
				<Button>Undo</Button>
				<input type='file' onChange={onImageChange} ref={fileUploadEl}></input>
			</ButtonGroup>

			<Stage
				ref={stageEl}
				width={window.innerWidth}
				height={window.innerHeight}>
				<Layer ref={layerEl}>
					{circles.map((circle, index) => {
						return (
							<Circle
								x={100}
								y={100}
								width={50}
								height={50}
								fill='red'
								draggable
								onDragEnd={handleDragEnd}
							/>
						);
					})}
					{rectagulars.map((rect, index) => {
						return (
							<Rect
								x={150}
								y={100}
								width={50}
								height={50}
								fill='blue'
								draggable
								onDragEnd={handleDragEnd}
							/>
						);
					})}

					{stars.map((star, index) => {
						return (
							<Star
								x={200}
								y={100}
								numPoints={6}
								innerRadius={40}
								outerRadius={70}
								fill='yellow'
								stroke='black'
								strokeWidth={4}
								draggable
								onDragEnd={handleDragEnd}
							/>
						);
					})}
					{arrows.map((arrow, index) => {
						return (
							<Arrow
								x={150}
								y={150}
								points={[0, 0, 100, 100]}
								pointerLength={20}
								pointerWidth={20}
								fill='black'
								stroke='black'
								strokeWidth={4}
								draggable
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
					{images.map((image) => {
						console.log(image);

						return (
							<GetImage imageUrl={image.content} onDragEnd={handleDragEnd} />
						);
					})}
				</Layer>
			</Stage>
			{/* <button onClick={(e) => setTool('pen')}>PEN</button>
			<button onClick={(e) => setTool('eraser')}>ERASER</button> */}
		</div>
	);
};

export default Whiteboard;
