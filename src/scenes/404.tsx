import { Div_Container } from '../components/Container/styles'
import { H1_Heading } from '../components/typo/Heading'
import { Link } from 'react-router-dom'
import { P_BodyText } from '../components/typo/BodyText'
import { styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import React from 'react'
import styled from 'styled-components'

export const PageNotFound = () => {
  return (
    <Div_Container>
      <H1_Heading>Page not found</H1_Heading>
      <Div_TextContainer>
        <Link to={urls.login}>
          <P_BodyText>Return to login page</P_BodyText>
        </Link>
      </Div_TextContainer>
    </Div_Container>
  )
}

const Div_TextContainer = styled.div`
  padding: ${styles.spacing.m};
`
