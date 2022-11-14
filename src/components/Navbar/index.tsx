import { CustomButton } from '../Button/styles'
import { Div_NavbarWrapper } from './styles'
import { P_BodyText } from '../typo/BodyText'
import { UserStateContext } from '../../context/UserContext'
import { urls } from '../../helpers/urls'
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
      <Div_NavbarWrapper>
        <CustomButton className='white' onClick={() => handleLogout()}>
          <P_BodyText>Logout</P_BodyText>
        </CustomButton>
      </Div_NavbarWrapper>
    )
  }
}
