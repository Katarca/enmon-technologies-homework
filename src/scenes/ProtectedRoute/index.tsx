import { InventoryMeterContext } from '../InventoryMeterDetail/context'
import { InventoryMetersContext } from '../InventoryMeters/context'
import { Navigate } from 'react-router-dom'
import { UserStateContext } from '../../userContext/UserContext'
import { urls } from '../../helpers/urls'
import React, { useContext } from 'react'

type ProtectedRouteProps = {
  scene: 'inventoryMeters' | 'inventoryMeterDetail'
}

export const ProtectedRoute = (props: ProtectedRouteProps) => {
  const userContext = useContext(UserStateContext)

  return userContext.userJwt && props.scene === 'inventoryMeters' ? (
    <InventoryMetersContext />
  ) : userContext.userJwt && props.scene === 'inventoryMeterDetail' ? (
    <InventoryMeterContext />
  ) : (
    <Navigate to={urls.login} />
  )
}
