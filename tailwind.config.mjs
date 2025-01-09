import { slide } from 'astro/virtual-modules/transitions.js';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': 'rgb(73,110,28)',
				'accent': '#0D1C0D',
				'header': 'rgba(50,50,50,0.9)',
				'bg-secondary': 'rgba(50,50,50,1)',
			},
			backgroundImage: {
				'hero': "url('/banner1.webp')",
				'bgblack': "url('/black-bg.webp')",
			},
			fontFamily: {
				'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
			},
			keyframes: {
				slideIn: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				slideRight: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' },
				},
			},
			animation: {
				slideIn: 'slideIn 1s ease-out',
				slideRight: 'slideRight 1s ease-out',
			},
		},
	},
	plugins: [],
}
