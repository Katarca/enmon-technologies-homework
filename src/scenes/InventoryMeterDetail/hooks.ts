import { InventoryMeter } from '../../../generated/types'
import { Reducer } from 'react'

type InventoryMeterState = {
  data: null | InventoryMeter | undefined
  monitoredEntity: null | string
  meterType: null | string
  serialNumber: null | string
  dataUpdated: boolean
  fetchingError: null | 'Error occurred while fetching data'
}

type InventoryMeterAction =
  | { type: 'updateData'; payload: InventoryMeterState['data'] }
  | { type: 'updateMonitoredEntity'; payload: InventoryMeterState['monitoredEntity'] }
  | { type: 'updateMeterType'; payload: InventoryMeterState['meterType'] }
  | { type: 'updateSerialNumber'; payload: InventoryMeterState['serialNumber'] }
  | { type: 'changeDataUpdated'; payload: InventoryMeterState['dataUpdated'] }
  | { type: 'updateFetchingError'; payload: InventoryMeterState['fetchingError'] }

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
    case 'updateData': {
      return {
        ...state,
        data: action.payload,
      }
    }
    case 'updateMonitoredEntity': {
      return {
        ...state,
        monitoredEntity: action.payload,
      }
    }
    case 'updateMeterType': {
      return {
        ...state,
        meterType: action.payload,
      }
    }
    case 'updateSerialNumber': {
      return {
        ...state,
        serialNumber: action.payload,
      }
    }
    case 'changeDataUpdated': {
      return {
        ...state,
        dataUpdated: action.payload,
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
