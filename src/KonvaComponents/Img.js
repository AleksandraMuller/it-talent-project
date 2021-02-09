import React, { useEffect, useRef } from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';

const Img = ({
	shapeProps,
	isSelected,
	onSelect,
	onChange,
	imageUrl,
	onDragEnd,
}) => {
	const shapeRef = useRef();
	const trRef = useRef();
	const [image] = useImage(imageUrl);

	useEffect(() => {
		if (isSelected) {
			//we need to attach transformer to images manually
			trRef.current.setNode(shapeRef.current);
			trRef.current.getLayer().batchDraw();
		}
	}, [isSelected]);

	return (
		<>
			<Image
				onClick={onSelect}
				image={image}
				ref={shapeRef}
				draggable
				onDragEnd={onDragEnd}
				onTransformEnd={(e) => {
					const node = shapeRef.current;
					const scaleX = node.scaleX();
					const scaleY = node.scaleY();
					onChange({
						...shapeProps,
						x: node.x(),
						y: node.y(),
						width: node.width() * scaleX,
						height: node.height() * scaleY,
					});
				}}
			/>
			{isSelected && <Transformer ref={trRef} />}
		</>
	);
};

export default Img;
