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
export const GET_INVENTORY_METERS = gql`
  query inventoryMeters(
    $sort: String
    $start: Int
    $publicationState: PublicationState
    $limit: Int
  ) {
    inventoryMeters(
      sort: $sort
      start: $start
      publicationState: $publicationState
      limit: $limit
    ) {
      id
      serial_number
      meter_type
      monitored_entity
      inventory_location {
        name
      }
      inventory_location_building {
        name
      }
      accessibility
    }
  }
`
export const GET_INVENTORY_METER = gql`
  query InventoryMeter($where: JSON) {
    inventoryMeters(where: $where) {
      id
      serial_number
      meter_type
      monitored_entity
      inventory_location {
        name
      }
      inventory_location_building {
        name
      }
      accessibility
      code
    }
  }
`
