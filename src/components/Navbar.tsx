import { CustomButton } from './Button'
import { Div_SubContainer } from './Container'
import { P_BodyText } from './typo/BodyText'
import { UserStateContext } from '../context/UserContext'
import { styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import { useLocation, useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'

export const Navbar = () => {
  const location = useLocation()
  const userContext = useContext(UserStateContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    userContext.setUserJwt(null)
    navigate(urls.login)
  }

  if (location.pathname === urls.login) {
    return null
  } else {
    return (
      <Div_SubContainer margin={`0 0 ${styles.spacing.m} 0`} justifyContent='flex-end'>
        <CustomButton color='white' onClick={() => handleLogout()}>
          <P_BodyText>Logout</P_BodyText>
        </CustomButton>
      </Div_SubContainer>
    )
  }
}
