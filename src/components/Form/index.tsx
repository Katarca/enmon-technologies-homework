import React, { ComponentProps } from 'react'

export const Form = (props: ComponentProps<'form'>) => {
  return <form {...props}>{props.children}</form>
}
