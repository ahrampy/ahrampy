import { Section } from '../components/Section';
import { LinkButton } from '../components/LinkButton';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { ProjectCard } from '../components/ProjectCard';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';

export const MainContent = () => {
	return (
		<div className='flex h-full w-full flex-col gap-4 overflow-hidden pb-4'>
			<Section title='About Me' startsExpanded>
				<p>
					I've always loved building things, whether it is an app, furniture, or going wild with a box of Legos. My
					journey into software began with designing simple web pages, and over time it grew into a full-blown passion
					for creating thoughtful, user-centered experiences. I've taught, mentored, and led engineering teams, and I
					thrive when combining technical execution with human connection. When I'm not coding, I'm probably exploring
					outside, sharing food with friends, or learning a new game.
				</p>
			</Section>
			<Section title='Skills'>
				<ul className='space-y-4'>
					<li>
						<h4 className='text-l mb-2'>Frontend Development</h4>
						<ul className='list-inside list-disc space-y-1'>
							<li>
								Languages & Frameworks: React, React Native, TypeScript, JavaScript, Express, Node, Python, HTML5, CSS3, Ruby on Rail
							</li>
							<li>
								Design Systems & UI Libraries: Tailwind, Material, Bootstrap, Ag-Grid, D3, enterprise design systems
							</li>
							<li>Testing & QA: Jest, Mocha, Cypress, Rspec, unit/integration/e2e testing, CI-driven testing workflows</li>
						</ul>
					</li>
					<li>
						<h4 className='text-l mb-2'>Backend & Full Stack</h4>
						<ul className='list-inside list-disc space-y-1'>
							<li>Languages & Frameworks: Node.js, Express, Koa, Ruby on Rails</li>
							<li>Databases: PostgreSQL, Sequelize, TypeORM, MongoDB, ActiveRecord</li>
							<li>
								Real-time & Cloud Infrastructure: Socket.io, Redis, GCP, AWS, Cloud Functions / Lambdas, Docker
							</li>
							<li>API Design: REST, GraphQL</li>
						</ul>
					</li>
					<li>
						<h4 className='text-l mb-2'>Architecture & Patterns</h4>
						<ul className='list-inside list-disc space-y-1'>
							<li>Micro Frontend Architecture</li>
							<li>Monorepo & modular design</li>
							<li>Cloud-based architecture & deployment pipelines</li>
							<li>Internationalization (i18n) and localization (l10n)</li>
							<li>Performance optimization and codebase modernization</li>
						</ul>
					</li>
					<li>
						<h4 className='text-l mb-2'>Leadership & Collaboration</h4>
						<ul className='list-inside list-disc space-y-1'>
							<li>Technical leadership and roadmap planning</li>
							<li>Cross-functional collaboration with product, design, and business teams</li>
							<li>Mentorship, coaching, and performance review cycles</li>
							<li>Hiring, onboarding, and team-building</li>
							<li>1:1s, career development support, and engineering culture cultivation</li>
						</ul>
					</li>
					<li>
						<h4 className='text-l mb-2'>Dev Tools & Miscellaneous</h4>
						<ul className='list-inside list-disc space-y-1'>
							<li>Git, GitHub, GitHub Actions</li>
							<li>Docker, CLI tools, VS Code</li>
							<li>Stripe integration</li>
							<li>Agile & general planning tools (Jira, Notion, etc.)</li>
						</ul>
					</li>
				</ul>
			</Section>
			<Section title='Side Projects & Experiments'>
				<div class='flex flex-col gap-4'>
					<ProjectCard>
						<div className='flex items-center gap-2'>
							<h4>Tower Time</h4>
							<LinkButton title='Play Tower Time' icon={faPlay} link='https://towertime.netlify.app/' size='sm' />
						</div>
						<p>
							When I was first learning JS, I built the web game I always wanted to play growing up - a simple tower
							defense that uses path finding around the towers the players built - suggesting creativity in tower
							placement to create a maze for the critters crossing the map. I used OOP for game objects, built custom
							sprites to animate as well as all the pixel art for the game, had awesome community support (someone even
							sent me a soundtrack they made for it!), and couldn't stop adding little QOL improvements and cleaning up
							the code (it was all in vanilla JS, yikes). It was a blast, and I learned so many things for the first
							time, like tight vs. loose coupling, the actual payoff and time sink of refactors, the sometimes
							inescapable reality of math, gathering user feedback, and so much more. I may or may not still go back and
							play it from time to time... and think about how great of a little mobile game it could grow up to be, but
							mostly, it was a small passion project that gave me more real-world insight than I could have ever
							anticipated, and had such a much positive response that I have since been seeking that same rush from
							awesome UX across the board, although I may always be chasing that first high.
						</p>
					</ProjectCard>
					<ProjectCard>
						<div className='flex items-center gap-2'>
							<h4>Flipcamp</h4>
							<LinkButton title='Flipcamp Repo' icon={faGitAlt} link='https://github.com/ahrampy/Flipcamp' size='sm' />
						</div>
						<p>
							Ever wish there was a way to find awesome, low cost private camping spots all across the US? Well,
							fortunately Hipcamp exists and does a great job. To get some practice with a RoR + React + Redux (all the
							'R's), I made a mini clone of that site. I learned about some of the classic scaling issues with React
							components, as well as the joys of the React + npm ecosystems.
						</p>
					</ProjectCard>
					<ProjectCard>
						<div className='flex items-center gap-2'>
							<h4>Mustachions</h4>
							<LinkButton
								title='Mustachions Repo'
								icon={faGitAlt}
								link='https://github.com/ahrampy/Mustachions'
								size='sm'
							/>
						</div>
						<p>
							After my foray into web games, I was chatting with a friend about some of the highs and lows, and we
							decided to give it another go, this time a bit more of a progressive, art-focused vibe-y mobile game. It
							gave me a chance to see what some of the game focused logic could look like in React Native, as well as
							see what tooling Expo had to offer (the answer was a lot). We never got it off the ground, but it was
							blast to animate little plants swaying in the window, and to figure out the math behind correctly scaling
							an isometric room to different screen sizes.
						</p>
					</ProjectCard>
				</div>
			</Section>
		</div>
	);
};
