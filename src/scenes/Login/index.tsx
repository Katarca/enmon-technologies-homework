import {
  AvatarIcon,
  Div_ErrorContainer,
  Div_HeadingContainer,
  Div_LoginContainer,
  ErrorIcon,
  LockIcon,
} from './styles'
import { CustomButton } from '../../components/Button/styles'
import { CustomForm } from '../../components/Form/styles'
import { Div_Container } from '../../components/Container/styles'
import { H1_Heading } from '../../components/typo/Heading'
import { Input } from '../../components/Input'
import { P_BodyText } from '../../components/typo/BodyText'
import { UserStateContext } from '../../context/UserContext'
import { initialLoginState, loginReducer } from './hooks'
import { services } from '../../services/services'
import { urls } from '../../helpers/urls'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useReducer } from 'react'

export const Login = () => {
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
        <CustomForm
          onSubmit={e => {
            e.preventDefault()
            handleLogin()
          }}
        >
          <Input
            type='text'
            placeholder='email'
            onChange={e => {
              dispatch({ type: 'update', payload: { key: 'email', value: e.target.value } })
            }}
            inputError={state.emailError}
          >
            <AvatarIcon />
          </Input>
          <Input
            type='password'
            placeholder='password'
            onChange={e => {
              dispatch({ type: 'update', payload: { key: 'password', value: e.target.value } })
            }}
            inputError={state.passwordError}
          >
            <LockIcon />
          </Input>
          <CustomButton className='green fullWidth' type='submit'>
            <P_BodyText>Log in</P_BodyText>
          </CustomButton>
        </CustomForm>
      </Div_LoginContainer>
    </Div_Container>
  )
}
