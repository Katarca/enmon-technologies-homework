import { styles } from '../helpers/theme'
import styled from 'styled-components'

export const P_BodyText = styled.p<{ fontSize?: string; color?: string }>`
  font-size: ${props => (props.fontSize ? props.fontSize : styles.fontSize.s)};
  color: ${props => (props.color ? props.color : styles.colors.black)};
  transition: ${styles.transition.primary};
`
