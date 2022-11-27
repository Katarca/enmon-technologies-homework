import { LOGIN } from '../../graphql/mutations/loginMutation'
import { LoginComponent } from './index'
import { MutationLoginArgs, UsersPermissionsLoginPayload } from '../../generated/types'
import { UserStateContext } from '../../userContext/UserContext'
import { genericHookContextBuilder } from '../../hooks/genericHookContextBuilder'
import { initialLoginState, loginReducer } from './hooks'
import { urls } from '../../helpers/urls'
import { useApolloMutation } from '../../hooks/useApolloMutation'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useReducer } from 'react'

type LoginMutationResult = {
  login: UsersPermissionsLoginPayload
}

const useLogicState = () => {
  const userContext = useContext(UserStateContext)

  const [state, dispatch] = useReducer(loginReducer, initialLoginState)

  const navigate = useNavigate()

  const {
    mutationFunction: login,
    loading,
    error,
  } = useApolloMutation<LoginMutationResult, MutationLoginArgs>({
    mutation: LOGIN,
    variables: {
      input: {
        identifier: state.email ? state.email.trim() : '',
        password: state.password ? state.password.trim() : '',
      },
    },
    onCompleted: data => {
      data?.login.jwt ? userContext.setUserJwt(data.login.jwt) : userContext.setUserJwt(null)
      navigate(urls.inventoryMeters)
    },
  })

  const validateInputs = () => {
    dispatch({ type: 'update', payload: { key: 'emailError', value: null } })
    dispatch({ type: 'update', payload: { key: 'passwordError', value: null } })
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
    return { isValid }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const { isValid } = validateInputs()
    if (!isValid) return
    login()
  }

  return {
    state,
    dispatch,
    handleSubmit,
    loading,
    error,
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
