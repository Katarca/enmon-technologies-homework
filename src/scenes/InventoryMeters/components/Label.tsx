import { styles } from '../../../helpers/theme'
import React from 'react'
import styled from 'styled-components'

type LabelProps = {
  children: string
  accessibility?: string
}

export const Label = (props: LabelProps) => {
  return <Span_Label accessibility={props.accessibility}>{props.children}</Span_Label>
}

const Span_Label = styled.span<{ accessibility?: string }>`
  display: inline-block;
  padding: ${styles.spacing.xxs} ${styles.spacing.xs};
  font-size: ${styles.fontSize.xs};
  border-radius: ${styles.borderRadius.primary};
  border: ${styles.borderProperty.primary} transparent;
  margin: ${props => props.accessibility && `0 ${styles.spacing.xs} ${styles.spacing.xs} 0`};
  background-color: ${props =>
    props.accessibility === 'good'
      ? styles.colors.green100
      : props.accessibility === 'tenant' ||
        props.accessibility === 'shaft' ||
        props.accessibility === 'high' ||
        props.accessibility === 'basement' ||
        props.accessibility === 'ceiling'
      ? styles.colors.orange100
      : props.accessibility === 'floodedShaft' || props.accessibility === 'veryHigh'
      ? styles.colors.pink100
      : styles.colors.blue100};
  color: ${props =>
    props.accessibility === 'good'
      ? styles.colors.primaryGreen
      : props.accessibility === 'tenant' ||
        props.accessibility === 'shaft' ||
        props.accessibility === 'high' ||
        props.accessibility === 'basement' ||
        props.accessibility === 'ceiling'
      ? styles.colors.orange200
      : props.accessibility === 'floodedShaft' || props.accessibility === 'veryHigh'
      ? styles.colors.red200
      : styles.colors.blue500};
  border-color: ${props =>
    props.accessibility === 'good'
      ? styles.colors.primaryGreen
      : props.accessibility === 'tenant' ||
        props.accessibility === 'shaft' ||
        props.accessibility === 'high' ||
        props.accessibility === 'basement' ||
        props.accessibility === 'ceiling'
      ? styles.colors.orange200
      : props.accessibility === 'floodedShaft' || props.accessibility === 'veryHigh'
      ? styles.colors.red200
      : styles.colors.blue200};
`
