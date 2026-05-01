// src/app/core/tokens/design-tokens.ts
// Fuente única de verdad — se usa en el ThemeService y tests.
// Los CSS custom properties del styles.scss son la contraparte en runtime.

export const PALETTE = {
  blue: {
    300: '#93B4FD',
    400: '#6B93FB',
    500: '#3D6FFA',
    600: '#2952E3',
    700: '#1A3AB8',
  },
  electric: '#41D0FF',
  green:    '#3DFA8E',
} as const;

export const DARK_THEME = {
  bg:       '#050810',
  bg2:      '#080D1A',
  surface:  '#0F1628',
  surface2: '#141D33',
  text1:    '#F0F4FF',
  text2:    '#8A97B8',
  text3:    '#4A5570',
} as const;

export const LIGHT_THEME = {
  bg:       '#F4F7FF',
  bg2:      '#EBF0FF',
  surface:  '#FFFFFF',
  surface2: '#F0F4FF',
  text1:    '#080D1A',
  text2:    '#2E3A5C',
  text3:    '#6B7A9E',
} as const;

export const FONTS = {
  display: "'Outfit', sans-serif",
  mono:    "'DM Mono', monospace",
  serif:   "'Playfair Display', serif",
} as const;
