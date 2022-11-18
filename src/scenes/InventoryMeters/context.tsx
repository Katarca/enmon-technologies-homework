import { InitialInventoryMetersState, inventoryMetersReducer } from './hooks'
import { InventoryMetersComponent } from './index'
import { UserStateContext } from '../../globalContext/UserContext'
import { genericHookContextBuilder } from '../../utils/genericHookContextBuilder'
import { services } from '../../services/services'
import React, { useContext, useEffect, useReducer } from 'react'

const useLogicState = () => {
  const userContext = useContext(UserStateContext)

  const [state, dispatch] = useReducer(inventoryMetersReducer, InitialInventoryMetersState)

  const fetchInventoryMeters = async () => {
    try {
      const response = await services.getInventoryMeters({
        jwt: userContext.userJwt!,
        sort: state.sortField,
        start: state.offset,
        limit: state.itemsPerPage,
      })
      dispatch({ type: 'update', payload: { key: 'data', value: response.data } })
      const responseCount = await services.getInventoryMetersCount({ jwt: userContext.userJwt! })
      dispatch({
        type: 'update',
        payload: { key: 'dataCount', value: responseCount.data },
      })
    } catch (error) {
      dispatch({
        type: 'update',
        payload: { key: 'fetchingError', value: 'Error occurred while fetching data' },
      })
      dispatch({ type: 'update', payload: { key: 'data', value: null } })
      dispatch({
        type: 'update',
        payload: { key: 'dataCount', value: null },
      })
    }
  }

  const handlePageClick = (selectedItem: { selected: number }) => {
    const newOffset = (selectedItem.selected * state.itemsPerPage) % state.dataCount!
    dispatch({ type: 'update', payload: { key: 'offset', value: newOffset } })
  }

  const handleSort = (clickedField: string) => {
    if (!state.sortField.includes(clickedField)) {
      dispatch({ type: 'update', payload: { key: 'sortField', value: `${clickedField}:asc` } })
    } else if (state.sortField === `${clickedField}:asc`) {
      dispatch({ type: 'update', payload: { key: 'sortField', value: `${clickedField}:desc` } })
    } else {
      dispatch({ type: 'update', payload: { key: 'sortField', value: `${clickedField}:asc` } })
    }
  }

  useEffect(() => {
    fetchInventoryMeters()
  }, [state.sortField, state.offset, state.itemsPerPage])

  return {
    state,
    dispatch,
    handlePageClick,
    handleSort,
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
