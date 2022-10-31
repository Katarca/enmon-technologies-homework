export const styles = {
  colors: {
    white: '#ffffff',
    black: '#252525',
    pink100: '#FFF2F0',
    pink200: '#FFCCC7',
    red200: '#FF4D6A',
    primaryGreen: '#1B9991',
    grey50: '#FAFAFA',
    grey100: '#F0F2F5',
    grey200: '#D9D9D9',
    grey300: '#BFBFBF',
  },
  spacing: {
    xs: '5px',
    s: '10px',
    m: '15px',
    l: '25px',
  },
  fontSize: {
    s: '1.4rem',
    m: '2rem',
  },
} as const

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
