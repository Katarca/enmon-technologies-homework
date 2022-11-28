import { Div_InputContainer, Div_PaddingLeftContainer } from '../Container/styles'
import { P_BodyText } from '../typo/BodyText'
import React, { ComponentProps } from 'react'

export const Select = ({
  options,
  optionAddText,
  label,
  className,
  ...props
}: {
  options: string[] | number[]
  label?: string
  className?: string
  optionAddText?: string
} & ComponentProps<'select'>) => {
  return (
    <div>
      {label ? (
        <Div_PaddingLeftContainer>
          <P_BodyText>{label}</P_BodyText>
        </Div_PaddingLeftContainer>
      ) : null}
      <Div_InputContainer className={className}>
        <select {...props}>
          {options.map(option => (
            <option value={option} key={option}>
              {optionAddText ? `${option}${optionAddText}` : option}
            </option>
          ))}
        </select>
      </Div_InputContainer>
    </div>
  )
}
