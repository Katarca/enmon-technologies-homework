import { CustomButton } from '../../components/Button/styles'
import { Div_Container } from '../../components/Container/styles'
import {
  Div_ErrorContainer,
  Div_HeadingContainer,
  Div_LoginContainer,
  ErrorIcon,
  LockIcon,
  PersonIcon,
} from './styles'
import { H1_Heading } from '../../components/typo/Heading'
import { Input } from '../../components/Input'
import { LOGIN } from '../../graphql/mutations/loginMutation'
import { P_BodyText } from '../../components/typo/BodyText'
import { UserStateContext } from '../../context/UserContext'
import { client } from '../../apollo/client'
import { initialLoginState, loginReducer } from './hooks'
import { urls } from '../../helpers/urls'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useReducer } from 'react'

export const Login = () => {
  const userContext = useContext(UserStateContext)

  const [state, dispatch] = useReducer(loginReducer, initialLoginState)

  const navigate = useNavigate()

  const handleLogin = async () => {
    dispatch({ type: 'updateEmailError', payload: null })
    dispatch({ type: 'updatePasswordError', payload: null })
    dispatch({ type: 'updateLoginError', payload: null })
    let isValid = true
    if (!state.email) {
      dispatch({ type: 'updateEmailError', payload: 'Please enter email' })
      isValid = false
    } else if (!state.email.trim().includes('@')) {
      dispatch({ type: 'updateEmailError', payload: 'Email is not valid' })
      isValid = false
    }
    if (!state.password) {
      dispatch({ type: 'updatePasswordError', payload: 'Please enter password' })
      isValid = false
    }
    if (!isValid) return
    try {
      const response = await client.mutate({
        mutation: LOGIN,
        variables: {
          input: {
            identifier: state.email?.trim(),
            password: state.password?.trim(),
          },
        },
      })
      userContext.setUserJwt(response.data.login.jwt)
      navigate(urls.inventoryMeters)
    } catch (error) {
      dispatch({ type: 'updateLoginError', payload: 'Something went wrong' })
    }
  }

  return (
    <Div_Container>
      <Div_LoginContainer>
        <Div_HeadingContainer>
          <H1_Heading className='primaryGreen'>Log in</H1_Heading>
        </Div_HeadingContainer>
        {state.loginError ? (
          <Div_ErrorContainer>
            <ErrorIcon />
            <P_BodyText>{state.loginError}</P_BodyText>
          </Div_ErrorContainer>
        ) : null}
        <Input
          type='email'
          placeholder='email'
          onChange={e => {
            dispatch({ type: 'updateEmail', payload: e.target.value })
          }}
          inputError={state.emailError!}
        >
          <PersonIcon />
        </Input>
        <Input
          type='password'
          placeholder='password'
          onChange={e => {
            dispatch({ type: 'updatePassword', payload: e.target.value })
          }}
          inputError={state.passwordError!}
        >
          <LockIcon />
        </Input>
        <CustomButton className='green fullWidth' onClick={() => handleLogin()}>
          <P_BodyText>Log in</P_BodyText>
        </CustomButton>
      </Div_LoginContainer>
    </Div_Container>
  )
}
