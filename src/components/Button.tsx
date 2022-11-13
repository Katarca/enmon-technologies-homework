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
    props.color === 'green'
      ? `${styles.borderProperty.primary} ${styles.colors.primaryGreen}`
      : `${styles.borderProperty.primary} ${styles.colors.grey200}`};
  cursor: pointer;
  transition: ${styles.transition.primary};
  border-radius: ${styles.borderRadius.primary};
  & > p {
    color: ${props => (props.color === 'green' ? styles.colors.white : styles.colors.black)};
  }
  &:hover {
    &:enabled {
      opacity: ${props => (props.color === 'green' ? 0.8 : 1)};
      border-color: ${props => (props.color === 'white' ? styles.colors.primaryGreen : 'none')};
      & > p {
        color: ${props => (props.color === 'white' ? styles.colors.primaryGreen : 'none')};
      }
    }
  }
  &:disabled {
    background-color: ${styles.colors.grey300};
    border-color: ${styles.colors.grey300};
    cursor: not-allowed;
    & > p {
      color: ${styles.colors.white};
    }
  }
`
