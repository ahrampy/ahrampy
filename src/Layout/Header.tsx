import { LinkButton } from '../components/LinkButton';

const links = [
	{
		title: 'LinkedIn',
		url: 'https://www.linkedin.com/in/adrian-rampy-1b8924198/',
		icon: 'linkedin',
	},
	{
		title: 'GitHub',
		url: 'https://github.com/ahrampy',
		icon: 'github',
	},
	{
		title: 'Resume',
		url: 'https://docs.google.com/document/d/1iWwoVHg0mztsw3AuRrhNCI4nMQAIB7W2RutjPrBYio0/export?format=pdf',
		icon: 'document',
	},
];

const navItems = [
	{ id: 'about', label: 'About' },
	{ id: 'experience', label: 'Experience' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'contact', label: 'Contact' },
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
				<h1 className='font-pixel text-4xl'>Adrian Rampy</h1>
				<h2 className='font-pixel text-sm opacity-50'>
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
							className={`flex items-center gap-2 py-1.5 text-left font-pixel text-base transition-all duration-200 ${
								activeSection === id
									? 'opacity-100'
									: 'opacity-40 hover:opacity-70'
							}`}
						>
							<span
								className={`inline-block h-1.5 w-1.5 transition-colors duration-200 ${
									activeSection === id ? 'bg-accent' : 'bg-transparent'
								}`}
							/>
							{label}
						</button>
					))}
				</nav>
			)}
		</div>
	);
};
