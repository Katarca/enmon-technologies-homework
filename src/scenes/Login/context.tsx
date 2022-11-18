import { LoginComponent } from './index'
import { UserStateContext } from '../../globalContext/UserContext'
import { genericHookContextBuilder } from '../../utils/genericHookContextBuilder'
import { initialLoginState, loginReducer } from './hooks'
import { services } from '../../services/services'
import { urls } from '../../helpers/urls'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useReducer } from 'react'

const useLogicState = () => {
  const userContext = useContext(UserStateContext)

  const [state, dispatch] = useReducer(loginReducer, initialLoginState)

  const navigate = useNavigate()

  const handleLogin = async () => {
    dispatch({ type: 'update', payload: { key: 'emailError', value: null } })
    dispatch({ type: 'update', payload: { key: 'passwordError', value: null } })
    dispatch({ type: 'update', payload: { key: 'loginError', value: null } })
    let isValid = true
    if (!state.email) {
      dispatch({ type: 'update', payload: { key: 'emailError', value: 'Please enter email' } })
      isValid = false
    } else if (!state.email.trim().includes('@')) {
      dispatch({ type: 'update', payload: { key: 'emailError', value: 'Email is not valid' } })
      isValid = false
    }
    if (!state.password) {
      dispatch({
        type: 'update',
        payload: { key: 'passwordError', value: 'Please enter password' },
      })
      isValid = false
    }
    if (!isValid) {
      return
    } else if (state.email && state.password) {
      try {
        const response = await services.loginMutation({
          input: {
            identifier: state.email.trim(),
            password: state.password.trim(),
          },
        })
        userContext.setUserJwt(response.data.jwt)
        navigate(urls.inventoryMeters)
      } catch (error) {
        dispatch({ type: 'update', payload: { key: 'loginError', value: 'Something went wrong' } })
        userContext.setUserJwt(null)
      }
    }
  }
  return {
    state,
    dispatch,
    handleLogin,
  }
}

export const { ContextProvider: LoginContextProvider, Context: LoginStateContext } =
  genericHookContextBuilder(useLogicState)

export const Login = () => {
  return (
    <LoginContextProvider>
      <LoginComponent />
    </LoginContextProvider>
  )
}
