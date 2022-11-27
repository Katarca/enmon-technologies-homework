import { InitialInventoryMetersState, inventoryMetersReducer } from './hooks'
import { InventoryMetersComponent } from './index'
import { device } from '../../helpers/theme'
import { genericHookContextBuilder } from '../../hooks/genericHookContextBuilder'
import { useWindowSize } from '../../hooks/useWindowSize'
import React, { useReducer } from 'react'

const useLogicState = () => {
  const { w } = useWindowSize()
  const isPhone = w <= device.phone

  const [state, dispatch] = useReducer(inventoryMetersReducer, InitialInventoryMetersState)

  const handleSort = (clickedField: string) => {
    if (!state.sortField.includes(clickedField)) {
      dispatch({ type: 'update', payload: { key: 'sortField', value: `${clickedField}:asc` } })
    } else if (state.sortField === `${clickedField}:asc`) {
      dispatch({ type: 'update', payload: { key: 'sortField', value: `${clickedField}:desc` } })
    } else {
      dispatch({ type: 'update', payload: { key: 'sortField', value: `${clickedField}:asc` } })
    }
  }

  return {
    state,
    dispatch,
    handleSort,
    isPhone,
  }
}

export const {
  ContextProvider: InventoryMetersContextProvider,
  Context: InventoryMetersStateContext,
} = genericHookContextBuilder(useLogicState)

export const InventoryMeters = () => {
  return (
    <InventoryMetersContextProvider>
      <InventoryMetersComponent />
    </InventoryMetersContextProvider>
  )
}
