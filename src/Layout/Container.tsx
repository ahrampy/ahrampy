import { ComponentChildren } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { SchemeSelector } from '../components/SchemeSelector';

export const Container = ({ children }: { children: ComponentChildren }) => {
	const [useDark, setUseDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
	const [visible, setVisible] = useState(false);

	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [mobileScrolled, setMobileScrolled] = useState(false);

	useEffect(() => {
		setTimeout(() => setVisible(true), 100);
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
			<div className='flex h-screen w-full items-center justify-center bg-primary text-secondary transition-all dark:bg-secondary dark:text-primary'>
				<div className='relative h-full w-full p-2 sm:p-12'>
					<div className='absolute -right-11 top-24 z-10 rotate-90 px-4'>
						<SchemeSelector show={visible && !mobileScrolled} useDark={useDark} setUseDark={setUseDark} />
					</div>
					<div
						ref={scrollContainerRef}
						className='relative flex h-full w-full overflow-y-scroll text-center sm:text-left'
					>
						<div className={`w-full p-5 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
							<div className='flex w-full flex-col gap-6'>{children}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
