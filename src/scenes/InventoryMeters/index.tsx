import { Div_SubContainer } from '../../components/Container/styles'
import { GET_INVENTORY_METERS_DATA } from '../../graphql/queries/getInventoryMetersData'
import { H1_Heading } from '../../components/typo/Heading'
import {
  InventoryMeter,
  InventoryMeterConnection,
  QueryInventoryMetersArgs,
} from '../../generated/types'
import { InventoryMetersStateContext } from './context'
import { InventoryTable } from './InventoryTable'
import { Message } from '../../components/Message'
import { Pagination } from '../../components/Pagination'
import { UserStateContext } from '../../userContext/UserContext'
import { itemsPerPageOptions, pageRangeDisplay } from '../../helpers/variables'
import { useApolloQuery } from '../../hooks/useApolloQuery'
import React, { useContext } from 'react'

export type InventoryMetersQueryResults = {
  inventoryMeters: InventoryMeter[]
  inventoryMetersConnection: InventoryMeterConnection
}

export const InventoryMetersComponent = () => {
  const inventoryMetersContext = useContext(InventoryMetersStateContext)
  const userContext = useContext(UserStateContext)

  const { data, error } = useApolloQuery<InventoryMetersQueryResults, QueryInventoryMetersArgs>(
    GET_INVENTORY_METERS_DATA,
    {
      sort: inventoryMetersContext.state.sortField,
      start: inventoryMetersContext.state.offset,
      limit: inventoryMetersContext.state.itemsPerPage,
    },
    userContext.userJwt!
  )

  const itemsCount = data?.inventoryMetersConnection.aggregate?.totalCount
    ? data?.inventoryMetersConnection.aggregate?.totalCount
    : 0

  const handlePageClick = (selectedItem: { selected: number }) => {
    const newOffset =
      (selectedItem.selected * inventoryMetersContext.state.itemsPerPage) % itemsCount
    inventoryMetersContext.dispatch({
      type: 'update',
      payload: { key: 'offset', value: newOffset },
    })
  }

  if (error) {
    return <Message message={error.message} />
  }

  return (
    <>
      <Div_SubContainer>
        <H1_Heading className='fontSizeL'>Inventory Meters List</H1_Heading>
      </Div_SubContainer>
      <Div_SubContainer>
        <InventoryTable data={data} />
        <Pagination
          handlePageClick={handlePageClick}
          itemsPerPage={inventoryMetersContext.state.itemsPerPage}
          itemsCount={itemsCount}
          pageRangeDisplayed={
            inventoryMetersContext.isPhone ? pageRangeDisplay.phone : pageRangeDisplay.default
          }
          offset={inventoryMetersContext.state.offset}
          itemsName='Inventory Meters'
          itemsPerPageOptions={itemsPerPageOptions}
          onChange={e =>
            inventoryMetersContext.dispatch({
              type: 'update',
              payload: {
                key: 'itemsPerPage',
                value: Number(e.target.value),
              },
            })
          }
        />
      </Div_SubContainer>
    </>
  )
}
