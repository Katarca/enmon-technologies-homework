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
import { LoginStateContext } from './context'
import { P_BodyText } from '../../components/typo/BodyText'
import React, { useContext } from 'react'

export const LoginComponent = () => {
  const loginContext = useContext(LoginStateContext)

  return (
    <Div_Container>
      <Div_LoginContainer>
        <Div_HeadingContainer>
          <H1_Heading className='primaryGreen'>Log in</H1_Heading>
        </Div_HeadingContainer>
        {loginContext.error ? (
          <Div_ErrorContainer>
            <ErrorIcon />
            <P_BodyText>{loginContext.error.message}</P_BodyText>
          </Div_ErrorContainer>
        ) : null}
        <CustomForm onSubmit={loginContext.handleSubmit}>
          <Input
            type='text'
            placeholder='email'
            onChange={e => {
              loginContext.dispatch({
                type: 'update',
                payload: { key: 'email', value: e.target.value },
              })
            }}
            validationError={loginContext.state.emailError}
          >
            <AvatarIcon />
          </Input>
          <Input
            type='password'
            placeholder='password'
            onChange={e => {
              loginContext.dispatch({
                type: 'update',
                payload: { key: 'password', value: e.target.value },
              })
            }}
            validationError={loginContext.state.passwordError}
          >
            <LockIcon />
          </Input>
          <CustomButton className='green fullWidth' type='submit'>
            <P_BodyText>{loginContext.loading ? 'Loading...' : 'Log in'}</P_BodyText>
          </CustomButton>
        </CustomForm>
      </Div_LoginContainer>
    </Div_Container>
  )
}
