import { ComponentChildren } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { SchemeSelector } from './SchemeSelector';

export const Container = ({ children }: { children: ComponentChildren }) => {
	const [useDark, setUseDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

	const [showIntro, setShowIntro] = useState(true);
	const [finishIntro, setFinishIntro] = useState(false);

	useEffect(() => {
		setTimeout(() => setShowIntro(false), 1500);
		setTimeout(() => setFinishIntro(true), 2500);
	}, []);

	return (
		<div className={useDark ? 'dark' : ''}>
			<div
				className='flex h-screen w-full items-center justify-center bg-primary text-secondary transition-all dark:bg-secondary dark:text-primary'
				style={{
					backgroundImage: `url("https://www.transparenttextures.com/patterns/back-pattern.png")`,
					backgroundRepeat: 'repeat',
				}}
			>
				<div className='h-full w-full px-12 pb-16 pt-5'>
					<SchemeSelector show={finishIntro} useDark={useDark} setUseDark={setUseDark} />
					<div className='relative flex h-full w-full border border-secondary dark:border-primary'>
						<div className={finishIntro ? 'p-5' : ''}>
							<div
								className={`absolute flex h-full w-full items-center justify-center transition-opacity duration-1000 ${showIntro ? 'opacity-100' : 'opacity-0'} ${finishIntro ? 'hidden' : ''}`}
							>
								Adrian Rampy: Portfolio
							</div>
							<div className={`transition-opacity duration-1000 ${finishIntro ? 'opacity-100' : 'opacity-0'}`}>
								{children}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
