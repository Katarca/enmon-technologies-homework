import { InventoryMeter } from '../../../generated/types'
import { Reducer } from 'react'

type InventoryMetersState = {
  data: null | InventoryMeter[]
  dataCount: null | number
  sortField: string
  offset: number
  fetchingError: null | 'Error occurred while fetching data'
}

type InventoryMetersAction =
  | { type: 'update'; payload: { key: 'data'; value: InventoryMetersState['data'] } }
  | { type: 'update'; payload: { key: 'dataCount'; value: InventoryMetersState['dataCount'] } }
  | { type: 'update'; payload: { key: 'sortField'; value: InventoryMetersState['sortField'] } }
  | { type: 'update'; payload: { key: 'offset'; value: InventoryMetersState['offset'] } }
  | {
      type: 'update'
      payload: { key: 'fetchingError'; value: InventoryMetersState['fetchingError'] }
    }

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
    case 'update':
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      }
  }
}
