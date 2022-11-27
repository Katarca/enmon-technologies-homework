import {
  ColorKeys,
  ColorKeysArray,
  ColorValues,
  FontSizeKeys,
  FontSizeKeysArray,
  FontSizeValues,
  colors,
  fontSizes,
} from './theme'

export const addColorClasses = (css?: (colors: ColorValues) => string) => {
  const colorArray = Object.keys(colors) as ColorKeysArray
  return colorArray.map((key: ColorKeys) => {
    return `
        &.${key} {
          color: ${colors[key]};
          ${typeof css === 'function' ? css(colors[key]) : ''}
        }
      `
  })
}

export const addFontSizeClasses = (css?: (fontSizes: FontSizeValues) => string) => {
  const fontSizeArray = Object.keys(fontSizes) as FontSizeKeysArray
  return fontSizeArray.map((key: FontSizeKeys) => {
    return `
        &.${key} {
          font-size: ${fontSizes[key]};
          ${typeof css === 'function' ? css(fontSizes[key]) : ''}
        }
      `
  })
}
