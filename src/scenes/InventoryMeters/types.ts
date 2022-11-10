import { InventoryMeter } from '../../../generated/types'

export type SortValue = 'id' | 'serial_number' | 'meter_type' | 'inventory_location_building.name'

export type SortField =
  | 'id:asc'
  | 'id:desc'
  | 'serial_number:asc'
  | 'serial_number:desc'
  | 'meter_type:asc'
  | 'meter_type:desc'
  | 'inventory_location_building.name:asc'
  | 'inventory_location_building.name:desc'

export type TableProps = {
  sortField: SortField
  handleSort: (clickedField: SortValue) => void
  inventoryMeters: null | InventoryMeter[]
}
