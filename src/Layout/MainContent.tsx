import { Section } from '../components/Section';

export const MainContent = () => {
	return (
		<div className='flex h-full w-full flex-col gap-4 overflow-hidden pb-4'>
			<Section
				title='About Me'
				startsExpanded
				content="I've always loved building things, whether it is an app, furniture, or going wild with a box of Legos. My journey into software began with designing simple web pages, and over time it grew into a full-blown passion for creating thoughtful, user-centered experiences. I've taught, mentored, and led engineering teams, and I thrive when combining technical execution with human connection. When I'm not coding, I'm probably exploring outside, sharing food with friends, or learning a new game."
			/>
			<Section
				title='Skills'
				content={
					<div className=''>
						<ul className='space-y-4'>
							<li>
								<h4 className='text-l mb-2'>Frontend Development</h4>
								<ul className='list-inside list-disc space-y-1'>
									<li>
										Languages & Frameworks: React, React Native, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS,
										Ag-Grid
									</li>
									<li>
										Design Systems & UI Libraries: Custom UI components, enterprise design systems, accessibility
										(ARIA), responsive/mobile-first design
									</li>
									<li>Testing & QA: Jest, Cypress, unit/integration/e2e testing, CI-driven testing workflows</li>
								</ul>
							</li>
							<li>
								<h4 className='text-l mb-2'>Backend & Full Stack</h4>
								<ul className='list-inside list-disc space-y-1'>
									<li>Languages & Frameworks: Node.js, Express, Koa, Ruby on Rails</li>
									<li>Databases: PostgreSQL, Sequelize</li>
									<li>
										Real-time & Cloud Infrastructure: Socket.io, Redis, Google Cloud Platform, AWS, Cloud Functions,
										Docker
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
									<li>Agile & sprint planning tools (Jira, Notion, etc.)</li>
								</ul>
							</li>
						</ul>
					</div>
				}
			/>
		</div>
	);
};
