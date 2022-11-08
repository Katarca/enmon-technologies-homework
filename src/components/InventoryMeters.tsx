import { CustomButton } from './Button'
import { H1_Heading } from './Heading'
import { P_BodyText } from './BodyText'
import { UserStateContext } from '../context/UserContext'
import { ReactComponent as arrowIcon } from '../icons/arrow-icon.svg'
import { styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import { useComponentDidMount } from '../utils/useComponentDidMount'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import styled, { css } from 'styled-components'

type SortField = 'id' | 'serial_number' | 'meter_type' | 'inventory_location_building.name'
type SortOrder = 'ASC' | 'DESC'

export const InventoryMeters = () => {
  const userContext = useContext(UserStateContext)
  const [loading, setLoading] = useState(false)
  const [inventoryMeters, setInventoryMeters] = useState(null as null | any)
  const [sortField, setSortField] = useState<SortField>('id')
  const [sortOrder, setSortOrder] = useState<SortOrder>('ASC')

  const navigate = useNavigate()

  const fetchData = async (field: SortField, order: SortOrder) => {
    setLoading(true)
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}api/inventory-meters?_start=0&_limit=10&_sort=${field}:${order}`,
        {
          headers: {
            Authorization: `Bearer ${userContext.userJwt}`,
          },
        }
      )
      setInventoryMeters(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useComponentDidMount(async () => {
    fetchData(sortField, sortOrder)
  })

  const handleLogout = () => {
    userContext.setUserJwt(null)
    navigate(urls.login)
  }

  const fetchSortedData = (clickedField: SortField) => {
    if (clickedField !== sortField) {
      setSortOrder('ASC')
      setSortField(clickedField)
      fetchData(clickedField, 'ASC')
    } else if (clickedField === sortField && sortOrder === 'ASC') {
      setSortOrder('DESC')
      fetchData(clickedField, 'DESC')
    } else {
      setSortOrder('ASC')
      fetchData(clickedField, 'ASC')
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
      <Div_Box>
        <Table_InventoryTable>
          <Thead_InventoryThead>
            <tr>
              <th>
                <Div_HeaderContainer
                  active={sortField === 'id'}
                  sortOrder={sortOrder}
                  onClick={() => fetchSortedData('id')}
                >
                  <P_BodyText>ID</P_BodyText>
                  <ArrowIcon />
                </Div_HeaderContainer>
              </th>
              <th>
                <Div_HeaderContainer
                  active={sortField === 'serial_number'}
                  sortOrder={sortOrder}
                  onClick={() => fetchSortedData('serial_number')}
                >
                  <P_BodyText>Serial key</P_BodyText>
                  <ArrowIcon />
                </Div_HeaderContainer>
              </th>
              <th>
                <Div_HeaderContainer
                  active={sortField === 'meter_type'}
                  sortOrder={sortOrder}
                  onClick={() => fetchSortedData('meter_type')}
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
                  onClick={() => fetchSortedData('inventory_location_building.name')}
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
                  {meter.accessibility?.split(';').map((accessibility: any, i: number) => (
                    <Span_AccessibilitySpan key={i}>{accessibility}</Span_AccessibilitySpan>
                  ))}
                </Td_InventoryTd>
              </tr>
            ))}
          </tbody>
        </Table_InventoryTable>
      </Div_Box>
    </>
  )
}

const Div_Box = styled.div`
  background-color: ${styles.colors.white};
  padding: ${styles.spacing.m} ${styles.spacing.l};
  margin: ${styles.spacing.m};
  display: flex;
  justify-content: space-between;
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
  ${({ active }) =>
    active &&
    css`
      background-color: ${styles.colors.grey100};
    `}
  ${({ active, sortOrder }) =>
    active &&
    sortOrder === 'DESC' &&
    css`
      & > svg {
        transform: rotate(0deg);
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
