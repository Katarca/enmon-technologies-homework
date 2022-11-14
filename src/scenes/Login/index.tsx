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
import { urls } from '../../helpers/urls'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useState } from 'react'

export const Login = () => {
  const [email, setEmail] = useState(null as null | string)
  const [password, setPassword] = useState(null as null | string)
  const [errorMsg, setErrorMsg] = useState(null as null | 'Something went wrong')
  const [emailError, setEmailError] = useState(
    null as null | 'Please enter email' | 'Email is not valid'
  )
  const [passwordError, setPasswordError] = useState(null as null | 'Please enter password')

  const userContext = useContext(UserStateContext)
  const navigate = useNavigate()

  const handleLogin = async () => {
    setEmailError(null)
    setPasswordError(null)
    setErrorMsg(null)
    let isValid = true
    if (email?.trim().length === 0 || !email) {
      setEmailError('Please enter email')
      isValid = false
    } else if (!email?.trim().includes('@')) {
      setEmailError('Email is not valid')
      isValid = false
    }
    if (password?.trim().length === 0 || !password) {
      setPasswordError('Please enter password')
      isValid = false
    }
    if (!isValid) return
    try {
      const response = await client.mutate({
        mutation: LOGIN,
        variables: {
          input: {
            identifier: email?.trim(),
            password: password?.trim(),
          },
        },
      })
      userContext.setUserJwt(response.data.login.jwt)
      navigate(urls.inventoryMeters)
    } catch (error) {
      setErrorMsg('Something went wrong')
    }
  }

  return (
    <Div_Container>
      <Div_LoginContainer>
        <Div_HeadingContainer>
          <H1_Heading className='primaryGreen'>Log in</H1_Heading>
        </Div_HeadingContainer>
        {errorMsg ? (
          <Div_ErrorContainer>
            <ErrorIcon />
            <P_BodyText>{errorMsg}</P_BodyText>
          </Div_ErrorContainer>
        ) : null}
        <Input
          type='email'
          placeholder='email'
          onChange={e => setEmail(e.target.value)}
          inputError={emailError!}
        >
          <PersonIcon />
        </Input>
        <Input
          type='password'
          placeholder='password'
          onChange={e => setPassword(e.target.value)}
          inputError={passwordError!}
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
