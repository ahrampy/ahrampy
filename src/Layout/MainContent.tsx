import { Section } from '../components/Section';
import { LinkButton } from '../components/LinkButton';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { ProjectCard } from '../components/ProjectCard';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';

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
		tags: ['TypeScript', 'JavaScript (ES6+)', 'React', 'Node.js', 'Ruby on Rails', 'Express', 'Koa', 'GraphQL', 'Ruby', 'Python'],
	},
	{
		category: 'Frontend',
		tags: ['React Query', 'React Hook Form', 'Redux', 'Zustand', 'Next.js', 'Tailwind CSS', 'Material UI', 'Micro-frontends', 'Design Systems', 'WCAG / a11y', 'SSR / SSG', 'Performance Optimization', 'D3', 'Ag-Grid'],
	},
	{
		category: 'Backend & Data',
		tags: ['REST API Design', 'Microservices', 'PostgreSQL', 'Redis', 'TypeORM', 'Sequelize', 'OAuth', 'JWT', 'RBAC'],
	},
	{
		category: 'Infrastructure & DevOps',
		tags: ['AWS (S3, EC2, Lambda, CloudFront, RDS)', 'Docker', 'GitHub Actions CI/CD', 'GCP', 'Firebase', 'Heroku', 'Rollbar'],
	},
	{
		category: 'Leadership',
		tags: ['Team Lead', 'Technical Strategy', 'Roadmap Planning', 'Mentorship', 'Hiring', 'Stakeholder Management', 'Agile / Scrum'],
	},
	{
		category: 'Testing & Tooling',
		tags: ['Jest', 'Cypress', 'Integration Testing', 'E2E Testing', 'Git', 'Webpack', 'Vite', 'Monorepo Architecture'],
	},
];

export const MainContent = () => {
	return (
		<div className='flex h-full w-full flex-col gap-4 overflow-hidden pb-4'>
			<Section title='About Me' startsExpanded>
				<p>
					Full-stack engineer with 7+ years building scalable web applications across enterprise and startup
					environments. I've led cross-functional teams, driven technical strategy, and mentored engineers, while
					staying hands-on across the stack. I care deeply about the craft: readable code, thoughtful architecture,
					and experiences users love. When I'm not shipping, I'm probably outside or trying something new.
				</p>
			</Section>
			<Section title='Work Experience' startsExpanded>
				<div className='relative'>
					<div className='absolute left-[7px] top-0 h-full w-px bg-accent/30' />
					<div className='flex flex-col gap-7'>
						{experience.map(({ title, company, period, bullets }) => (
							<div key={company} className='relative pl-7'>
								<div className='absolute left-0 top-[6px] h-3.5 w-3.5 rounded-full border-2 border-accent bg-primary dark:bg-secondary' />
								<div className='flex flex-wrap items-baseline gap-x-2'>
									<h4 className='font-semibold'>{title}</h4>
									<span className='text-sm opacity-60'>{company}</span>
								</div>
								<p className='mb-2 text-sm opacity-50'>{period}</p>
								<ul className='space-y-1.5'>
									{bullets.map((b) => (
										<li key={b} className='flex gap-2 text-sm'>
											<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/30 dark:bg-primary/30' />
											{b}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</Section>
			<Section title='Skills'>
				<div className='flex flex-col gap-5'>
					{skills.map(({ category, tags }) => (
						<div key={category}>
							<h4 className='mb-2 font-medium'>{category}</h4>
							<div className='flex flex-wrap gap-2'>
								{tags.map((tag) => (
									<span key={tag} className='rounded-full border border-accent/30 bg-accent/[0.06] px-3 py-1 text-sm'>
										{tag}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</Section>
			<Section title='Side Projects & Experiments'>
				<div className='flex flex-col gap-4'>
					<ProjectCard>
						<div className='flex items-center gap-2'>
							<h4 className='font-semibold'>Tower Time</h4>
							<LinkButton title='Play Tower Time' icon={faPlay} link='https://towertime.netlify.app/' size='sm' />
						</div>
						<p>
							A tower defense game I built while learning JS — complete with pathfinding, custom pixel art sprites, and
							a community-submitted soundtrack. It went surprisingly viral, taught me more about coupling, refactoring,
							and user feedback than any tutorial could, and gave me a lasting obsession with great UX.
						</p>
					</ProjectCard>
					<ProjectCard>
						<div className='flex items-center gap-2'>
							<h4 className='font-semibold'>Flipcamp</h4>
							<LinkButton title='Flipcamp Repo' icon={faGitAlt} link='https://github.com/ahrampy/Flipcamp' size='sm' />
						</div>
						<p>
							A Hipcamp clone built with Rails, React, and Redux to get hands-on with the full RoR + React stack.
							Good practice in component architecture and the joys of the npm ecosystem.
						</p>
					</ProjectCard>
					<ProjectCard>
						<div className='flex items-center gap-2'>
							<h4 className='font-semibold'>Mustachions</h4>
							<LinkButton
								title='Mustachions Repo'
								icon={faGitAlt}
								link='https://github.com/ahrampy/Mustachions'
								size='sm'
							/>
						</div>
						<p>
							A React Native mobile game experiment with a friend — art-focused, isometric, and never shipped. But
							animating plants and solving the math behind scaling an isometric room to arbitrary screen sizes was a blast.
						</p>
					</ProjectCard>
				</div>
			</Section>
		</div>
	);
};
