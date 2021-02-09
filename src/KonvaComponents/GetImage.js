import { Image } from 'react-konva';
import useImage from 'use-image';

const GetImage = ({ imageUrl, onDragEnd }) => {
	const [image] = useImage(imageUrl);
	return (
		<Image
			// onClick={onSelect}
			image={image}
			// ref={shapeRef}
			draggable
			onDragEnd={onDragEnd}
		/>
	);
};

export default GetImage;
