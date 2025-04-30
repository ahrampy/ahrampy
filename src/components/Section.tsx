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
		<div
			className={`flex w-full flex-col gap-2 rounded border border-secondary dark:border-primary ${expanded ? 'border-t-0 pt-px' : ''}`}
		>
			<button className='px-4 py-2' onClick={() => setExpanded(!expanded)}>
				<h3 class='flex items-center justify-center gap-2 text-xl sm:justify-start'>
					<FontAwesomeIcon icon={expanded ? faChevronDown : faChevronUp} className='hidden sm:block' />
					<span>{title}</span>
				</h3>
			</button>
			<div className={`px-10 pb-6 ${expanded ? '' : 'hidden'}`}>{children}</div>
		</div>
	);
};
