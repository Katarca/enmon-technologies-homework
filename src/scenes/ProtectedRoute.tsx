import { InventoryMeterDetail } from './InventoryMeterDetail'
import { InventoryMeters } from './InventoryMeters/InventoryMeters'
import { Navigate } from 'react-router-dom'
import { UserStateContext } from '../context/UserContext'
import { urls } from '../helpers/urls'
import React, { useContext } from 'react'

type ProtectedRouteProps = {
  location: 'inventory-meters' | 'inventory-meter-detail'
}

export const ProtectedRoute = (props: ProtectedRouteProps) => {
  const userContext = useContext(UserStateContext)

  return userContext.userJwt && props.location === 'inventory-meters' ? (
    <InventoryMeters />
  ) : userContext.userJwt && props.location === 'inventory-meter-detail' ? (
    <InventoryMeterDetail />
  ) : (
    <Navigate to={urls.login} />
  )
}
