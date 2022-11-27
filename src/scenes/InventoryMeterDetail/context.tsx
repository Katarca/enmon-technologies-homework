import { InitialInventoryMeterState, inventoryMeterReducer } from './hooks'
import { InventoryMeterComponent } from './index'
import { genericHookContextBuilder } from '../../hooks/genericHookContextBuilder'
import { useParams } from 'react-router-dom'
import React, { useReducer } from 'react'

const useLogicState = () => {
  const [state, dispatch] = useReducer(inventoryMeterReducer, InitialInventoryMeterState)

  const params = useParams<{ id: string }>()
  const id = params.id

  return {
    state,
    dispatch,
    id,
  }
}

export const {
  ContextProvider: InventoryMeterContextProvider,
  Context: InventoryMeterStateContext,
} = genericHookContextBuilder(useLogicState)

export const InventoryMeterContext = () => {
  return (
    <InventoryMeterContextProvider>
      <InventoryMeterComponent />
    </InventoryMeterContextProvider>
  )
}
