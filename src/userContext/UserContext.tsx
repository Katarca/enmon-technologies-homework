import { genericHookContextBuilder } from '../hooks/genericHookContextBuilder'
import { localStorageKeys } from '../helpers/variables'
import { useLocalStorage } from '../hooks/useLocalStorage'
import React from 'react'

const useLogicState = () => {
  const [userJwt, setUserJwt] = useLocalStorage<null | string>(localStorageKeys.jwt, null)

  return {
    userJwt,
    setUserJwt,
  }
}

export const { ContextProvider: UserContextProvider, Context: UserStateContext } =
  genericHookContextBuilder(useLogicState)
