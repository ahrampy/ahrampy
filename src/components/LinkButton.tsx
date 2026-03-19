import { PixelIcon } from './PixelIcon';

export const LinkButton = ({
	title,
	icon,
	link,
	size = 3,
}: {
	title: string;
	icon: string;
	link: string;
	size?: number;
}) => (
	<a href={link} target='_blank' title={title} className='p-1'>
		<PixelIcon sprite={icon} size={size} />
	</a>
);
