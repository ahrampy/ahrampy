import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LinkButton = ({ title, icon, link }: { title: string; icon: IconDefinition; link: string }) => (
	<a href={link} target='_blank' title={title} className='p-1'>
		<FontAwesomeIcon icon={icon} size='lg' />
	</a>
);
