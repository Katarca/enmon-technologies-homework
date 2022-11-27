import { Enum_Inventorymeter_Meter_Type } from '../../generated/types'
import { Reducer } from 'react'

type InventoryMeterState = {
  monitoredEntity: null | string
  meterType: null | Enum_Inventorymeter_Meter_Type
  serialNumber: null | string
  isUpdating: boolean
}

type InventoryMeterAction =
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
      payload: { key: 'isUpdating'; value: InventoryMeterState['isUpdating'] }
    }

export const InitialInventoryMeterState: InventoryMeterState = {
  monitoredEntity: null,
  meterType: null,
  serialNumber: null,
  isUpdating: false,
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
