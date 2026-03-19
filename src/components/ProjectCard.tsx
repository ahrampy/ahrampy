import { ComponentChildren } from 'preact';

export const ProjectCard = ({ children }: { children: ComponentChildren }) => {
	return (
		<div className='flex flex-col gap-3 pixel-border border-accent/20 bg-accent/[0.04] p-5'>
			{children}
		</div>
	);
};
