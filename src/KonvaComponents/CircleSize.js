import React from 'react';
import { Circle, Transformer } from 'react-konva';

const CircleSize = ({
	shapeProps,
	isSelected,
	onSelect,
	onChange,
	onDragEnd,
}) => {
	const shapeRef = React.useRef();
	const trRef = React.useRef();

	React.useEffect(() => {
		if (isSelected) {
			trRef.current.setNode(shapeRef.current);
			trRef.current.getLayer().batchDraw();
		}
	}, [isSelected]);

	return (
		<React.Fragment>
			<Circle
				onClick={onSelect}
				ref={shapeRef}
				fill='red'
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
			/>
			{isSelected && <Transformer ref={trRef} />}
		</React.Fragment>
	);
};

export default CircleSize;
