import { CustomButton } from './Button'
import { CustomInput } from './Input'
import { H1_Heading } from './Heading'
import { P_BodyText } from './BodyText'
import { ReactComponent as lockIcon } from '../icons/lock-icon.svg'
import { ReactComponent as personIcon } from '../icons/person-icon.svg'
import { styles } from '../helpers/theme'
import React from 'react'
import styled, { css } from 'styled-components'

export const Login = () => {
  return (
    <Div_Container>
      <Div_LoginContainer>
        <Div_HeadingContainer>
          <H1_Heading>Log in</H1_Heading>
        </Div_HeadingContainer>
        <Div_InputContainer>
          <PersonIcon />
          <CustomInput type='email' placeholder='email' />
        </Div_InputContainer>
        <Div_InputContainer>
          <LockIcon />
          <CustomInput type='password' placeholder='password' />
        </Div_InputContainer>
        <CustomButton width='100%' backgroundcolor={styles.colors.primaryGreen}>
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
  & > div {
    margin-bottom: ${styles.spacing.m};
  }
`

const Div_HeadingContainer = styled.div`
  padding: ${styles.spacing.s} 0;
  border-bottom: 2px solid ${styles.colors.primaryGreen};
  width: fit-content;
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
`
const iconStyles = css`
  fill: ${styles.colors.primaryGreen};
  width: 15px;
`

const PersonIcon = styled(personIcon)`
  ${iconStyles}
`
const LockIcon = styled(lockIcon)`
  ${iconStyles}
`
