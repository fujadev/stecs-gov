import type { ValueOf } from 'type-fest';

const nativeSpacing = {
  lg: 24,
  md: 16,
  none: 0,
  sm: 8,
  xl: 32,
  xs: 4,
  xxl: 40,
  xxxl: 80,
};

// Not rem because we want spacing to be consistent regardless of the base font size
const webSpacing = {
  lg: '24px',
  md: '16px',
  none: '0px',
  sm: '8px',
  xl: '32px',
  xs: '4px',
  xxl: '40px',
  xxxl: '80px',
};

export const spacing = webSpacing satisfies Record<keyof typeof nativeSpacing, ValueOf<typeof webSpacing>>;

export type Spacing = keyof typeof nativeSpacing;
