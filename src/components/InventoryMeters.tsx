import { CustomButton } from './Button'
import { GET_INVENTORY_METERS, GET_INVENTORY_METERS_COUNT } from '../graphql/getInventoryMeters'
import { H1_Heading } from './Heading'
import { P_BodyText } from './BodyText'
import { Pagination } from './Pagination'
import { UserStateContext } from '../context/UserContext'
import { ReactComponent as arrowIcon } from '../icons/arrow-icon.svg'
import { client } from '../index'
import { styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

type SortField = 'id' | 'serial_number' | 'meter_type' | 'inventory_location_building.name'
type SortOrder = 'ASC' | 'DESC'
type Accessibility =
  | 'tenant'
  | 'floodedShaft'
  | 'good'
  | 'basement'
  | 'shaft'
  | 'high'
  | 'veryHigh'
  | undefined

export const InventoryMeters = () => {
  const userContext = useContext(UserStateContext)
  const [loading, setLoading] = useState(false)
  const [inventoryMeters, setInventoryMeters] = useState(null as null | [])
  const [sortField, setSortField] = useState<SortField>('id')
  const [sortOrder, setSortOrder] = useState<SortOrder>('ASC')
  const [offset, setOffset] = useState(0)
  const [dataCount, setDataCount] = useState(0)

  const itemsPerPage = 10

  const navigate = useNavigate()

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
    } finally {
      setLoading(false)
    }
  }

  const handlePageClick = (selectedItem: { selected: number }) => {
    const newOffset = (selectedItem.selected * itemsPerPage) % dataCount
    setOffset(newOffset)
  }

  useEffect(() => {
    fetchData()
  }, [sortField, sortOrder, offset])

  const handleLogout = () => {
    userContext.setUserJwt(null)
    navigate(urls.login)
  }

  const handleSort = (clickedField: SortField) => {
    if (clickedField !== sortField) {
      setSortOrder('ASC')
      setSortField(clickedField)
    } else if (clickedField === sortField && sortOrder === 'ASC') {
      setSortOrder('DESC')
    } else {
      setSortOrder('ASC')
    }
  }

  return (
    <>
      <Div_Box>
        <H1_Heading fontSize={styles.fontSize.m}>Inventory Meters List</H1_Heading>
        <CustomButton color='white' onClick={() => handleLogout()}>
          <P_BodyText>Logout</P_BodyText>
        </CustomButton>
      </Div_Box>
      <Div_Box column={true}>
        <Table_InventoryTable>
          <Thead_InventoryThead>
            <tr>
              <th>
                <Div_HeaderContainer
                  active={sortField === 'id'}
                  sortOrder={sortOrder}
                  onClick={() => handleSort('id')}
                >
                  <P_BodyText>ID</P_BodyText>
                  <ArrowIcon />
                </Div_HeaderContainer>
              </th>
              <th>
                <Div_HeaderContainer
                  active={sortField === 'serial_number'}
                  sortOrder={sortOrder}
                  onClick={() => handleSort('serial_number')}
                >
                  <P_BodyText>Serial key</P_BodyText>
                  <ArrowIcon />
                </Div_HeaderContainer>
              </th>
              <th>
                <Div_HeaderContainer
                  active={sortField === 'meter_type'}
                  sortOrder={sortOrder}
                  onClick={() => handleSort('meter_type')}
                >
                  <P_BodyText>Meter Type</P_BodyText>
                </Div_HeaderContainer>
              </th>
              <th>
                <Div_HeaderContainer>
                  <P_BodyText>What it monitors</P_BodyText>
                </Div_HeaderContainer>
              </th>
              <th>
                <Div_HeaderContainer>
                  <P_BodyText>Inventory Location</P_BodyText>
                </Div_HeaderContainer>
              </th>
              <th>
                <Div_HeaderContainer
                  active={sortField === 'inventory_location_building.name'}
                  sortOrder={sortOrder}
                  onClick={() => handleSort('inventory_location_building.name')}
                >
                  <P_BodyText>Building</P_BodyText>
                  <ArrowIcon />
                </Div_HeaderContainer>
              </th>
              <th>
                <Div_HeaderContainer>
                  <P_BodyText>Accessibility</P_BodyText>
                </Div_HeaderContainer>
              </th>
            </tr>
          </Thead_InventoryThead>
          <tbody>
            {inventoryMeters?.map((meter: any) => (
              <tr key={meter.id}>
                <Td_InventoryTd>{meter.id}</Td_InventoryTd>
                <Td_InventoryTd>{meter.serial_number}</Td_InventoryTd>
                <Td_InventoryTd>{meter.meter_type}</Td_InventoryTd>
                <Td_InventoryTd>{meter.monitored_entity}</Td_InventoryTd>
                <Td_InventoryTd>
                  {meter.inventory_location ? meter.inventory_location.name : null}
                </Td_InventoryTd>
                <Td_InventoryTd>
                  {meter.inventory_location_building
                    ? meter.inventory_location_building.name
                    : null}
                </Td_InventoryTd>
                <Td_InventoryTd>
                  {meter.accessibility
                    ?.split(';')
                    .map((accessibility: Accessibility, i: number) => (
                      <Span_AccessibilitySpan key={i}>{accessibility}</Span_AccessibilitySpan>
                    ))}
                </Td_InventoryTd>
              </tr>
            ))}
          </tbody>
        </Table_InventoryTable>
        <Pagination
          handlePageClick={handlePageClick}
          itemsPerPage={itemsPerPage}
          itemsCount={dataCount}
          pageRangeDisplayed={5}
        />
      </Div_Box>
    </>
  )
}

const Div_Box = styled.div<{ column?: boolean }>`
  background-color: ${styles.colors.white};
  padding: ${styles.spacing.m} ${styles.spacing.l};
  margin: ${styles.spacing.m};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}
`

const Table_InventoryTable = styled.table`
  width: 100%;
`
const Thead_InventoryThead = styled.thead`
  background-color: ${styles.colors.grey50};
`

const Div_HeaderContainer = styled.div<{
  active?: boolean
  sortOrder?: SortOrder
}>`
  display: flex;
  padding: ${styles.spacing.l} ${styles.spacing.m};
  justify-content: space-between;
  cursor: pointer;
  ${({ active, sortOrder }) =>
    active &&
    css`
      & > svg {
        ${sortOrder === 'DESC' && 'transform: rotate(0deg)'};
        fill: ${styles.colors.black};
      }
    `}
`
const Td_InventoryTd = styled.td`
  font-size: ${styles.fontSize.s};
  color: ${styles.colors.black};
  padding: ${styles.spacing.m} ${styles.spacing.l};
`
const Span_AccessibilitySpan = styled.span`
  margin-right: ${styles.spacing.xs};
  display: inline-block;
`
const ArrowIcon = styled(arrowIcon)`
  width: 10px;
  fill: ${styles.colors.grey300};
  margin-left: ${styles.spacing.xs};
  transform: rotate(-180deg);
`
