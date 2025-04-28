import { ComponentChildren } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { SchemeSelector } from '../components/SchemeSelector';

export const Container = ({ children }: { children: ComponentChildren }) => {
	const [useDark, setUseDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

	const [showIntro, setShowIntro] = useState(true);
	const [finishIntro, setFinishIntro] = useState(false);

	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [mobileScrolled, setMobileScrolled] = useState(false);

	useEffect(() => {
		setTimeout(() => setShowIntro(false), 1500);
		setTimeout(() => setFinishIntro(true), 2500);
	}, []);

	useEffect(() => {
		const container = scrollContainerRef.current;
		if (!container) return;

		const handleScroll = () => {
			if (window.innerWidth < 640) {
				setMobileScrolled(container.scrollTop > 0);
			} else {
				setMobileScrolled(false);
			}
		};

		container.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleScroll);
		handleScroll();

		return () => {
			container.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, []);

	return (
		<div className={useDark ? 'dark' : ''}>
			<div
				className='flex h-screen w-full items-center justify-center bg-primary text-secondary transition-all dark:bg-secondary dark:text-primary'
				style={{
					backgroundImage: `url("https://www.transparenttextures.com/patterns/${useDark ? 'back-pattern' : 'arches'}.png")`,
					backgroundRepeat: 'repeat',
				}}
			>
				<div className='relative h-full w-full p-2 sm:p-12'>
					<div className='absolute -right-11 top-24 z-10 rotate-90 px-4'>
						<SchemeSelector show={finishIntro && !mobileScrolled} useDark={useDark} setUseDark={setUseDark} />
					</div>
					<div
						ref={scrollContainerRef}
						className='relative flex h-full w-full overflow-y-scroll text-center sm:text-left'
					>
						<div className={finishIntro ? 'w-full p-5' : ''}>
							<div
								className={`absolute flex h-1/2 w-1/2 items-center justify-center transition-opacity duration-1000 ${showIntro ? 'opacity-100' : 'opacity-0'} ${finishIntro ? 'hidden' : ''}`}
							>
								Adrian Rampy: Portfolio
							</div>
							<div
								className={`flex w-full flex-col gap-6 transition-opacity duration-1000 ${finishIntro ? 'opacity-100' : 'opacity-0'}`}
							>
								{children}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
