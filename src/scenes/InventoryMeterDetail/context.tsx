import { GET_INVENTORY_METER } from '../../graphql/queries/getInventoryMeter'
import { InitialInventoryMeterState, inventoryMeterReducer } from './hooks'
import {
  InventoryMeter,
  MutationUpdateInventoryMeterArgs,
  QueryInventoryMetersArgs,
} from '../../generated/types'
import { InventoryMeterDetail } from './index'
import { UPDATE_INVENTORY_METER } from '../../graphql/mutations/updateInventoryMeter'
import { UserStateContext } from '../../userContext/UserContext'
import { genericHookContextBuilder } from '../../hooks/genericHookContextBuilder'
import { useApolloMutation } from '../../hooks/useApolloMutation'
import { useApolloQuery } from '../../hooks/useApolloQuery'
import { useParams } from 'react-router-dom'
import React, { useContext, useReducer } from 'react'

type InventoryMeterQueryResult = {
  inventoryMeters: InventoryMeter[]
}

type UpdateInventoryMeterResult = {
  updateInventoryMeter: InventoryMeter
}

const useLogicState = () => {
  const userContext = useContext(UserStateContext)
  const [state, dispatch] = useReducer(inventoryMeterReducer, InitialInventoryMeterState)

  const params = useParams<{ id: string }>()
  const id = params.id

  const { data, loading, error, refetch, networkStatus } = useApolloQuery<
    InventoryMeterQueryResult,
    QueryInventoryMetersArgs
  >(
    GET_INVENTORY_METER,
    {
      where: {
        id: id,
      },
    },
    userContext.userJwt ? userContext.userJwt : ''
  )

  //I am getting inventory meter data from inventory meters query by setting where: id equals id from params so result is array of inventory meters with one item since id is unique
  const inventoryMeter = data?.inventoryMeters ? data.inventoryMeters[0] : null

  const { mutationFunction: updateInventoryMeter } = useApolloMutation<
    UpdateInventoryMeterResult,
    MutationUpdateInventoryMeterArgs
  >({
    mutation: UPDATE_INVENTORY_METER,
    variables: {
      input: {
        data: {
          serial_number:
            state.serialNumber !== null ? state.serialNumber : inventoryMeter?.serial_number,
          monitored_entity:
            state.monitoredEntity !== null
              ? state.monitoredEntity
              : inventoryMeter?.monitored_entity,
          meter_type: state.meterType ? state.meterType : inventoryMeter?.meter_type,
        },
        where: { id: id! },
      },
    },
    context: {
      headers: {
        Authorization: `Bearer ${userContext.userJwt}`,
      },
    },
  })

  return {
    state,
    dispatch,
    data,
    loading,
    error,
    refetch,
    networkStatus,
    inventoryMeter,
    updateInventoryMeter,
  }
}

export const {
  ContextProvider: InventoryMeterContextProvider,
  Context: InventoryMeterStateContext,
} = genericHookContextBuilder(useLogicState)

export const InventoryMeterContext = () => {
  return (
    <InventoryMeterContextProvider>
      <InventoryMeterDetail />
    </InventoryMeterContextProvider>
  )
}
