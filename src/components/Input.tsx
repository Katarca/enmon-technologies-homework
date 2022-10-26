import { styles } from '../helpers/theme'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

const Input = (props: ComponentProps<'input'>) => {
  return <input {...props} />
}

export const CustomInput = styled(Input)`
  border: none;
  text-align: center;
  font-size: ${styles.fontSize.s};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${styles.colors.grey200};
  }
  &:-ms-input-placeholder {
    color: ${styles.colors.grey200};
  }
  &::-ms-input-placeholder {
    color: ${styles.colors.grey200};
  }
`
