import { addColorClasses, addFontSizeClasses } from '../../helpers/addClasses'
import { colors, fontSizes, styles } from '../../helpers/theme'
import styled from 'styled-components'

export const P_BodyText = styled.p`
  font-size: ${fontSizes.fontSizeS};
  color: ${colors.black};
  transition: ${styles.transition.primary};
  ${addColorClasses()}
  ${addFontSizeClasses()}
`
