import type { Config } from 'tailwindcss';
import { tailwindTheme } from './src/config/constants/theme';
import { PRIMARY, DANGER, SECONDARY, GREEN, WARNING, DARK, SUB, MAIN, NEUTRAL } from './src/config/constants/theme/color';

const preset = {
	// darkMode: 'class',
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	theme: tailwindTheme,
};

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	// Required to use Mantine
	important: true,
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	presets: [preset],

	theme: {
		extend: {
			fontFamily: {
				aneonik: ['var(--font-aneonik)'],
			},
			colors: {
				primary: PRIMARY,
				warning: WARNING,
				success: GREEN,
				green: GREEN,
				danger: DANGER,
				secondary: SECONDARY,
				dark: DARK,
				sub: SUB,
				main: MAIN,
				neutral: NEUTRAL,
			},
			fontSize: {
				sm: ['14px', '20px'],
				base: ['16px', '24px'],
				lg: ['18px', '28px'],
				mg: ['20px', '24px'],
				xl: ['24px', '32px'],
			},
			screens: {
				sm: '564px',
			},
		},
	},
};

export default config;
