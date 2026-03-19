import { useEffect, useRef, useState } from 'preact/hooks';
import { ComponentChildren } from 'preact';

export const AnimateIn = ({
	children,
	delay = 0,
	className = '',
}: {
	children: ComponentChildren;
	delay?: number;
	className?: string;
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.unobserve(el);
				}
			},
			{ threshold: 0.15 },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`animate-in-item ${visible ? 'is-visible' : ''} ${className}`}
			style={delay ? { transitionDelay: `${delay}ms` } : undefined}
		>
			{children}
		</div>
	);
};
