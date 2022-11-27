import { gql } from '@apollo/client'

export const UPDATE_INVENTORY_METER = gql`
  mutation updateInventoryMeter($input: updateInventoryMeterInput) {
    updateInventoryMeter(input: $input) {
      inventoryMeter {
        monitored_entity
      }
    }
  }
`
