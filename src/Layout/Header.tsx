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

const navItems = [
	{ id: 'about', label: 'About' },
	{ id: 'experience', label: 'Experience' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'projects', label: 'Projects' },
];

export const Header = ({
	activeSection,
	mobile = false,
}: {
	activeSection: string;
	mobile?: boolean;
}) => {
	const scrollTo = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<div className='flex flex-col gap-8'>
			<div
				className={`flex flex-col gap-2 ${mobile ? 'items-center text-center' : 'items-start'}`}
			>
				<h1 className='text-4xl font-bold'>Adrian Rampy</h1>
				<h2 className='text-sm font-medium opacity-50'>
					Full-Stack Engineer · Technical Lead
				</h2>
				<div className='mt-1 flex gap-1'>
					{links.map(({ title, url, icon }) => (
						<LinkButton key={title} title={title} link={url} icon={icon} />
					))}
				</div>
			</div>

			{!mobile && (
				<nav className='flex flex-col gap-0.5'>
					{navItems.map(({ id, label }) => (
						<button
							key={id}
							onClick={() => scrollTo(id)}
							className={`border-l-2 py-1.5 pl-3 text-left text-sm transition-all duration-200 ${
								activeSection === id
									? 'border-accent font-semibold opacity-100'
									: 'border-transparent opacity-40 hover:border-accent/40 hover:opacity-70'
							}`}
						>
							{label}
						</button>
					))}
				</nav>
			)}
		</div>
	);
};
