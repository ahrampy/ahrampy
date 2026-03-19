import { useEffect, useState } from 'preact/hooks';
import { ComponentChildren } from 'preact';
import { RefObject } from 'preact';
import { LinkButton } from '../components/LinkButton';
import { PixelIcon } from '../components/PixelIcon';
import { PixelDivider } from '../components/PixelDivider';

const experience = [
	{
		title: 'Senior Software Engineer & Team Lead',
		company: 'Bellwood',
		period: 'May 2021 - Present',
		bullets: [
			'Leading a cross-functional team across concurrent client engagements, owning delivery, capacity planning, and code review.',
			'Drove technical strategy, system design, and roadmap prioritization across enterprise, mid-cap, and startup clients.',
			'Led technical hiring for 12+ roles; designed challenges and mentoring frameworks that accelerated time-to-productivity.',
			'Key projects: micro-frontend architecture for Chick-fil-A, real-time document collaboration for ExhibitSuite, i18n + WCAG compliance for Broadcom, AWS Lambda serverless suite for Rainbook.',
		],
	},
	{
		title: 'Software Engineer & Instructor',
		company: 'App Academy',
		period: 'May 2019 - May 2021',
		bullets: [
			'Designed and delivered a full-stack web development curriculum to 400+ students across 8 cohorts, covering React, Node.js, REST API design, DS&A, and database fundamentals.',
			'Built internal automation tools that reduced lesson startup time by 50%, streamlining daily operations for instructors.',
		],
	},
];

const skills = [
	{
		category: 'Languages & Frameworks',
		tags: ['TypeScript', 'JavaScript (ES6+)', 'Ruby', 'Python', 'React', 'React Native', 'Expo', 'Next.js', 'Node.js', 'Express', 'Koa', 'Ruby on Rails', 'GraphQL'],
	},
	{
		category: 'Frontend',
		tags: ['Redux', 'Zustand', 'React Query', 'React Hook Form', 'Formik', 'React Table', 'Ag-Grid', 'D3.js', 'Tailwind CSS', 'Styled Components', 'Material UI', 'Design Systems', 'Micro-frontends', 'SSR / SSG', 'WCAG / a11y', 'Performance Optimization', 'Axios', 'Yup', 'Zod'],
	},
	{
		category: 'Backend & Data',
		tags: ['REST API Design', 'Microservices', 'Socket.io', 'PostgreSQL', 'Elasticsearch', 'Redis', 'ioredis', 'TypeORM', 'Sequelize', 'Active Record', 'OAuth', 'JWT', 'RBAC', 'Okta', 'Stripe', 'Plaid', 'Joi'],
	},
	{
		category: 'Infrastructure & DevOps',
		tags: ['AWS (S3, EC2, Lambda, CloudFront, RDS, ECS, IAM, CloudWatch)', 'GCP (Cloud Build, Cloud Storage, Memorystore, Cloud SQL)', 'Docker', 'GitHub Actions CI/CD', 'Firebase', 'Heroku', 'Rollbar'],
	},
	{
		category: 'Testing & Tooling',
		tags: ['Jest', 'Vitest', 'Cypress', 'Playwright', 'Integration Testing', 'E2E Testing', 'Git', 'Webpack', 'Vite', 'Monorepo Architecture'],
	},
	{
		category: 'Leadership',
		tags: ['Team Lead', 'Technical Strategy', 'Roadmap Planning', 'Agile / Scrum', 'Stakeholder Management', 'Mentorship', 'Hiring'],
	},
];

const SECTION_IDS = ['about', 'experience', 'skills', 'projects'] as const;

const SectionLabel = ({
	children,
	icon,
}: {
	children: ComponentChildren;
	icon?: string;
}) => (
	<h3 className='mb-5 hidden items-center gap-3 font-pixel text-sm uppercase text-accent lg:flex'>
		{icon && <PixelIcon sprite={icon} size={2} />}
		{children}
	</h3>
);

const MobileSection = ({
	label,
	icon,
	startsExpanded = false,
	children,
}: {
	label: string;
	icon?: string;
	startsExpanded?: boolean;
	children: ComponentChildren;
}) => {
	const [expanded, setExpanded] = useState(startsExpanded);
	return (
		<div>
			{/* Mobile toggle button — hidden on desktop */}
			<button
				className='flex w-full items-center gap-2 lg:hidden'
				onClick={() => setExpanded(!expanded)}
			>
				{icon && <PixelIcon sprite={icon} size={2} />}
				<span className='font-pixel text-sm uppercase text-accent'>
					{label}
				</span>
				<PixelIcon
					sprite={expanded ? 'chevronUp' : 'chevronDown'}
					size={2}
					className='opacity-60'
				/>
			</button>
			{/* Desktop label — always visible */}
			<SectionLabel icon={icon}>
				{label}
			</SectionLabel>
			{/* Content: always visible on desktop, toggled on mobile */}
			<div className={`${expanded ? 'block' : 'hidden lg:block'} mt-4 lg:mt-0`}>{children}</div>
		</div>
	);
};

