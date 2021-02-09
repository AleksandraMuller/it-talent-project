import React, { useRef, useEffect } from 'react';
import { Arrow, Transformer } from 'react-konva';

const ArrowSize = ({
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
		<React.Fragment>
			<Arrow
				onClick={onSelect}
				ref={shapeRef}
				{...shapeProps}
				draggable
				fill='blue'
				points={[0, 0, 100, 100]}
				pointerLength={20}
				pointerWidth={20}
				fill='black'
				stroke='black'
				strokeWidth={4}
				onDragEnd={onDragEnd}
				onTransformEnd={(e) => {
					//transformer is changing scale
					const node = shapeRef.current;
					const scaleX = node.scaleX();
					const scaleY = node.scaleY();
					onChange({
						x: node.x(),
						y: node.y(),
						width: node.width() * scaleX,
						height: node.height() * scaleY,
					});
				}}
			/>
			{isSelected && <Transformer ref={trRef} />}
		</React.Fragment>
	);
};

export default ArrowSize;
