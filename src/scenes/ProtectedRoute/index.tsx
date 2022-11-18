import { InventoryMeter } from '../InventoryMeterDetail/context'
import { InventoryMeters } from '../InventoryMeters/context'
import { Navigate } from 'react-router-dom'
import { UserStateContext } from '../../globalContext/UserContext'
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
    <InventoryMeter />
  ) : (
    <Navigate to={urls.login} />
  )
}
