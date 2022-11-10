import { InventoryMeters } from './InventoryMeters/InventoryMeters'
import { Navigate } from 'react-router-dom'
import { UserStateContext } from '../context/UserContext'
import { urls } from '../helpers/urls'
import React, { useContext } from 'react'

export const ProtectedRoute = () => {
  const userContext = useContext(UserStateContext)

  return userContext.userJwt ? <InventoryMeters /> : <Navigate to={urls.login} />
}
