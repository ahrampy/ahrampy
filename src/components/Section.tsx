import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentChildren } from 'preact';
import { useState } from 'preact/compat';

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
		<div className='flex w-full flex-col rounded-xl bg-white shadow-sm dark:bg-white/[0.06]'>
			<button
				className='flex w-full items-center justify-center gap-2 px-5 py-4 sm:justify-start'
				onClick={() => setExpanded(!expanded)}
			>
				<FontAwesomeIcon icon={expanded ? faChevronDown : faChevronUp} className='hidden sm:block' />
				<h3 className='text-xl font-semibold'>{title}</h3>
			</button>
			{expanded && (
				<div className='border-t border-secondary/10 px-5 pb-6 pt-4 dark:border-primary/10'>
					{children}
				</div>
			)}
		</div>
	);
};
