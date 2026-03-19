import { useMemo } from 'preact/hooks';

export const PixelDivider = ({ className = '' }: { className?: string }) => {
	const count = 5;
	const size = 3;

	const diamondShadow = useMemo(() => {
		// Small diamond pattern: 3x3
		const pixels: [number, number][] = [
			[1, 0],
			[0, 1], [1, 1], [2, 1],
			[1, 2],
		];
		return pixels
			.map(([x, y]) => `${x * size}px ${y * size}px currentColor`)
			.join(', ');
	}, []);

	return (
		<div className={`flex items-center justify-center gap-6 text-accent/30 ${className}`}>
			{Array.from({ length: count }, (_, i) => (
				<span
					key={i}
					style={{
						width: `${size}px`,
						height: `${size}px`,
						boxShadow: diamondShadow,
						display: 'inline-block',
						marginRight: `${2 * size}px`,
						marginBottom: `${2 * size}px`,
					}}
				/>
			))}
		</div>
	);
};
