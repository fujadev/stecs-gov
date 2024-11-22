const nativeBorderRadius = {
  full: '100%',
  lg: 16,
  md: 8,
  sm: 4,
  xl: 32,
  xxl: 128,
  xxxl: 320,
};
const webBorderRadius = {
  full: '100%',
  lg: '16px',
  md: '8px',
  sm: '4px',
  xl: '32px',
  xxl: '128px',
  xxxl: '320px',
};

export const borderRadius = {
  native: nativeBorderRadius,
  web: webBorderRadius,
};

export type BorderRadius = keyof typeof nativeBorderRadius;
