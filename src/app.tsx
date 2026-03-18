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
			<div className='h-screen overflow-hidden bg-primary text-secondary transition-colors dark:bg-secondary dark:text-primary'>
				<div
					className={`flex h-full transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
				>
					{/* Sticky sidebar — desktop only */}
					<aside className='hidden h-full w-[36%] shrink-0 flex-col justify-between px-10 py-14 lg:flex xl:w-[32%]'>
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
