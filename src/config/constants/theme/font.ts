import { fontFamily as defaultFontFamily } from 'tailwindcss/defaultTheme';

const defaultFont = 'IBM Plex Sans';
// export const sansFontFamily = [defaultFont, ...defaultFontFamily.sans];
export const sansFontFamily = [];

export const fontStyles = {
	px: {
		accent: { fontSize: 60, fontWeight: 600, lineHeight: 72 },
		caption: { fontSize: 12, fontWeight: 600, lineHeight: 18 },
		captionBold: { fontSize: 12, fontWeight: 600, lineHeight: 18 },
		h1: { fontSize: 32, fontWeight: 600, lineHeight: 40 },
		h2: { fontSize: 24, fontWeight: 600, lineHeight: 32 },
		h3: { fontSize: 20, fontWeight: 600, lineHeight: 24 },
		h4: { fontSize: 18, fontWeight: 600, lineHeight: 27 },
		h5: { fontSize: 16, fontWeight: 600, lineHeight: 24 },
		h6: { fontSize: 14, fontWeight: 600, lineHeight: 21 },
		'p-lg': { fontSize: 18, fontWeight: 400, lineHeight: 27 },
		'p-md': { fontSize: 16, fontWeight: 400, lineHeight: 24 },
		'p-sm': { fontSize: 14, fontWeight: 400, lineHeight: 21 },
	},

	rem: {
		accent: {
			fontSize: '3.75rem',
			fontWeight: '600',
			lineHeight: '4.5rem',
		},
		caption: { fontSize: '0.75rem', fontWeight: '400', lineHeight: '1.125rem' },
		captionBold: { fontSize: '0.75rem', fontWeight: '600', lineHeight: '1.125rem' },
		h1: { fontSize: '2rem', fontWeight: '600', lineHeight: '3rem' },
		h2: { fontSize: '1.5rem', fontWeight: '600', lineHeight: '2.25rem' },
		h3: { fontSize: '1.25rem', fontWeight: '600', lineHeight: '1.875rem' },
		h4: { fontSize: '1.125rem', fontWeight: '600', lineHeight: '1.6875rem' },
		h5: { fontSize: '1rem', fontWeight: '600', lineHeight: '1.5rem' },
		h6: { fontSize: '0.875rem', fontWeight: '600', lineHeight: '1.3125rem' },
		'p-lg': { fontSize: '1.125rem', fontWeight: '400', lineHeight: '1.6875rem' },
		'p-md': { fontSize: '1rem', fontWeight: '400', lineHeight: '1.5rem' },
		'p-sm': { fontSize: '0.875rem', fontWeight: '400', lineHeight: '1.3125rem' },
	},
} as const;

export type FontSize = keyof (typeof fontStyles)['px'];

type TailwindFontStyleConfig = [
	fontSize: string,
	configuration: Partial<{
		fontWeight: number | string;
		letterSpacing?: string;
		lineHeight: string;
	}>,
];

export const convertFontStyleToTailwindConfig = (styles: (typeof fontStyles)['rem']): TailwindFontStyleConfig =>
	Object.entries(styles).reduce((accumulator, [key, value]) => {
		const { fontSize, ...otherProperties } = value; // Destructure to separate fontSize and the rest
		// @ts-expect-error TS can't infer
		// eslint-disable-next-line fp/no-mutation
		accumulator[key] = [fontSize, otherProperties]; // Form the desired array
		return accumulator;
	}, {} as TailwindFontStyleConfig);
