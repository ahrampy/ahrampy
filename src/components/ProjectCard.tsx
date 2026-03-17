import { ComponentChildren } from 'preact';

export const ProjectCard = ({ children }: { children: ComponentChildren }) => {
	return (
		<div className='flex flex-col gap-3 rounded-xl border border-secondary/10 bg-secondary/[0.03] p-5 dark:border-primary/10 dark:bg-white/[0.04]'>
			{children}
		</div>
	);
};
