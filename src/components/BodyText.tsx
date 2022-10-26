import { styles } from '../helpers/theme'
import styled from 'styled-components'

export const P_BodyText = styled.p<{ color?: string }>`
  font-size: ${styles.fontSize.s};
  color: ${props => (props.color ? props.color : styles.colors.black)};
`
