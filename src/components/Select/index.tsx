import { Div_InputContainer, Div_PaddingContainer } from '../Container/styles'
import { P_BodyText } from '../typo/BodyText'
import { styles } from '../../helpers/theme'
import React, { ComponentProps } from 'react'

export const Select = ({
  options,
  optionAddText,
  label,
  className,
  ...props
}: {
  options: string[]
  label?: string
  className?: string
  optionAddText?: string
} & ComponentProps<'select'>) => {
  return (
    <div>
      {label ? (
        <Div_PaddingContainer padding={` 0 0 ${styles.spacing.s} 0`}>
          <P_BodyText>{label}</P_BodyText>
        </Div_PaddingContainer>
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
