import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { LinkButton } from './LinkButton';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

const links = [
	{
		title: 'LinkedIn',
		url: 'https://www.linkedin.com/in/adrian-rampy-1b8924198/',
		icon: faLinkedin,
	},
	{
		title: 'GitHub',
		url: 'https://github.com/ahrampy',
		icon: faGithub,
	},
	{
		title: 'Resume',
		url: 'https://docs.google.com/document/d/1NmOAfy1hJpbXuEPgVQ2vwncQM52VaudWlLqLtX6H5X8/export?format=pdf',
		icon: faFloppyDisk,
	},
];

export const Header = () => {
	return (
		<div className='flex h-fit w-full flex-col gap-4'>
			<div>
				<div className='flex flex-col items-center justify-center gap-x-2 sm:flex-row sm:justify-start'>
					<h1 className='text-4xl'>Adrian Rampy</h1>
					<div className='flex gap-1'>
						{links.map(({ title, url, icon }) => (
							<LinkButton title={title} link={url} icon={icon} />
						))}
					</div>
				</div>
				<h2 className='px-4 text-xl sm:px-0'>Engineering Leader • Front-End Focused • Experience-Centric Developer</h2>
			</div>
		</div>
	);
};
