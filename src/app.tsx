import { useState, useEffect, useRef } from 'preact/hooks';
import { SchemeSelector } from './components/SchemeSelector';
import { Header } from './Layout/Header';
import { MainContent } from './Layout/MainContent';

export function App() {
	const [useDark, setUseDark] = useState(
		window.matchMedia('(prefers-color-scheme: dark)').matches
	);
	const [visible, setVisible] = useState(false);
	const [activeSection, setActiveSection] = useState('about');
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setTimeout(() => setVisible(true), 100);
	}, []);

	return (
		<div className={useDark ? 'dark' : ''}>
			<div className='relative h-screen overflow-hidden bg-primary text-secondary transition-colors dark:bg-secondary dark:text-primary'>
				<a
					href='#about'
					className='absolute left-4 top-4 z-50 -translate-y-full bg-primary px-4 py-2 font-pixel text-sm text-accent opacity-0 transition-transform focus:translate-y-0 focus:opacity-100 dark:bg-secondary'
				>
					Skip to main content
				</a>
				<div
					className={`flex h-full transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
				>
					{/* Sticky sidebar — desktop only */}
					<aside className='hidden h-full w-[36%] shrink-0 flex-col justify-between px-10 py-14 lg:flex xl:w-[30%]'>
						<Header activeSection={activeSection} />
						<SchemeSelector useDark={useDark} setUseDark={setUseDark} />
					</aside>

					{/* Scrollable content */}
					<main
						ref={scrollRef}
						className='h-full flex-1 overflow-y-auto px-8 py-10 lg:px-14 lg:py-14'
					>
						{/* Mobile header */}
						<div className='mb-10 lg:hidden'>
							<Header activeSection={activeSection} mobile />
						</div>

						<MainContent
							scrollRef={scrollRef}
							setActiveSection={setActiveSection}
						/>
					</main>
				</div>
			</div>
		</div>
	);
}