export const MainContent = ({
	scrollRef,
	setActiveSection,
}: {
	scrollRef: RefObject<HTMLDivElement>;
	setActiveSection: (id: string) => void;
}) => {
	useEffect(() => {
		const container = scrollRef.current;
		if (!container) return;

		const handleScroll = () => {
			// If near the top, always highlight "about"
			if (container.scrollTop < 50) {
				setActiveSection(SECTION_IDS[0]);
				return;
			}
			const threshold = container.clientHeight * 0.35;
			let active: string = SECTION_IDS[0];
			for (const id of SECTION_IDS) {
				const el = document.getElementById(id);
				if (!el) continue;
				const relTop =
					el.getBoundingClientRect().top - container.getBoundingClientRect().top;
				if (relTop <= threshold) active = id;
			}
			setActiveSection(active);
		};

		container.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => container.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='flex flex-col gap-6 pb-24 lg:gap-10'>
			<section id='about' className='scroll-mt-8'>
				<MobileSection label='About' icon='terminal' startsExpanded>
					<p className='leading-relaxed'>
						Full-stack engineer with {new Date().getFullYear() - 2018}+ years building scalable web
						applications across enterprise and startup environments. I've led cross-functional teams,
						driven technical strategy, and mentored engineers, while staying hands-on across the stack.
						I care deeply about the craft: readable code, thoughtful architecture, and experiences
						users love. When I'm not shipping, I'm probably outside or trying something new.
					</p>
				</MobileSection>
			</section>

			<PixelDivider className='hidden lg:flex' />

			<section id='experience' className='scroll-mt-8'>
				<MobileSection label='Work Experience' icon='briefcase' startsExpanded>
					<div className='relative'>
						<div className='absolute left-[7px] top-0 h-full w-px bg-accent/30' />
						<div className='flex flex-col gap-7'>
							{experience.map(({ title, company, period, bullets }) => (
								<div key={company} className='relative pl-7'>
									<div className='absolute left-0 top-[6px] h-3 w-3 border-2 border-accent bg-primary dark:bg-secondary' />
									<div className='flex flex-wrap items-baseline gap-x-2'>
										<h4 className='font-pixel text-base'>{title}</h4>
										<span className='text-sm opacity-60'>{company}</span>
									</div>
									<p className='mb-2 font-pixel text-xs opacity-50'>{period}</p>
									<ul className='space-y-1.5'>
										{bullets.map((b) => (
											<li key={b} className='flex gap-2 text-sm'>
												<span className='mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent/40' />
												{b}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</MobileSection>
			</section>

			<PixelDivider className='hidden lg:flex' />

			<section id='skills' className='scroll-mt-8'>
				<MobileSection label='Skills' icon='brackets'>
					<div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
						{skills.map(({ category, tags }) => (
							<div
								key={category}
								className='pixel-border border-accent/20 bg-accent/[0.04] p-4'
							>
								<h4 className='mb-2 font-pixel text-sm'>{category}</h4>
								<div className='flex flex-wrap gap-1.5'>
									{tags.map((tag) => (
										<span
											key={tag}
											className='border border-dashed border-accent/30 bg-accent/[0.06] px-2.5 py-0.5 text-xs'
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</MobileSection>
			</section>

			<PixelDivider className='hidden lg:flex' />

			<section id='projects' className='scroll-mt-8'>
				<MobileSection label='Side Projects' icon='rocket'>
					<div className='flex flex-col gap-4'>
						<div className='flex flex-col gap-3 pixel-border border-accent/20 bg-accent/[0.04] p-5'>
							<div className='flex items-center gap-2'>
								<h4 className='font-pixel text-base'>Tower Time</h4>
								<LinkButton title='Play Tower Time' icon='play' link='https://towertime.netlify.app/' size={2} />
							</div>
							<p>
								A tower defense game I built while learning JS - complete with pathfinding, custom pixel
								art sprites, and a community-submitted soundtrack. It went surprisingly viral, taught me
								more about coupling, refactoring, and user feedback than any tutorial could, and gave me
								a lasting obsession with great UX.
							</p>
						</div>
						<div className='flex flex-col gap-3 pixel-border border-accent/20 bg-accent/[0.04] p-5'>
							<div className='flex items-center gap-2'>
								<h4 className='font-pixel text-base'>Flipcamp</h4>
								<LinkButton title='Flipcamp Repo' icon='gitBranch' link='https://github.com/ahrampy/Flipcamp' size={2} />
							</div>
							<p>
								A Hipcamp clone built with Rails, React, and Redux to get hands-on with the full RoR +
								React stack. Good practice in component architecture and the joys of the npm ecosystem.
							</p>
						</div>
						<div className='flex flex-col gap-3 pixel-border border-accent/20 bg-accent/[0.04] p-5'>
							<div className='flex items-center gap-2'>
								<h4 className='font-pixel text-base'>Mustachions</h4>
								<LinkButton
									title='Mustachions Repo'
									icon='gitBranch'
									link='https://github.com/ahrampy/Mustachions'
									size={2}
								/>
							</div>
							<p>
								A React Native mobile game experiment with a friend - art-focused, isometric, and never
								shipped. But animating plants and solving the math behind scaling an isometric room to
								arbitrary screen sizes was a blast.
							</p>
						</div>
					</div>
				</MobileSection>
			</section>
		</div>
	);
};
