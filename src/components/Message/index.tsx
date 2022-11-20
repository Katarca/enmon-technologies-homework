import { Div_SubContainer } from '../Container/styles'
import { P_BodyText } from '../typo/BodyText'
import React from 'react'

type MsgProps = {
  message: string
}

export const Message = (props: MsgProps) => {
  return (
    <Div_SubContainer>
      <P_BodyText className='primaryGreen'>{props.message}</P_BodyText>
    </Div_SubContainer>
  )
}
