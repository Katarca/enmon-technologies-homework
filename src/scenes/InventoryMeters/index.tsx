import { Div_SubContainer } from '../../components/Container/styles'
import { GET_INVENTORY_METERS, GET_INVENTORY_METERS_COUNT } from '../../graphql/getInventoryMeters'
import { H1_Heading } from '../../components/typo/Heading'
import { InitialInventoryMetersState, inventoryMetersReducer } from './hooks'
import { InventoryTable } from './InventoryTable'
import { P_BodyText } from '../../components/typo/BodyText'
import { Pagination } from '../../components/Pagination'
import { SortValue } from './types'
import { UserStateContext } from '../../context/UserContext'
import { client } from '../../apollo/client'
import React, { useContext, useEffect, useReducer } from 'react'

export const InventoryMeters = () => {
  const userContext = useContext(UserStateContext)

  const [state, dispatch] = useReducer(inventoryMetersReducer, InitialInventoryMetersState)

  const itemsPerPage = 10

  const fetchInventoryMeters = async () => {
    try {
      const getInventoryMeters = await client.query({
        query: GET_INVENTORY_METERS,
        variables: {
          sort: state.sortField,
          start: state.offset,
          publicationState: 'PREVIEW',
          limit: itemsPerPage,
        },
        context: {
          headers: {
            Authorization: `Bearer ${userContext.userJwt}`,
          },
        },
      })
      dispatch({ type: 'updateData', payload: getInventoryMeters.data.inventoryMeters })
      const getCount = await client.query({
        query: GET_INVENTORY_METERS_COUNT,
        context: {
          headers: {
            Authorization: `Bearer ${userContext.userJwt}`,
          },
        },
      })
      dispatch({
        type: 'updateDataCount',
        payload: getCount.data?.inventoryMetersConnection.aggregate.totalCount,
      })
    } catch (error) {
      console.error(error)
      dispatch({ type: 'updateFetchingError', payload: 'Error occurred while fetching data' })
      dispatch({ type: 'updateData', payload: null })
    }
  }

  const handlePageClick = (selectedItem: { selected: number }) => {
    const newOffset = (selectedItem.selected * itemsPerPage) % state.dataCount!
    dispatch({ type: 'updateOffset', payload: newOffset })
  }

  const handleSort = (clickedField: SortValue) => {
    if (!state.sortField.includes(clickedField)) {
      dispatch({ type: 'updateSortField', payload: `${clickedField}:asc` })
    } else if (state.sortField === `${clickedField}:asc`) {
      dispatch({ type: 'updateSortField', payload: `${clickedField}:desc` })
    } else {
      dispatch({ type: 'updateSortField', payload: `${clickedField}:asc` })
    }
  }

  useEffect(() => {
    fetchInventoryMeters()
  }, [state.sortField, state.offset])

  return (
    <>
      <Div_SubContainer>
        <H1_Heading className='l'>Inventory Meters List</H1_Heading>
      </Div_SubContainer>
      <Div_SubContainer>
        {state.fetchingError ? (
          <P_BodyText>{state.fetchingError}</P_BodyText>
        ) : (
          <>
            <InventoryTable
              sortField={state.sortField}
              handleSort={handleSort}
              inventoryMeters={state.data}
            />
            <Pagination
              handlePageClick={handlePageClick}
              itemsPerPage={itemsPerPage}
              itemsCount={state.dataCount!}
              pageRangeDisplayed={5}
            />
          </>
        )}
      </Div_SubContainer>
    </>
  )
}
