import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { LinkButton } from '../components/LinkButton';

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
		url: 'https://docs.google.com/document/d/1iWwoVHg0mztsw3AuRrhNCI4nMQAIB7W2RutjPrBYio0/export?format=pdf',
		icon: faFileArrowDown,
	},
];

export const Header = () => {
	return (
		<div className='flex h-fit w-full flex-col gap-2 pb-2'>
			<div className='flex flex-col items-center gap-1 sm:items-start'>
				<div className='flex flex-col items-center gap-x-3 sm:flex-row sm:items-center'>
					<h1 className='text-4xl font-bold'>Adrian Rampy</h1>
					<div className='mt-1 flex gap-1 sm:mt-0'>
						{links.map(({ title, url, icon }) => (
							<LinkButton title={title} link={url} icon={icon} />
						))}
					</div>
				</div>
				<h2 className='px-4 text-lg font-medium opacity-60 sm:px-0'>Full-Stack Engineer • Technical Lead • Experience-Centric Developer</h2>
			</div>
		</div>
	);
};
