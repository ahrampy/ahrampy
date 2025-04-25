export const SchemeSelector = ({
	show,
	useDark,
	setUseDark,
}: {
	show: boolean;
	useDark: boolean;
	setUseDark: (useDark: boolean) => void;
}) => {
	return (
		<div className={`flex justify-end gap-1 transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
			<button className='flex items-center gap-2 p-1' onClick={() => setUseDark(false)}>
				<div className={`h-2 w-2 border border-secondary dark:border-primary ${!useDark && 'bg-secondary'}`} />
				<p>light</p>
			</button>
			<button className='flex items-center gap-2 p-1' onClick={() => setUseDark(true)}>
				<div className={`h-2 w-2 border border-secondary dark:border-primary ${useDark && 'bg-primary'}`} />
				<p>dark</p>
			</button>
		</div>
	);
};
