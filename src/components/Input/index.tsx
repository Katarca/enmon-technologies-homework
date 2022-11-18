import { Div_InputContainer, Div_PaddingContainer } from '../Container/styles'
import { P_BodyText } from '../typo/BodyText'
import { styles } from '../../helpers/theme'
import React, { ComponentProps, ReactNode } from 'react'

export const Input = ({
  children,
  label,
  className,
  inputError,
  ...props
}: {
  children?: ReactNode
  label?: string
  className?: string
  inputError?: string | null
} & ComponentProps<'input'>) => {
  return (
    <div>
      {label ? (
        <Div_PaddingContainer padding={` 0 0 ${styles.spacing.s} 0`}>
          <P_BodyText>{label}</P_BodyText>
        </Div_PaddingContainer>
      ) : null}
      <Div_InputContainer className={className}>
        {children}
        <input {...props} />
      </Div_InputContainer>
      {inputError ? <P_BodyText className='red200'>{inputError}</P_BodyText> : null}
    </div>
  )
}
