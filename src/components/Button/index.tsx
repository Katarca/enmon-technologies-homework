import React, { ComponentProps } from 'react'

export const Button = (props: ComponentProps<'button'>) => {
  return <button {...props}>{props.children}</button>
}
