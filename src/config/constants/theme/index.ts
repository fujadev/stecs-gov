import defaultTheme from 'tailwindcss/defaultTheme';
import type { ThemeConfig } from 'tailwindcss/types/config';
import { borderRadius } from './borderRadius';
import { colors } from './colors';
import { elevations } from './elevations';
import { flexShrinkGrow } from './flex';
import { convertFontStyleToTailwindConfig, fontStyles, sansFontFamily } from './font';
import { spacing } from './spacing';

/**
 * Any changes to this theme require restarting the dev server to take effect. You may also want to restart
 * all of your editor extensions that use Tailwind CSS IntelliSense/eslint.
 */
export const tailwindTheme = {
	...defaultTheme,
	aspectRatio: {
		'16/9': '16/9',
		'3/4': '3/4',
		'4/3': '4/3',
	},
	borderRadius: borderRadius.web,
	borderWidth: {
		...defaultTheme.borderWidth,
		1: '1px',
		1.5: '1.5px',
	},
	boxShadow: elevations(),
	colors,
	extend: {
		width: {
			'1/10': '10%',
			'1/2': '50%',
			'3/10': '30%',
			'3/4': '75%',
			'3/5': '60%',
			'4/5': '80%',
			'7/10': '70%',
			'9/10': '90%',
		},
	},
	flexGrow: flexShrinkGrow,
	flexShrink: flexShrinkGrow,
	fontFamily: {
		sans: sansFontFamily,
	},
	fontSize: convertFontStyleToTailwindConfig(fontStyles.rem) as unknown as ThemeConfig['fontSize'],
	outlineColor: colors.textPrimary,
	spacing,
};

export type { BorderRadius } from './borderRadius';
export type { ColorValue, PaletteColors } from './colors';
export type { FlexShrinkGrowNumber } from './flex';
export type { FontSize } from './font';
export type { Spacing } from './spacing';
export { colors, elevations, flexShrinkGrow, fontStyles, sansFontFamily, spacing };
