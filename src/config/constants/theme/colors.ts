// type ColorShade = 100 | 200 | 300 | 400 | 50 | 500 | 600 | 700 | 800 | 900 | 950;

import type { ValueOf } from 'type-fest';

const blue = {
  100: '#def1ff',
  200: '#b5e6ff',
  300: '#74d2ff',
  400: '#2abcff',
  50: '#eff9ff',
  500: '#00a4f9',
  600: '#0083d6',
  700: '#0067ad',
  800: '#00588e',
  900: '#054975',
  950: '#032b49',
} as const;
const cyan = {
  100: '#cff9fe',
  200: '#a5f2fc',
  300: '#67e8f9',
  400: '#22d6ee',
  50: '#ecfdff',
  500: '#06bcd4',
  600: '#089eb2',
  700: '#0e8190',
  800: '#156a75',
  900: '#165a63',
  950: '#083d44',
} as const;

const green = {
  100: '#dcfce8',
  200: '#bbf7d1',
  300: '#86efad',
  400: '#4ade81',
  50: '#f0fdf5',
  500: '#22c55f',
  600: '#16a34b',
  700: '#15803d',
  800: '#166534',
  900: '#14532c',
  950: '#052e14',
} as const;

const lime = {
  100: '#f8fdca',
  200: '#eefb86',
  300: '#e3f660',
  400: '#d0eb30',
  50: '#fdffe6',
  500: '#b2d111',
  600: '#8ba709',
  700: '#687f0c',
  800: '#536410',
  900: '#465512',
  950: '#242f04',
} as const;

const navy = {
  100: '#e8edf6',
  200: '#ccd8eb',
  300: '#9fb9da',
  400: '#6c94c4',
  50: '#f4f6fb',
  500: '#4977ae',
  600: '#375d92',
  700: '#2e4c76',
  800: '#294163',
  900: '#23334c',
  950: '#1a2437',
} as const;

const neutral = {
  100: '#efefef',
  200: '#dcdcdc',
  300: '#bdbdbd',
  400: '#989898',
  50: '#fafafa',
  500: '#7c7c7c',
  600: '#656565',
  700: '#525252',
  800: '#464646',
  900: '#3d3d3d',
  950: '#292929',
} as const;

const pink = {
  100: '#f9eaf0',
  200: '#f4d6e1',
  300: '#e9a7be',
  400: '#e086a3',
  50: '#fbf4f7',
  500: '#d26283',
  600: '#bf4362',
  700: '#a4324b',
  800: '#882c3f',
  900: '#722938',
  950: '#45121c',
} as const;

const red = {
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  50: '#fef2f2',
  500: '#ef4444',
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
  950: '#450a0a',
} as const;

const rose = {
  100: '#fceae4',
  200: '#fad9ce',
  300: '#f4af99',
  400: '#ef967a',
  50: '#fdf5f3',
  500: '#e37450',
  600: '#cf5933',
  700: '#ae4827',
  800: '#903e24',
  900: '#783824',
  950: '#411a0e',
} as const;

const slate = {
  100: '#ebeff3',
  200: '#d3dce4',
  300: '#adbecc',
  400: '#819baf',
  50: '#f6f8f9',
  500: '#617f96',
  600: '#486075',
  700: '#3f5365',
  800: '#374755',
  900: '#313d49',
  950: '#212830',
} as const;

const teal = {
  100: '#d5f7f8',
  200: '#b1edf0',
  300: '#8ee3e9',
  400: '#3ec6d2',
  50: '#effcfb',
  500: '#22aab8',
  600: '#1f899b',
  700: '#206f7e',
  800: '#225b68',
  900: '#204c59',
  950: '#10313c',
} as const;

const violet = {
  100: '#f4eef9',
  200: '#ecdff5',
  300: '#d9bfea',
  400: '#c7a1df',
  50: '#fbf7fd',
  500: '#b17cd0',
  600: '#9c5fbe',
  700: '#864ba5',
  800: '#704188',
  900: '#5b366d',
  950: '#3e1d4e',
} as const;

const yellow = {
  100: '#f5edd0',
  200: '#e8d594',
  300: '#dfc16a',
  400: '#d7ab48',
  50: '#fcf9ee',
  500: '#ce9032',
  600: '#b67129',
  700: '#985425',
  800: '#7c4324',
  900: '#673820',
  950: '#3a1c0e',
} as const;

const colorPalettes = { blue, cyan, green, lime, navy, neutral, pink, red, rose, slate, teal, violet, yellow };

export type PaletteColors = keyof typeof colorPalettes;

const standaloneColors = {
  transparent: 'transparent',
  white: '#FDFDFD',
} as const;

export const colorAliases = {
  borderError: red[600],
  borderPrimary: neutral[200],
  borderSecondary: blue[950],
  borderSuccess: green[900],
  borderTertiary: neutral[500],
  buttonDisabled: neutral[200],
  buttonError: red[100],
  buttonPrimary: teal[300],
  buttonSecondary: neutral[50],
  buttonSuccess: green[200],
  surfaceAccent: lime[200],
  surfaceBrand: blue[950],
  surfaceError: red[200],
  surfacePink: pink[300],
  surfacePrimary: slate[100],
  surfaceSecondary: slate[50],
  surfaceSuccess: green[200],
  surfaceTertiary: slate[600],
  textAccent: lime[200],
  textError: red[600],
  textErrorDisabled: red[200],
  textInverse: neutral[50],
  textPink: pink[300],
  textPrimary: blue[950],
  textSecondary: slate[600],
  textSuccess: green[900],
  textSuccessDisabled: green[400],
  textTertiary: neutral[500],
} as const;

export const colors = {
  ...colorPalettes,
  ...standaloneColors,
  ...colorAliases,
};

export type ColorValue =
  | ValueOf<typeof colorAliases>
  | ValueOf<typeof standaloneColors>
  | ValueOf<ValueOf<typeof colorPalettes>>;
