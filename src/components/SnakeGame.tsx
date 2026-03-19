import { useEffect, useRef, useState, useCallback } from 'preact/hooks';

type Point = { x: number; y: number };
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const GRID = 20;
const CELL = 12;
const SIZE = GRID * CELL;
const TICK_MS = 110;

const opposite: Record<Direction, Direction> = {
	UP: 'DOWN',
	DOWN: 'UP',
	LEFT: 'RIGHT',
	RIGHT: 'LEFT',
};

const randomFood = (snake: Point[]): Point => {
	let p: Point;
	do {
		p = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) };
	} while (snake.some((s) => s.x === p.x && s.y === p.y));
	return p;
};

export const SnakeGame = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const stateRef = useRef({
		snake: [{ x: 10, y: 10 }] as Point[],
		food: { x: 15, y: 10 } as Point,
		dir: 'RIGHT' as Direction,
		nextDir: 'RIGHT' as Direction,
		running: false,
		gameOver: false,
		score: 0,
	});
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [started, setStarted] = useState(false);
	const rafRef = useRef(0);
	const lastTickRef = useRef(0);
	const containerRef = useRef<HTMLDivElement>(null);

	const getAccentColor = useCallback(() => {
		const root = document.documentElement;
		const hue = getComputedStyle(root).getPropertyValue('--accent-hue').trim() || '30';
		const sat = getComputedStyle(root).getPropertyValue('--accent-sat').trim() || '45%';
		const lit = getComputedStyle(root).getPropertyValue('--accent-lit').trim() || '42%';
		return { hue: parseFloat(hue), sat, lit };
	}, []);

	const draw = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const { snake, food } = stateRef.current;
		const { hue, sat, lit } = getAccentColor();

		// Clear
		ctx.clearRect(0, 0, SIZE, SIZE);

		// Grid dots
		ctx.fillStyle = `hsl(${hue} ${sat} ${lit} / 0.08)`;
		for (let x = 0; x < GRID; x++) {
			for (let y = 0; y < GRID; y++) {
				ctx.fillRect(x * CELL + CELL / 2 - 0.5, y * CELL + CELL / 2 - 0.5, 1, 1);
			}
		}

		// Food — pulsing
		const pulse = 0.6 + 0.4 * Math.sin(Date.now() / 200);
		ctx.fillStyle = `hsl(${(hue + 180) % 360} ${sat} ${lit} / ${pulse})`;
		ctx.fillRect(food.x * CELL + 1, food.y * CELL + 1, CELL - 2, CELL - 2);

		// Snake
		snake.forEach((seg, i) => {
			const alpha = 1 - (i / snake.length) * 0.5;
			ctx.fillStyle = `hsl(${hue} ${sat} ${lit} / ${alpha})`;
			const inset = i === 0 ? 0 : 1;
			ctx.fillRect(
				seg.x * CELL + inset,
				seg.y * CELL + inset,
				CELL - inset * 2,
				CELL - inset * 2
			);
		});
	}, [getAccentColor]);

	const reset = useCallback(() => {
		stateRef.current = {
			snake: [{ x: 10, y: 10 }],
			food: { x: 15, y: 10 },
			dir: 'RIGHT',
			nextDir: 'RIGHT',
			running: true,
			gameOver: false,
			score: 0,
		};
		lastTickRef.current = 0;
		setScore(0);
		setGameOver(false);
		setStarted(true);
	}, []);

	const tick = useCallback(() => {
		const s = stateRef.current;
		if (!s.running) return;

		s.dir = s.nextDir;
		const head = { ...s.snake[0] };

		switch (s.dir) {
			case 'UP': head.y--; break;
			case 'DOWN': head.y++; break;
			case 'LEFT': head.x--; break;
			case 'RIGHT': head.x++; break;
		}

		// Wall collision — wrap around
		if (head.x < 0) head.x = GRID - 1;
		if (head.x >= GRID) head.x = 0;
		if (head.y < 0) head.y = GRID - 1;
		if (head.y >= GRID) head.y = 0;

		// Self collision
		if (s.snake.some((seg) => seg.x === head.x && seg.y === head.y)) {
			s.running = false;
			s.gameOver = true;
			setGameOver(true);
			return;
		}

		s.snake.unshift(head);

		// Eat food
		if (head.x === s.food.x && head.y === s.food.y) {
			s.score++;
			setScore(s.score);
			s.food = randomFood(s.snake);
		} else {
			s.snake.pop();
		}
	}, []);

	const loop = useCallback(
		(time: number) => {
			if (!stateRef.current.running) {
				draw();
				return;
			}
			if (time - lastTickRef.current >= TICK_MS) {
				lastTickRef.current = time;
				tick();
			}
			draw();
			rafRef.current = requestAnimationFrame(loop);
		},
		[tick, draw]
	);

	const startGame = useCallback(() => {
		reset();
		rafRef.current = requestAnimationFrame(loop);
	}, [reset, loop]);

	// Keyboard controls
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const s = stateRef.current;

			const dirMap: Record<string, Direction> = {
				ArrowUp: 'UP',
				ArrowDown: 'DOWN',
				ArrowLeft: 'LEFT',
				ArrowRight: 'RIGHT',
				w: 'UP',
				s: 'DOWN',
				a: 'LEFT',
				d: 'RIGHT',
			};

			const newDir = dirMap[e.key];
			if (newDir && s.running && newDir !== opposite[s.dir]) {
				e.preventDefault();
				s.nextDir = newDir;
				return;
			}

			if (e.key === ' ' || e.key === 'Enter') {
				// Only handle if container or canvas is focused
				if (
					containerRef.current?.contains(document.activeElement) ||
					document.activeElement === containerRef.current
				) {
					e.preventDefault();
					if (!s.running) {
						startGame();
					}
				}
			}
		};

		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	}, [startGame]);

	// Touch / swipe controls
	useEffect(() => {
		const el = canvasRef.current;
		if (!el) return;

		let startX = 0;
		let startY = 0;

		const onTouchStart = (e: TouchEvent) => {
			startX = e.touches[0].clientX;
			startY = e.touches[0].clientY;
		};

		const onTouchEnd = (e: TouchEvent) => {
			const s = stateRef.current;
			if (!s.running) {
				startGame();
				return;
			}

			const dx = e.changedTouches[0].clientX - startX;
			const dy = e.changedTouches[0].clientY - startY;
			if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;

			let newDir: Direction;
			if (Math.abs(dx) > Math.abs(dy)) {
				newDir = dx > 0 ? 'RIGHT' : 'LEFT';
			} else {
				newDir = dy > 0 ? 'DOWN' : 'UP';
			}

			if (newDir !== opposite[s.dir]) {
				s.nextDir = newDir;
			}
		};

		el.addEventListener('touchstart', onTouchStart, { passive: true });
		el.addEventListener('touchend', onTouchEnd, { passive: true });
		return () => {
			el.removeEventListener('touchstart', onTouchStart);
			el.removeEventListener('touchend', onTouchEnd);
		};
	}, [startGame]);

	// Initial draw
	useEffect(() => {
		draw();
		return () => cancelAnimationFrame(rafRef.current);
	}, [draw]);

	return (
		<div
			ref={containerRef}
			tabIndex={0}
			className='flex flex-col items-center gap-3 outline-none focus:outline-none'
		>
			<div className='flex w-full items-center justify-between'>
				<span className='font-pixel text-xs uppercase opacity-60'>
					{gameOver ? 'Game Over' : started ? 'Playing' : 'Snake'}
				</span>
				<span className='font-pixel text-xs text-accent'>{score}</span>
			</div>
			<div className='pixel-border relative border-accent/20 bg-accent/[0.04] p-2'>
				<canvas
					ref={canvasRef}
					width={SIZE}
					height={SIZE}
					className='block'
					style={{ width: SIZE, height: SIZE, imageRendering: 'pixelated' }}
				/>
				{!started && (
					<div
						className='absolute inset-0 flex cursor-pointer items-center justify-center bg-primary/60 dark:bg-secondary/60'
						onClick={() => { startGame(); containerRef.current?.focus(); }}
					>
						<span className='font-pixel text-sm text-accent'>Click to play</span>
					</div>
				)}
				{gameOver && (
					<div
						className='absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-2 bg-primary/70 dark:bg-secondary/70'
						onClick={() => { startGame(); containerRef.current?.focus(); }}
					>
						<span className='font-pixel text-sm text-accent'>
							Score: {score}
						</span>
						<span className='font-pixel text-xs opacity-50'>Click to retry</span>
					</div>
				)}
			</div>
			<p className='text-center font-pixel text-[10px] uppercase opacity-40'>
				Arrow keys or WASD to move &middot; Swipe on mobile
			</p>
		</div>
	);
};
