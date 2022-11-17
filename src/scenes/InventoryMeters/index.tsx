import { Div_SubContainer } from '../../components/Container/styles'
import { H1_Heading } from '../../components/typo/Heading'
import { InitialInventoryMetersState, inventoryMetersReducer } from './hooks'
import { InventoryTable } from './InventoryTable'
import { P_BodyText } from '../../components/typo/BodyText'
import { Pagination } from '../../components/Pagination'
import { UserStateContext } from '../../context/UserContext'
import { services } from '../../services/services'
import React, { useContext, useEffect, useReducer } from 'react'

export const InventoryMeters = () => {
  const userContext = useContext(UserStateContext)

  const [state, dispatch] = useReducer(inventoryMetersReducer, InitialInventoryMetersState)

  const itemsPerPage = 10

  const fetchInventoryMeters = async () => {
    try {
      const response = await services.getInventoryMeters({
        jwt: userContext.userJwt!,
        sort: state.sortField,
        start: state.offset,
        limit: itemsPerPage,
      })
      dispatch({ type: 'update', payload: { key: 'data', value: response.data } })
      const responseCount = await services.getInventoryMetersCount({ jwt: userContext.userJwt! })
      dispatch({
        type: 'update',
        payload: { key: 'dataCount', value: responseCount.data },
      })
    } catch (error) {
      console.error(error)
      dispatch({
        type: 'update',
        payload: { key: 'fetchingError', value: 'Error occurred while fetching data' },
      })
      dispatch({ type: 'update', payload: { key: 'data', value: null } })
    }
  }

  const handlePageClick = (selectedItem: { selected: number }) => {
    const newOffset = (selectedItem.selected * itemsPerPage) % state.dataCount!
    dispatch({ type: 'update', payload: { key: 'offset', value: newOffset } })
  }

  const handleSort = (clickedField: string) => {
    if (!state.sortField.includes(clickedField)) {
      dispatch({ type: 'update', payload: { key: 'sortField', value: `${clickedField}:asc` } })
    } else if (state.sortField === `${clickedField}:asc`) {
      dispatch({ type: 'update', payload: { key: 'sortField', value: `${clickedField}:desc` } })
    } else {
      dispatch({ type: 'update', payload: { key: 'sortField', value: `${clickedField}:asc` } })
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
