import { Div_InputContainer, Div_PaddingLeftContainer } from '../Container/styles'
import { P_BodyText } from '../typo/BodyText'
import { styles } from '../../helpers/theme'
import React, { ComponentProps, ReactNode } from 'react'

export const Input = ({
  children,
  label,
  className,
  validationError,
  ...props
}: {
  children?: ReactNode
  label?: string
  className?: string
  validationError?: string | null
} & ComponentProps<'input'>) => {
  return (
    <div>
      {label ? (
        <Div_PaddingLeftContainer>
          <P_BodyText>{label}</P_BodyText>
        </Div_PaddingLeftContainer>
      ) : null}
      <Div_InputContainer className={className}>
        {children}
        <input {...props} />
      </Div_InputContainer>
      {validationError ? <P_BodyText className='red200'>{validationError}</P_BodyText> : null}
    </div>
  )
}
