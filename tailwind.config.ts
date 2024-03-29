import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
		'mobile-s': '400px',
		'mobile': '650px',
		'mobile-l': '750px',
		'tablet': '900px',
		'tablet-l': '1000px',
		'laptop': '1200px',
		'laptop-l': '1550px',
		'desktop': '1900px',
		'desktop-l': '2100px',
	},
    extend: {
		backgroundImage: {
			"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
		},
		colors: {
			'cyan': '#22DFFC',
			'dusk': '#393B3F',
			'green': '#48E07E',
			'grey-dark': '#4D4D4D',
			'grey-light': '#CCCCCC',
			'grey-x-dark': '#333333',
			'grey-x-light': '#E6E6E6',
			'grey': '#808080',
			'midnight': '#191B21',
			'off-white': '#F2F2F2',
			'red': '#FF6B6B',
			'twilight': '#21242B',
			'white': '#FFFFFF',
		},
		fontFamily: {
			primary: ['var(--font-primary)'],
		},
		fontSize: {
			h1: 'var(--h1)',
			h2: 'var(--h2)',
			h3: 'var(--h3)',
			h4: 'var(--h4)',
			h5: 'var(--h5)',
			h6: 'var(--h6)',
			small: 'var(--font-small)',
			standard: 'var(--font-standard)',
			large: 'var(--font-large)',
			mega: 'var(--font-mega)',
			giga: 'var(--font-giga)',
			ludicrous: 'var(--font-ludicrous)',
		},
		fontWeight: {
			'thin': '100',
			'extralight': '200',
			'light': '300',
			'regular': '400',
			'medium': '500',
			'semibold': '600',
			'bold': '700',
			'extrabold': '800',
			'black': '900',
		},
		spacing: {
			'gutter-large': 'var(--gutter-large)',
			'gutter-nav': 'var(--gutter-small)',
			'gutter-small': 'var(--gutter-small)',
			'gutter': 'var(--gutter-medium)',
			'section': 'var(--section-spacing)',
		},
    },
  },
  plugins: [],
};
export default config;
