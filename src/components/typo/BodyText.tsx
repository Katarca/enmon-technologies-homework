import { addColorClasses, addFontSizeClasses } from '../../utils/addClasses'
import { styles } from '../../helpers/theme'
import styled from 'styled-components'

export const P_BodyText = styled.p`
  font-size: ${styles.fontSize.s};
  color: ${styles.colors.black};
  transition: ${styles.transition.primary};
  ${addColorClasses()}
  ${addFontSizeClasses()}
`
