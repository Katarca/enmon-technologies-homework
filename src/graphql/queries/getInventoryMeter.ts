import { gql } from '@apollo/client'

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
