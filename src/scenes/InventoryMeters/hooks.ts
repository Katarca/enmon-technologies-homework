import { Reducer } from 'react'

type InventoryMetersState = {
  sortField: string
  offset: number
  itemsPerPage: number
}

type InventoryMetersAction =
  | { type: 'update'; payload: { key: 'sortField'; value: InventoryMetersState['sortField'] } }
  | { type: 'update'; payload: { key: 'offset'; value: InventoryMetersState['offset'] } }
  | {
      type: 'update'
      payload: { key: 'itemsPerPage'; value: InventoryMetersState['itemsPerPage'] }
    }

export const InitialInventoryMetersState: InventoryMetersState = {
  sortField: 'id:asc',
  offset: 0,
  itemsPerPage: 10,
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
