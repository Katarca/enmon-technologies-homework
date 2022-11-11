import { genericHookContextBuilder } from '../utils/genericHookContextBuilder'
import { useLocalStorage } from '../utils/useLocalStorage'
import React, { useState } from 'react'

const useLogicState = () => {
  const [userJwt, setUserJwt] = useLocalStorage('JWT_KEY', null as null | string)

  return {
    userJwt,
    setUserJwt,
  }
}

export const { ContextProvider: UserContextProvider, Context: UserStateContext } =
  genericHookContextBuilder(useLogicState)
