import { addColorClasses, addFontSizeClasses } from '../../helpers/addClasses'
import { colors, fontSizes } from '../../helpers/theme'
import styled from 'styled-components'

export const H1_Heading = styled.h1`
  font-size: ${fontSizes.fontSizeS};
  color: ${colors.black};
  ${addColorClasses()}
  ${addFontSizeClasses()}
`
export const H2_Heading = styled.h2`
  font-size: ${fontSizes.fontSizeS};
  color: ${colors.black};
  ${addColorClasses()}
  ${addFontSizeClasses()}
`
