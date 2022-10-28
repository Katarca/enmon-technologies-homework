import { genericHookContextBuilder } from '../utils/genericHookContextBuilder'
import React, { useState } from 'react'

const useLogicState = () => {
  const [userJwt, setUserJwt] = useState(null as null | string)

  return {
    userJwt,
    setUserJwt,
  }
}

export const { ContextProvider: UserContextProvider, Context: UserStateContext } =
  genericHookContextBuilder(useLogicState)
