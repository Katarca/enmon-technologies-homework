import { genericHookContextBuilder } from '../utils/genericHookContextBuilder'
import { useLocalStorage } from '../utils/useLocalStorage'
import React from 'react'

const useLogicState = () => {
  const [userJwt, setUserJwt] = useLocalStorage<null | string>('JWT_KEY', null)

  return {
    userJwt,
    setUserJwt,
  }
}

export const { ContextProvider: UserContextProvider, Context: UserStateContext } =
  genericHookContextBuilder(useLogicState)
