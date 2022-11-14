import { addColorClasses, addFontSizeClasses } from '../../utils/addClasses'
import { styles } from '../../helpers/theme'
import styled from 'styled-components'

export const H1_Heading = styled.h1`
  font-size: ${styles.fontSize.s};
  color: ${styles.colors.black};
  ${addColorClasses()}
  ${addFontSizeClasses()}
`
export const H2_Heading = styled.h2`
  font-size: ${styles.fontSize.s};
  color: ${styles.colors.black};
  ${addColorClasses()}
  ${addFontSizeClasses()}
`
