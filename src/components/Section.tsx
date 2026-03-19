import { ComponentChildren } from 'preact';
import { useState } from 'preact/compat';
import { PixelIcon } from './PixelIcon';

export const Section = ({
	title,
	startsExpanded = false,
	children,
}: {
	title: string;
	startsExpanded?: boolean;
	children: ComponentChildren;
}) => {
	const [expanded, setExpanded] = useState(startsExpanded);

	return (
		<div className='flex w-full flex-col pixel-border border-accent/20 bg-white dark:bg-white/[0.06]'>
			<button
				className={`flex w-full items-center justify-center gap-2 px-5 py-4 hover:bg-secondary/5 hover:opacity-100 sm:justify-start dark:hover:bg-primary/5`}
				onClick={() => setExpanded(!expanded)}
			>
				<PixelIcon sprite={expanded ? 'chevronDown' : 'chevronUp'} size={2} className='hidden sm:block' />
				<h3 className='font-pixel text-lg'>{title}</h3>
			</button>
			{expanded && (
				<div className='border-t-2 border-dashed border-secondary/10 px-5 pb-6 pt-4 dark:border-primary/10'>
					{children}
				</div>
			)}
		</div>
	);
};
