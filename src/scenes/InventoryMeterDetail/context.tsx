import { InitialInventoryMeterState, inventoryMeterReducer } from './hooks'
import { InventoryMeterComponent } from './index'
import { UserStateContext } from '../../globalContext/UserContext'
import { delay } from '../../utils/delay'
import { genericHookContextBuilder } from '../../utils/genericHookContextBuilder'
import { services } from '../../services/services'
import { useComponentDidMount } from '../../utils/useComponentDidMout'
import { useParams } from 'react-router-dom'
import React, { useContext, useReducer } from 'react'

const useLogicState = () => {
  const userContext = useContext(UserStateContext)

  const [state, dispatch] = useReducer(inventoryMeterReducer, InitialInventoryMeterState)

  const params = useParams<{ id: string }>()
  const id = params.id

  const fetchInventoryMeter = async () => {
    try {
      const response = await services.getInventoryMeter({ id: id!, jwt: userContext.userJwt! })
      dispatch({
        type: 'update',
        payload: { key: 'data', value: response.data ? response.data[0] : undefined },
      })
    } catch (error) {
      dispatch({
        type: 'update',
        payload: { key: 'fetchingError', value: 'Error occurred while fetching data' },
      })
      dispatch({ type: 'update', payload: { key: 'data', value: null } })
    }
  }

  useComponentDidMount(async () => {
    fetchInventoryMeter()
  })

  const handleUpdate = async () => {
    try {
      const response = await services.updateInventoryMeterMutation({
        jwt: userContext.userJwt!,
        data: {
          ...(state.serialNumber !== null && { serial_number: state.serialNumber! }),
          ...(state.monitoredEntity !== null && { monitored_entity: state.monitoredEntity! }),
          ...(state.meterType !== null && { meter_type: state.meterType! }),
        },
        where: {
          id: state.data?.id!,
        },
      })
      dispatch({
        type: 'update',
        payload: { key: 'dataUpdated', value: response.data ? true : false },
      })
      await delay(3000)
      dispatch({
        type: 'update',
        payload: { key: 'dataUpdated', value: false },
      }),
        fetchInventoryMeter()
    } catch (error) {
      dispatch({
        type: 'update',
        payload: { key: 'fetchingError', value: 'Error occurred while fetching data' },
      })
      dispatch({ type: 'update', payload: { key: 'data', value: null } })
    }
  }

  return {
    state,
    dispatch,
    handleUpdate,
  }
}

export const {
  ContextProvider: InventoryMeterContextProvider,
  Context: InventoryMeterStateContext,
} = genericHookContextBuilder(useLogicState)

export const InventoryMeter = () => {
  return (
    <InventoryMeterContextProvider>
      <InventoryMeterComponent />
    </InventoryMeterContextProvider>
  )
}
