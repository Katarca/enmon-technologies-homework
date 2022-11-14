import { colors, fontSizes, styles } from '../../helpers/theme'
import styled from 'styled-components'

export const Span_TextBox = styled.span<{ accessibility?: string }>`
  display: inline-block;
  padding: ${styles.spacing.xxs} ${styles.spacing.xs};
  font-size: ${fontSizes.xs};
  border-radius: ${styles.borderRadius.primary};
  margin: ${props => props.accessibility && `0 ${styles.spacing.xs} ${styles.spacing.xs} 0`};
  background-color: ${colors.blue100};
  color: ${colors.blue500};
  border: ${styles.borderProperty} ${colors.blue200};
  &.good {
    background-color: ${colors.green100};
    color: ${colors.primaryGreen};
    border: ${styles.borderProperty} ${colors.primaryGreen};
  }
  &.average {
    background-color: ${colors.orange100};
    color: ${colors.orange200};
    border: ${styles.borderProperty} ${colors.orange200};
  }
  &.bad {
    background-color: ${colors.pink100};
    color: ${colors.red200};
    border: ${styles.borderProperty} ${colors.red200};
  }
`
