import { Div_SubContainer } from '../../components/Container'
import { GET_INVENTORY_METERS, GET_INVENTORY_METERS_COUNT } from '../../graphql/getInventoryMeters'
import { H1_Heading } from '../../components/Heading'
import { InventoryMeter } from '../../../generated/types'
import { InventoryTable } from './components/InventoryTable'
import { Pagination } from '../../components/Pagination'
import { SortField, SortValue } from './types'
import { UserStateContext } from '../../context/UserContext'
import { client } from '../../index'
import { styles } from '../../helpers/theme'
import React, { useContext, useEffect, useState } from 'react'

export const InventoryMeters = () => {
  const userContext = useContext(UserStateContext)
  const [inventoryMeters, setInventoryMeters] = useState(null as null | InventoryMeter[])
  const [sortField, setSortField] = useState<SortField>('id:asc')
  const [offset, setOffset] = useState(0)
  const [dataCount, setDataCount] = useState(0)

  const itemsPerPage = 10

  const fetchData = async () => {
    try {
      const getInventoryMeters = await client.query({
        query: GET_INVENTORY_METERS,
        variables: {
          sort: sortField,
          start: offset,
          publicationState: 'PREVIEW',
          limit: itemsPerPage,
        },
        context: {
          headers: {
            Authorization: `Bearer ${userContext.userJwt}`,
          },
        },
      })
      setInventoryMeters(getInventoryMeters.data.inventoryMeters)
      const getCount = await client.query({
        query: GET_INVENTORY_METERS_COUNT,
        context: {
          headers: {
            Authorization: `Bearer ${userContext.userJwt}`,
          },
        },
      })
      setDataCount(getCount.data?.inventoryMetersConnection.aggregate.totalCount)
    } catch (error) {
      console.error(error)
    }
  }

  const handlePageClick = (selectedItem: { selected: number }) => {
    const newOffset = (selectedItem.selected * itemsPerPage) % dataCount
    setOffset(newOffset)
  }

  useEffect(() => {
    fetchData()
  }, [sortField, offset])

  const handleSort = (clickedField: SortValue) => {
    if (!sortField.includes(clickedField)) {
      setSortField(`${clickedField}:asc`)
    } else if (sortField === `${clickedField}:asc`) {
      setSortField(`${clickedField}:desc`)
    } else {
      setSortField(`${clickedField}:asc`)
    }
  }

  return (
    <>
      <Div_SubContainer>
        <H1_Heading fontSize={styles.fontSize.l}>Inventory Meters List</H1_Heading>
      </Div_SubContainer>
      <Div_SubContainer column={true} alignItems='flex-end'>
        <InventoryTable
          sortField={sortField}
          handleSort={handleSort}
          inventoryMeters={inventoryMeters}
        />
        <Pagination
          handlePageClick={handlePageClick}
          itemsPerPage={itemsPerPage}
          itemsCount={dataCount}
          pageRangeDisplayed={5}
        />
      </Div_SubContainer>
    </>
  )
}
