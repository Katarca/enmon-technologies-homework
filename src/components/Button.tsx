import { styles } from '../helpers/theme'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

const Button = (props: ComponentProps<'button'>) => {
  return <button {...props}>{props.children}</button>
}

export const CustomButton = styled(Button)<{ backgroundcolor?: string; width?: string }>`
  width: ${props => props.width};
  padding: ${styles.spacing.xs} ${styles.spacing.m};
  background-color: ${props => props.backgroundcolor};
  border: none;
`
