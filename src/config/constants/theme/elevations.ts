import type { ValueOf } from 'type-fest';
import type { ColorValue } from './colors';
import { colors } from './colors';

type WebShadow = `${number}px ${number}px ${number}px ${ColorValue} ${number}`;

export type Elevations = 'four' | 'one' | 'three' | 'two';

const nativeElevations = {
	four: {
		elevation: 4,
		shadowColor: colors.navy[900],
		shadowOffset: { height: -4, width: 0 },
		shadowOpacity: 0.6,
		shadowRadius: 42,
	},
	one: {
		elevation: 1,
		shadowColor: colors.navy[900],
		shadowOffset: { height: 4, width: 4 },
		shadowOpacity: 0.08,
		shadowRadius: 15,
	},
	three: {
		elevation: 3,
		shadowColor: colors.navy[900],
		shadowOffset: { height: -4, width: 0 },
		shadowOpacity: 0.2,
		shadowRadius: 42,
	},
	two: {
		elevation: 2,
		shadowColor: colors.navy[900],
		shadowOffset: { height: 0, width: 0 },
		shadowOpacity: 0.2,
		shadowRadius: 40,
	},
};

const hexToRgba = (hex: `#${string}`, opacity: number) => {
	// Expand shorthand form (e.g. '03F') to full form (e.g. '0033FF')
	// eslint-disable-next-line
	const extendedHex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_m, r, g, b) => r + r + g + g + b + b);
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(extendedHex);
	return result ? `rgba(${parseInt(result?.[1] ?? '', 16)}, ${parseInt(result?.[2] ?? '', 16)}, ${parseInt(result?.[3] ?? '', 16)}, ${opacity})` : '';
};

const convertToCSSBoxShadow = (config: ValueOf<typeof nativeElevations>): WebShadow =>
	`${config.shadowOffset.width}px ${config.shadowOffset.height}px ${config.shadowRadius}px ${hexToRgba(config.shadowColor, config.shadowOpacity)}` as WebShadow;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/explicit-module-boundary-types
export const elevations = () => ({
	four: convertToCSSBoxShadow(nativeElevations.four),
	one: convertToCSSBoxShadow(nativeElevations.one),
	three: convertToCSSBoxShadow(nativeElevations.three),
	two: convertToCSSBoxShadow(nativeElevations.two),
});
