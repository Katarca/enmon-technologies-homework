import { styles } from '../helpers/theme'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

const Button = (props: ComponentProps<'button'>) => {
  return <button {...props}>{props.children}</button>
}

export const CustomButton = styled(Button)<{ color: 'green' | 'white'; width?: string }>`
  width: ${props => props.width};
  padding: ${styles.spacing.xs} ${styles.spacing.m};
  background-color: ${props =>
    props.color === 'green' ? styles.colors.primaryGreen : styles.colors.white};
  border: ${props =>
    props.color === 'green' ? 'none' : `${styles.borderProperty.primary} ${styles.colors.grey200}`};
  cursor: pointer;
  transition: ${styles.transition.primary};
  border-radius: ${styles.borderRadius.primary};
  &:hover {
    opacity: ${props => (props.color === 'green' ? 0.8 : 1)};
    border-color: ${props => (props.color === 'white' ? styles.colors.primaryGreen : '')};
    & > p {
      color: ${props => (props.color === 'white' ? styles.colors.primaryGreen : '')};
    }
  }
`
