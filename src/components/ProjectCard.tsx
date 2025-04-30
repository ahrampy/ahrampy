import { ComponentChildren } from 'preact';

export const ProjectCard = ({ children }: { children: ComponentChildren }) => {
	return (
		<div className='flex flex-col gap-4 rounded border border-dotted border-secondary p-4 dark:border-primary'>
			{children}
		</div>
	);
};
