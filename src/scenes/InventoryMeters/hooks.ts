import { InventoryMeter } from '../../../generated/types'
import { Reducer } from 'react'
import { SortField } from './types'

type InventoryMetersState = {
  data: null | InventoryMeter[]
  dataCount: null | number
  sortField: SortField
  offset: number
  fetchingError: null | 'Error occurred while fetching data'
}

type InventoryMetersAction =
  | { type: 'updateData'; payload: InventoryMetersState['data'] }
  | { type: 'updateDataCount'; payload: InventoryMetersState['dataCount'] }
  | { type: 'updateSortField'; payload: InventoryMetersState['sortField'] }
  | { type: 'updateOffset'; payload: InventoryMetersState['offset'] }
  | { type: 'updateFetchingError'; payload: InventoryMetersState['fetchingError'] }

export const InitialInventoryMetersState: InventoryMetersState = {
  data: null,
  dataCount: null,
  sortField: 'id:asc',
  offset: 0,
  fetchingError: null,
}

export const inventoryMetersReducer: Reducer<InventoryMetersState, InventoryMetersAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'updateData': {
      return {
        ...state,
        data: action.payload,
      }
    }
    case 'updateDataCount': {
      return {
        ...state,
        dataCount: action.payload,
      }
    }
    case 'updateSortField': {
      return {
        ...state,
        sortField: action.payload,
      }
    }
    case 'updateOffset': {
      return {
        ...state,
        offset: action.payload,
      }
    }
    case 'updateFetchingError': {
      return {
        ...state,
        fetchingError: action.payload,
      }
    }
  }
}
