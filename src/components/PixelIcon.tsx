import { useMemo } from 'preact/hooks';

type Pixel = [number, number]; // [x, y]

const SPRITES: Record<string, Pixel[]> = {
	terminal: [
		// Monitor frame top
		[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0],
		// Monitor sides
		[0, 1], [7, 1],
		[0, 2], [7, 2],
		[0, 3], [7, 3],
		[0, 4], [7, 4],
		// Screen content: >_
		[2, 2], [3, 3],
		// Monitor bottom
		[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5],
		// Stand
		[3, 6], [4, 6],
		[2, 7], [3, 7], [4, 7], [5, 7],
	],
	briefcase: [
		// Handle
		[2, 0], [3, 0], [4, 0], [5, 0],
		[2, 1], [5, 1],
		// Body top
		[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2],
		// Body sides
		[0, 3], [7, 3],
		[0, 4], [7, 4],
		// Clasp
		[3, 3], [4, 3],
		[3, 4], [4, 4],
		// Body sides continued
		[0, 5], [7, 5],
		// Body bottom
		[0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6],
	],
	brackets: [
		// Left {
		[2, 0],
		[1, 1],
		[1, 2],
		[0, 3],
		[1, 4],
		[1, 5],
		[2, 6],
		// Right }
		[5, 0],
		[6, 1],
		[6, 2],
		[7, 3],
		[6, 4],
		[6, 5],
		[5, 6],
	],
	rocket: [
		// Nose
		[3, 0],
		[2, 1], [3, 1], [4, 1],
		// Body
		[2, 2], [3, 2], [4, 2],
		[2, 3], [3, 3], [4, 3],
		[1, 4], [2, 4], [3, 4], [4, 4], [5, 4],
		// Fins + base
		[0, 5], [1, 5], [2, 5], [4, 5], [5, 5], [6, 5],
		[0, 6], [3, 6], [6, 6],
		// Exhaust
		[2, 7], [4, 7],
	],
};

export const PixelIcon = ({
	sprite,
	size = 3,
	className = '',
}: {
	sprite: keyof typeof SPRITES;
	size?: number;
	className?: string;
}) => {
	const shadow = useMemo(() => {
		const pixels = SPRITES[sprite];
		if (!pixels) return '';
		return pixels
			.map(([x, y]) => `${x * size}px ${y * size}px currentColor`)
			.join(', ');
	}, [sprite, size]);

	return (
		<span
			className={`inline-block text-accent ${className}`}
			style={{
				width: `${size}px`,
				height: `${size}px`,
				boxShadow: shadow,
				// Reserve space for the full sprite
				marginRight: `${8 * size}px`,
				marginBottom: `${8 * size - size}px`,
			}}
		/>
	);
};
