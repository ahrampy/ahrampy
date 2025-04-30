import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LinkButton = ({
	title,
	icon,
	link,
	size = 'lg',
}: {
	title: string;
	icon: IconDefinition;
	link: string;
	size?: SizeProp;
}) => (
	<a href={link} target='_blank' title={title} className='p-1'>
		<FontAwesomeIcon icon={icon} size={size} />
	</a>
);
