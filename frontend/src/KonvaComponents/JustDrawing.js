import React, { useState } from 'react';
import { Stage, Layer, Line, Text } from 'react-konva';

const JustDrawing = (tool, isDrawing, lines) => {
	return (
		<div>
			<Text text='Just start drawing' x={5} y={30} />
			{lines.map((line, i) => (
				<Line
					key={i}
					points={line.points}
					stroke='#df4b26'
					strokeWidth={5}
					tension={0.5}
					lineCap='round'
					globalCompositeOperation={
						line.tool === 'eraser' ? 'destination-out' : 'source-over'
					}
				/>
			))}
		</div>
	);
};

export default JustDrawing;
