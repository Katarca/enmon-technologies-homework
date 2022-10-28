import { UserStateContext } from '../context/UserContext'
import { useComponentDidMount } from '../utils/useComponentDidMount'
import React, { useContext } from 'react'
import axios from 'axios'

export const InventoryMeters = () => {
  const userContext = useContext(UserStateContext)

  useComponentDidMount(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}api/inventory-meters`, {
        headers: {
          Authorization: `Bearer ${userContext.userJwt}`,
        },
      })
      console.info(response.data)
    } catch (error) {
      console.error(error)
    }
  })

  return (
    <div>
      <h1>InventoryMeters</h1>
    </div>
  )
}
