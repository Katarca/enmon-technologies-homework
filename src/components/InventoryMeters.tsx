import { CustomButton } from './Button'
import { H1_Heading } from './Heading'
import { P_BodyText } from './BodyText'
import { UserStateContext } from '../context/UserContext'
import { styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import { useComponentDidMount } from '../utils/useComponentDidMount'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export const InventoryMeters = () => {
  const userContext = useContext(UserStateContext)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  useComponentDidMount(async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}api/inventory-meters?_sort=id:ASC`,
        {
          headers: {
            Authorization: `Bearer ${userContext.userJwt}`,
          },
        }
      )
      console.info(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  })

  const handleLogout = () => {
    userContext.setUserJwt(null)
    navigate(urls.login)
  }

  return (
    <div>
      <Div_Box>
        <H1_Heading fontSize={styles.fontSize.m}>Inventory Meters List</H1_Heading>
        <CustomButton color='white' onClick={() => handleLogout()}>
          <P_BodyText>Logout</P_BodyText>
        </CustomButton>
      </Div_Box>
    </div>
  )
}

const Div_Box = styled.div`
  background-color: ${styles.colors.white};
  padding: ${styles.spacing.m} ${styles.spacing.l};
  margin: ${styles.spacing.m};
  display: flex;
  justify-content: space-between;
`
