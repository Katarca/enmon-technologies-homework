import { gql } from '@apollo/client'

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
