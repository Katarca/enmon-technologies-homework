import { UserStateContext } from '../context/UserContext'
import { useComponentDidMount } from '../utils/useComponentDidMount'
import React, { useContext, useState } from 'react'
import axios from 'axios'

export const InventoryMeters = () => {
  const userContext = useContext(UserStateContext)
  const [loading, setLoading] = useState(false)

  useComponentDidMount(async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}api/inventory-meters`, {
        headers: {
          Authorization: `Bearer ${userContext.userJwt}`,
        },
      })
      console.info(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  })

  return (
    <div>
      <h1>{loading ? 'Loading' : 'Inventory Meters'} </h1>
    </div>
  )
}
