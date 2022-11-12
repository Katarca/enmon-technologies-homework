import { styles } from '../helpers/theme'
import React, { ComponentProps, ReactNode } from 'react'
import styled from 'styled-components'

export const InputElement = ({
  children,
  ...rest
}: {
  children?: ReactNode
} & ComponentProps<'input'>) => {
  return (
    <Div_InputContainer>
      {children}
      <input {...rest} />
    </Div_InputContainer>
  )
}

const Div_InputContainer = styled.div`
  display: flex;
  padding: ${styles.spacing.xs} ${styles.spacing.s};
  background-color: ${styles.colors.white};
  border: ${styles.borderProperty.primary} ${styles.colors.white};
  transition: ${styles.transition.primary};
  & > input {
    width: 100%;
  }
  &:hover {
    border-color: ${styles.colors.primaryGreen};
  }
  &:focus-within {
    box-shadow: 0 0 3px ${styles.colors.primaryGreen};
  }
  & > input {
    border: none;
    text-align: center;
    font-size: ${styles.fontSize.s};
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${styles.colors.grey300};
    }
    &:-ms-input-placeholder {
      color: ${styles.colors.grey300};
    }
    &::-ms-input-placeholder {
      color: ${styles.colors.grey300};
    }
  }
`
