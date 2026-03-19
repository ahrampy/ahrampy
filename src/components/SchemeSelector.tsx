export const SchemeSelector = ({
	show = true,
	useDark,
	setUseDark,
}: {
	show?: boolean;
	useDark: boolean;
	setUseDark: (useDark: boolean) => void;
}) => {
	return (
		<div className={`flex items-center gap-1 font-pixel text-sm transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
			<button className='relative p-1' onClick={() => setUseDark(false)}>
				{!useDark && <div className='absolute -top-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 bg-accent' />}
				light
			</button>
			<span className='opacity-40'>/</span>
			<button className='relative p-1' onClick={() => setUseDark(true)}>
				dark
				{useDark && <div className='absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 bg-accent' />}
			</button>
		</div>
	);
};
