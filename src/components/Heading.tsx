import { styles } from '../helpers/theme'
import styled from 'styled-components'

export const H1_Heading = styled.h1<{ fontSize?: string; color?: string }>`
  font-size: ${props => (props.fontSize ? props.fontSize : styles.fontSize.s)};
  color: ${props => (props.color ? props.color : styles.colors.black)};
`
export const H2_Heading = styled.h2<{ fontSize?: string; color?: string }>`
  font-size: ${props => (props.fontSize ? props.fontSize : styles.fontSize.s)};
  color: ${props => (props.color ? props.color : styles.colors.black)};
`
