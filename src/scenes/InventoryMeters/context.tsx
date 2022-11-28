import { GET_INVENTORY_METERS_DATA } from '../../graphql/queries/getInventoryMetersData'
import { InitialInventoryMetersState, inventoryMetersReducer } from './hooks'
import {
  InventoryMeter,
  InventoryMeterConnection,
  QueryInventoryMetersArgs,
} from '../../generated/types'
import { InventoryMeters } from './index'
import { UserStateContext } from '../../userContext/UserContext'
import { device } from '../../helpers/theme'
import { genericHookContextBuilder } from '../../hooks/genericHookContextBuilder'
import { useApolloQuery } from '../../hooks/useApolloQuery'
import { useWindowSize } from '../../hooks/useWindowSize'
import React, { useContext, useReducer } from 'react'

export type InventoryMetersQueryResults = {
  inventoryMeters: InventoryMeter[]
  inventoryMetersConnection: InventoryMeterConnection
}

const useLogicState = () => {
  const userContext = useContext(UserStateContext)
  const [state, dispatch] = useReducer(inventoryMetersReducer, InitialInventoryMetersState)

  const { w } = useWindowSize()
  const isPhone = w <= device.phone

  const { data, error } = useApolloQuery<InventoryMetersQueryResults, QueryInventoryMetersArgs>(
    GET_INVENTORY_METERS_DATA,
    {
      sort: state.sortField,
      start: state.offset,
      limit: state.itemsPerPage,
    },
    userContext.userJwt ? userContext.userJwt : ''
  )

  // After clicking on new field order is by default ascending, every other click change order to the opposite value
  const handleSort = (clickedField: string) => {
    if (!state.sortField.includes(clickedField)) {
      dispatch({ type: 'update', payload: { key: 'sortField', value: `${clickedField}:asc` } })
    } else if (state.sortField === `${clickedField}:asc`) {
      dispatch({ type: 'update', payload: { key: 'sortField', value: `${clickedField}:desc` } })
    } else {
      dispatch({ type: 'update', payload: { key: 'sortField', value: `${clickedField}:asc` } })
    }
  }

  const itemsCount = data?.inventoryMetersConnection.aggregate?.totalCount
    ? data?.inventoryMetersConnection.aggregate?.totalCount
    : 0

  // Handler for page change of pagination
  const handlePageClick = (selectedItem: { selected: number }) => {
    const newOffset = (selectedItem.selected * state.itemsPerPage) % itemsCount
    dispatch({
      type: 'update',
      payload: { key: 'offset', value: newOffset },
    })
  }

  return {
    state,
    dispatch,
    handleSort,
    isPhone,
    data,
    error,
    handlePageClick,
    itemsCount,
  }
}

export const {
  ContextProvider: InventoryMetersContextProvider,
  Context: InventoryMetersStateContext,
} = genericHookContextBuilder(useLogicState)

export const InventoryMetersContext = () => {
  return (
    <InventoryMetersContextProvider>
      <InventoryMeters />
    </InventoryMetersContextProvider>
  )
}
