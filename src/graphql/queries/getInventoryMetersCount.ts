import { gql } from '@apollo/client'

export const GET_INVENTORY_METERS_COUNT = gql`
  query inventoryMetersCount {
    inventoryMetersConnection {
      aggregate {
        totalCount
      }
    }
  }
`
