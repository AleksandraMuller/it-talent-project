import React, { useRef, useEffect } from 'react';
import { Star, Transformer } from 'react-konva';
import Konva from 'konva';

const StarSize = ({
	shapeProps,
	isSelected,
	onSelect,
	onChange,
	onDragEnd,
	backgroundColor,
	changeColor,
}) => {
	const shapeRef = useRef();
	const trRef = useRef();

	useEffect(() => {
		if (isSelected) {
			trRef.current.setNode(shapeRef.current);
			trRef.current.getLayer().batchDraw();
		}
	}, [isSelected]);

	return (
		<>
			<Star
				onClick={onSelect}
				ref={shapeRef}
				{...shapeProps}
				innerRadius={40}
				outerRadius={70}
				strokeWidth={4}
				numPoints={6}
				fillRadialGradientStartPoint={{ x: 100, y: 200 }}
				lineCap='round'
				draggable
				onDragEnd={onDragEnd}
				onTransformEnd={(e) => {
					//transformer is changing scale
					const node = shapeRef.current;
					const scaleX = node.scaleX();
					const scaleY = node.scaleY();
					node.scaleX(1);
					node.scaleY(1);
					onChange({
						x: node.x(),
						y: node.y(),
						width: node.width() * scaleX,
						height: node.height() * scaleY,
						fill: changeColor,
					});
				}}
				onMouseEnter={(e) => {
					// style stage container:
					const container = e.target.getStage().container();
					container.style.cursor = 'pointer';
				}}
				onMouseLeave={(e) => {
					const container = e.target.getStage().container();
					container.style.cursor = 'default';
				}}
			/>
			{isSelected && <Transformer ref={trRef} />}
		</>
	);
};

export default StarSize;
