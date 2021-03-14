import React, { useRef, useEffect } from 'react';
import { Rect, Transformer } from 'react-konva';

const Rectangle = ({
	shapeProps,
	isSelected,
	onSelect,
	onChange,
	onDragEnd,
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
			<Rect
				onClick={onSelect}
				ref={shapeRef}
				{...shapeProps}
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

export default Rectangle;
