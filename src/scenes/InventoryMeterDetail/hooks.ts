import { InventoryMeter } from '../../../generated/types'
import { Reducer } from 'react'

type InventoryMeterState = {
  data: null | InventoryMeter
  monitoredEntity: null | string
  meterType: null | string
  serialNumber: null | string
  dataUpdated: boolean
  fetchingError: null | 'Error occurred while fetching data'
}

type InventoryMeterAction =
  | { type: 'update'; payload: { key: 'data'; value: InventoryMeterState['data'] } }
  | {
      type: 'update'
      payload: { key: 'monitoredEntity'; value: InventoryMeterState['monitoredEntity'] }
    }
  | {
      type: 'update'
      payload: { key: 'meterType'; value: InventoryMeterState['meterType'] }
    }
  | {
      type: 'update'
      payload: { key: 'serialNumber'; value: InventoryMeterState['serialNumber'] }
    }
  | {
      type: 'update'
      payload: { key: 'dataUpdated'; value: InventoryMeterState['dataUpdated'] }
    }
  | {
      type: 'update'
      payload: { key: 'fetchingError'; value: InventoryMeterState['fetchingError'] }
    }

export const InitialInventoryMeterState: InventoryMeterState = {
  data: null,
  monitoredEntity: null,
  meterType: null,
  serialNumber: null,
  dataUpdated: false,
  fetchingError: null,
}

export const inventoryMeterReducer: Reducer<InventoryMeterState, InventoryMeterAction> = (
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
