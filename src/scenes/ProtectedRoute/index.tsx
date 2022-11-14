import { InventoryMeterDetail } from '../InventoryMeterDetail'
import { InventoryMeters } from '../InventoryMeters'
import { Navigate } from 'react-router-dom'
import { UserStateContext } from '../../context/UserContext'
import { urls } from '../../helpers/urls'
import React, { useContext } from 'react'

type ProtectedRouteProps = {
  scene: 'inventoryMeters' | 'inventoryMeterDetail'
}

export const ProtectedRoute = (props: ProtectedRouteProps) => {
  const userContext = useContext(UserStateContext)

  return userContext.userJwt && props.scene === 'inventoryMeters' ? (
    <InventoryMeters />
  ) : userContext.userJwt && props.scene === 'inventoryMeterDetail' ? (
    <InventoryMeterDetail />
  ) : (
    <Navigate to={urls.login} />
  )
}
