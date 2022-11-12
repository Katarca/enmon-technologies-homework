import { CustomButton } from '../components/Button'
import { Div_Container } from '../components/Container'
import { H1_Heading } from '../components/Heading'
import { InputElement } from '../components/Input'
import { LOGIN } from '../graphql/mutations/loginMutation'
import { P_BodyText } from '../components/BodyText'
import { UserStateContext } from '../context/UserContext'
import { client } from '../index'
import { ReactComponent as invalidIcon } from '../icons/invalid-icon.svg'
import { ReactComponent as lockIcon } from '../icons/lock-icon.svg'
import { ReactComponent as personIcon } from '../icons/person-icon.svg'
import { styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import styled, { css } from 'styled-components'

export const Login = () => {
  const [email, setEmail] = useState(null as null | string)
  const [password, setPassword] = useState(null as null | string)
  const [invalidCredentials, setInvalidCredentials] = useState(null as null | 'Invalid credentials')
  const [emailError, setEmailError] = useState(
    null as null | 'Please enter email' | 'Email is not valid'
  )
  const [passwordError, setPasswordError] = useState(null as null | 'Please enter password')

  const userContext = useContext(UserStateContext)
  const navigate = useNavigate()

  const handleLogin = async () => {
    setEmailError(null)
    setPasswordError(null)
    setInvalidCredentials(null)
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
      setInvalidCredentials('Invalid credentials')
    }
  }

  return (
    <Div_Container>
      <Div_LoginContainer>
        <Div_HeadingContainer>
          <H1_Heading color={styles.colors.primaryGreen}>Log in</H1_Heading>
        </Div_HeadingContainer>
        {invalidCredentials ? (
          <Div_InvalidContainer>
            <InvalidIcon />
            <P_BodyText>{invalidCredentials}</P_BodyText>
          </Div_InvalidContainer>
        ) : null}
        <InputElement type='email' placeholder='email' onChange={e => setEmail(e.target.value)}>
          <PersonIcon />
        </InputElement>
        {emailError ? <P_BodyText color={styles.colors.red200}>{emailError}</P_BodyText> : null}
        <InputElement
          type='password'
          placeholder='password'
          onChange={e => setPassword(e.target.value)}
        >
          <LockIcon />
        </InputElement>
        {passwordError ? (
          <P_BodyText color={styles.colors.red200}>{passwordError}</P_BodyText>
        ) : null}
        <CustomButton width='100%' color='green' onClick={() => handleLogin()}>
          <P_BodyText color={styles.colors.white}>Log in</P_BodyText>
        </CustomButton>
      </Div_LoginContainer>
    </Div_Container>
  )
}

const Div_LoginContainer = styled.div`
  padding: ${styles.spacing.s};
  width: 400px;
  & > button,
  div:not(:first-child) {
    margin-top: ${styles.spacing.m};
  }
`

const Div_HeadingContainer = styled.div`
  padding: ${styles.spacing.s} 0;
  border-bottom: ${styles.borderProperty.secondary} ${styles.colors.primaryGreen};
  width: fit-content;
  margin-bottom: ${styles.spacing.s};
`
const Div_InputContainer = styled.div`
  display: flex;
  padding: ${styles.spacing.xs} ${styles.spacing.s};
  background-color: ${styles.colors.white};
  border: ${styles.borderProperty.primary} ${styles.colors.white};
  transition: ${styles.transition.primary};
  & > input {
    width: 100%;
  }
  &:hover {
    border-color: ${styles.colors.primaryGreen};
  }
  &:focus-within {
    box-shadow: 0 0 3px ${styles.colors.primaryGreen};
  }
`
const inputIconStyles = css`
  fill: ${styles.colors.primaryGreen};
  width: ${styles.iconWidth.s};
`

const PersonIcon = styled(personIcon)`
  ${inputIconStyles}
`
const LockIcon = styled(lockIcon)`
  ${inputIconStyles}
`
const InvalidIcon = styled(invalidIcon)`
  width: ${styles.iconWidth.s};
  fill: ${styles.colors.red200};
  margin-right: ${styles.spacing.s};
`

const Div_InvalidContainer = styled.div`
  display: flex;
  padding: ${styles.spacing.s} ${styles.spacing.m};
  background-color: ${styles.colors.pink100};
  border: ${styles.borderProperty.primary} ${styles.colors.pink200};
`
