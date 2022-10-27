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
  border: none;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    opacity: ${props => (props.color === 'green' ? 0.8 : 1)};
  }
`
