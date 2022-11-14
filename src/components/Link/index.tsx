import { Link } from 'react-router-dom'
import React from 'react'

type LinkProps = {
  to: string
  children: React.ReactNode
}

export const RouterLink = (props: LinkProps) => {
  return <Link to={props.to}>{props.children}</Link>
}
