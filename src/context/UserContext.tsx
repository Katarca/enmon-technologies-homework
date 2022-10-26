import { genericHookContextBuilder } from '../utils/genericHookContextBuilder'
import React, { useState } from 'react'

const useLogicState = () => {
  const [user, setUser] = useState('')

  return {
    user,
    setUser,
  }
}

export const { ContextProvider: UserContextProvider, Context: UserStateContext } =
  genericHookContextBuilder(useLogicState)
