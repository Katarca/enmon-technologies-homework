import {
  GET_INVENTORY_METER,
  GET_INVENTORY_METERS,
  GET_INVENTORY_METERS_COUNT,
} from '../graphql/getInventoryMeters'
import { LOGIN } from '../graphql/mutations/loginMutation'
import {
  MutationLoginArgs,
  QueryInventoryMeterArgs,
  QueryInventoryMetersArgs,
  Scalars,
} from '../../generated/types'
import { UPDATE_INVENTORY_METER } from '../graphql/mutations/updateInventoryMeter'
import { client } from '../apollo/client'

type InventoryMetersProps = QueryInventoryMetersArgs & { jwt: Scalars['String'] }

type InventoryMetersCountProps = { jwt: Scalars['String'] }

type InventoryMeterProps = QueryInventoryMeterArgs & { jwt: Scalars['String'] }

type UpdateInventoryMeterProps = {
  jwt: Scalars['String']
  data: Object
  where: {
    id: Scalars['ID']
  }
}

export const services = {
  loginMutation: async (props: MutationLoginArgs) => {
    try {
      const response = await client.mutate({
        mutation: LOGIN,
        variables: {
          input: props.input,
        },
      })
      return {
        data: response.data.login,
      }
    } catch (error) {
      console.error(error)
      return {
        data: null,
      }
    }
  },
  getInventoryMeters: async (props: InventoryMetersProps) => {
    try {
      const response = await client.query({
        query: GET_INVENTORY_METERS,
        variables: {
          sort: props.sort,
          start: props.start,
          publicationState: props.publicationState,
          limit: props.limit,
        },
        context: {
          headers: {
            Authorization: `Bearer ${props.jwt}`,
          },
        },
      })
      return {
        data: response.data.inventoryMeters,
      }
    } catch (error) {
      console.error(error)
      return {
        data: null,
      }
    }
  },
  getInventoryMetersCount: async (props: InventoryMetersCountProps) => {
    try {
      const response = await client.query({
        query: GET_INVENTORY_METERS_COUNT,
        context: {
          headers: {
            Authorization: `Bearer ${props.jwt}`,
          },
        },
      })
      return {
        data: response.data.inventoryMetersConnection.aggregate.totalCount,
      }
    } catch (error) {
      console.error(error)
      return {
        data: null,
      }
    }
  },
  getInventoryMeter: async (props: InventoryMeterProps) => {
    try {
      const response = await client.query({
        query: GET_INVENTORY_METER,
        variables: {
          where: {
            id: props.id,
          },
        },
        context: {
          headers: {
            Authorization: `Bearer ${props.jwt}`,
          },
        },
      })
      return {
        data: response.data.inventoryMeters,
      }
    } catch (error) {
      console.error(error)
      return {
        data: null,
      }
    }
  },
  updateInventoryMeterMutation: async (props: UpdateInventoryMeterProps) => {
    try {
      const response = await client.mutate({
        mutation: UPDATE_INVENTORY_METER,
        variables: {
          input: {
            data: props.data,
            where: props.where,
          },
        },
        context: {
          headers: {
            Authorization: `Bearer ${props.jwt}`,
          },
        },
      })
      return {
        data: response.data.updateInventoryMeter.inventoryM,
      }
    } catch (error) {
      console.error(error)
      return {
        data: null,
      }
    }
  },
}
