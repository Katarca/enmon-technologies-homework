import { Div_Container, Div_PaddingContainer } from '../../components/Container/styles'
import { H1_Heading } from '../../components/typo/Heading'
import { Link } from 'react-router-dom'
import { P_BodyText } from '../../components/typo/BodyText'
import { urls } from '../../helpers/urls'
import React from 'react'

export const PageNotFound = () => {
  return (
    <Div_Container>
      <H1_Heading>Page not found</H1_Heading>
      <Div_PaddingContainer>
        <Link to={urls.login}>
          <P_BodyText>Return to login page</P_BodyText>
        </Link>
      </Div_PaddingContainer>
    </Div_Container>
  )
}
