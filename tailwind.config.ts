/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#FAF9F7',
				secondary: '#1C1917',
				accent: 'hsl(var(--accent-hue) var(--accent-sat) var(--accent-lit) / <alpha-value>)',
			},
			fontWeight: {
				light: '200',
				normal: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
			},
		},
	},
	plugins: [],
};
