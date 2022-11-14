export const styles = {
  colors: {
    white: '#ffffff',
    black: '#252525',
    pink100: '#FFF2F0',
    pink200: '#FFCCC7',
    red200: '#FF4D6A',
    orange100: '#FFF7E6',
    orange200: '#D46B65',
    primaryGreen: '#1B9991',
    green100: '#F6FFED',
    grey50: '#FAFAFA',
    grey100: '#F0F2F5',
    grey200: '#D9D9D9',
    grey300: '#BFBFBF',
    grey900: '#00000073',
    blue100: '#E6F7FF',
    blue200: '#AADFFF',
    blue500: '#096DD9',
  },
  spacing: {
    xxs: '2px',
    xs: '5px',
    s: '10px',
    m: '15px',
    l: '25px',
    xl: '50px',
  },
  fontSize: {
    xs: '1.2rem',
    s: '1.4rem',
    m: '1.6rem',
    l: '2rem',
  },
  iconWidth: {
    xs: '10px',
    s: '15px',
    m: '20px',
  },
  transition: {
    primary: '0.5s ease-in-out',
    secondary: '1.5s ease-in-out',
  },
  borderRadius: {
    primary: '2px',
  },
  borderProperty: {
    primary: '1px solid',
    secondary: '2px solid',
  },
  boxShadowProperty: {
    primary: '0 0 3px',
  },
} as const

// Colors

export const colors = {
  white: '#ffffff',
  black: '#252525',
  pink100: '#FFF2F0',
  pink200: '#FFCCC7',
  red200: '#FF4D6A',
  orange100: '#FFF7E6',
  orange200: '#D46B65',
  primaryGreen: '#1B9991',
  green100: '#F6FFED',
  grey50: '#FAFAFA',
  grey100: '#F0F2F5',
  grey200: '#D9D9D9',
  grey300: '#BFBFBF',
  grey900: '#00000073',
  blue100: '#E6F7FF',
  blue200: '#AADFFF',
  blue500: '#096DD9',
} as const

export type Colors = typeof colors
export type ColorKeys = keyof typeof colors

export type ColorKeysArray = Array<ColorKeys>
export type ColorValues = Colors[ColorKeys]

// Font sizes

export const fontSizes = {
  xs: '1.2rem',
  s: '1.4rem',
  m: '1.6rem',
  l: '2rem',
}

export type FontSizes = typeof fontSizes
export type FontSizeKeys = keyof typeof fontSizes

export type FontSizeKeysArray = Array<FontSizeKeys>
export type FontSizeValues = FontSizes[FontSizeKeys]

// Breakpoints

export const device = {
  miniPhone: 380,
  phone: 650,
  tabletPortrait: 900,
  tabletLandscape: 1250,
  smallNotebook: 1400,
  notebook: 1600,
  largeNotebook: 1920,
  monitor: 1921,
} as const

export const breakpoint = {
  miniPhone: `@media (max-width: ${device.miniPhone}px)`,
  phone: `@media (max-width: ${device.phone}px)`,
  tabletPortrait: `@media (max-width: ${device.tabletPortrait}px)`,
  tabletLandscape: `@media (max-width: ${device.tabletLandscape}px)`,
  smallNotebook: `@media (max-width: ${device.smallNotebook}px)`,
  notebook: `@media (max-width: ${device.notebook}px)`,
  largeNotebook: `@media (max-width: ${device.largeNotebook}px)`,
  monitor: `@media (min-width: ${device.monitor}px)`,
} as const
