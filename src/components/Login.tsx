import { CustomButton } from './Button'
import { CustomInput } from './Input'
import { H1_Heading } from './Heading'
import { P_BodyText } from './BodyText'
import { UserStateContext } from '../context/UserContext'
import { ReactComponent as invalidIcon } from '../icons/ivalid-icon.svg'
import { ReactComponent as lockIcon } from '../icons/lock-icon.svg'
import { ReactComponent as personIcon } from '../icons/person-icon.svg'
import { styles } from '../helpers/theme'
import React, { useContext, useState } from 'react'
import axios from 'axios'
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

  const handleLogin = () => {
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
    axios
      .post(`${process.env.REACT_APP_API_URL}api/auth/local`, {
        identifier: email?.trim(),
        password: password?.trim(),
      })
      .then(function (response) {
        if (response.status === 200) {
          userContext.setUser(response.data.jwt)
        }
      })
      .catch(function (error) {
        if (error.response.status !== 200) {
          setInvalidCredentials('Invalid credentials')
        }
      })
  }

  return (
    <Div_Container>
      <Div_LoginContainer>
        <Div_HeadingContainer>
          <H1_Heading>Log in</H1_Heading>
        </Div_HeadingContainer>
        {invalidCredentials ? (
          <Div_InvalidContainer>
            <InvalidIcon />
            <P_BodyText>{invalidCredentials}</P_BodyText>
          </Div_InvalidContainer>
        ) : null}
        <Div_InputContainer>
          <PersonIcon />
          <CustomInput type='email' placeholder='email' onChange={e => setEmail(e.target.value)} />
        </Div_InputContainer>
        {emailError ? <P_BodyText color={styles.colors.red200}>{emailError}</P_BodyText> : null}
        <Div_InputContainer>
          <LockIcon />
          <CustomInput
            type='password'
            placeholder='password'
            onChange={e => setPassword(e.target.value)}
          />
        </Div_InputContainer>
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

const Div_Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
  border-bottom: 2px solid ${styles.colors.primaryGreen};
  width: fit-content;
  margin-bottom: ${styles.spacing.s};
`
const Div_InputContainer = styled.div`
  display: flex;
  padding: ${styles.spacing.xs} ${styles.spacing.s};
  background-color: ${styles.colors.white};
  border: 1px solid ${styles.colors.white};
  transition: 0.5s ease-in-out;
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
  width: 15px;
`

const PersonIcon = styled(personIcon)`
  ${inputIconStyles}
`
const LockIcon = styled(lockIcon)`
  ${inputIconStyles}
`
const InvalidIcon = styled(invalidIcon)`
  width: 15px;
  fill: ${styles.colors.red200};
  margin-right: ${styles.spacing.s};
`

const Div_InvalidContainer = styled.div`
  display: flex;
  padding: ${styles.spacing.s} ${styles.spacing.m};
  background-color: ${styles.colors.pink100};
  border: 1px solid ${styles.colors.pink200};
`
