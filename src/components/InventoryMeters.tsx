import { CustomButton } from './Button'
import { Div_SubContainer } from './Container'
import { GET_INVENTORY_METERS, GET_INVENTORY_METERS_COUNT } from '../graphql/getInventoryMeters'
import { H1_Heading } from './Heading'
import { InventoryMeter } from '../../generated/types'
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

export const InventoryMeters = () => {
  const userContext = useContext(UserStateContext)
  const [loading, setLoading] = useState(false)
  const [inventoryMeters, setInventoryMeters] = useState(null as null | InventoryMeter[])
  const [sortField, setSortField] = useState('id:asc')
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
  }, [sortField, offset])

  const handleLogout = () => {
    userContext.setUserJwt(null)
    navigate(urls.login)
  }

  const handleSort = (clickedField: string) => {
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
        <H1_Heading fontSize={styles.fontSize.m}>Inventory Meters List</H1_Heading>
        <CustomButton color='white' onClick={() => handleLogout()}>
          <P_BodyText>Logout</P_BodyText>
        </CustomButton>
      </Div_SubContainer>
      <Div_SubContainer column={true}>
        <Div_TableContainer>
          <Table_InventoryTable>
            <Thead_InventoryThead>
              <tr>
                <th>
                  <Div_HeaderContainer
                    sortField={sortField}
                    active={sortField.includes('id')}
                    onClick={() => handleSort('id')}
                  >
                    <P_BodyText>ID</P_BodyText>
                    <ArrowIcon />
                  </Div_HeaderContainer>
                </th>
                <th>
                  <Div_HeaderContainer
                    sortField={sortField}
                    active={sortField.includes('serial_number')}
                    onClick={() => handleSort('serial_number')}
                  >
                    <P_BodyText>Serial key</P_BodyText>
                    <ArrowIcon />
                  </Div_HeaderContainer>
                </th>
                <th>
                  <Div_HeaderContainer
                    sortField={sortField}
                    active={sortField.includes('meter_type')}
                    onClick={() => handleSort('meter_type')}
                  >
                    <P_BodyText>Meter Type</P_BodyText>
                    <ArrowIcon />
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
                    sortField={sortField}
                    active={sortField.includes('inventory_location_building.name')}
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
              {inventoryMeters?.map(meter => (
                <Tr_InventoryTr key={meter.id}>
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
                    {meter.accessibility?.split(';').map((accessibility, i) => (
                      <Span_AccessibilitySpan key={i} accessibility={accessibility}>
                        {accessibility}
                      </Span_AccessibilitySpan>
                    ))}
                  </Td_InventoryTd>
                </Tr_InventoryTr>
              ))}
            </tbody>
          </Table_InventoryTable>
        </Div_TableContainer>
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

const Div_TableContainer = styled.div`
  overflow: auto;
  width: 100%;
`

const Table_InventoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`
const Thead_InventoryThead = styled.thead`
  background-color: ${styles.colors.grey50};
  border-bottom: ${styles.borderProperty.primary} ${styles.colors.grey100};
`

const Div_HeaderContainer = styled.div<{
  sortField?: string
  active?: boolean
}>`
  display: flex;
  padding: ${styles.spacing.l} ${styles.spacing.m};
  justify-content: space-between;
  cursor: pointer;
  ${({ active, sortField }) =>
    active &&
    css`
      & > svg {
        ${sortField?.includes('desc') && 'transform: rotate(0deg)'};
        fill: ${styles.colors.black};
      }
    `}
`
const Tr_InventoryTr = styled.tr`
  border-bottom: ${styles.borderProperty.primary} ${styles.colors.grey50};
  transition: ${styles.transition.primary};
  &:hover {
    background-color: ${styles.colors.grey50};
  }
`

const Td_InventoryTd = styled.td`
  font-size: ${styles.fontSize.s};
  color: ${styles.colors.black};
  padding: ${styles.spacing.l};
`
const Span_AccessibilitySpan = styled.span<{ accessibility: string }>`
  margin: 0 ${styles.spacing.xs} ${styles.spacing.xs} 0;
  display: inline-block;
  padding: ${styles.spacing.xxs} ${styles.spacing.xs};
  font-size: ${styles.fontSize.xs};
  border-radius: ${styles.borderRadius.primary};
  border: ${styles.borderProperty.primary} transparent;
  background-color: ${props =>
    props.accessibility === 'good'
      ? styles.colors.green100
      : props.accessibility === 'tenant' ||
        props.accessibility === 'shaft' ||
        props.accessibility === 'high' ||
        props.accessibility === 'basement'
      ? styles.colors.orange100
      : styles.colors.pink100};
  color: ${props =>
    props.accessibility === 'good'
      ? styles.colors.primaryGreen
      : props.accessibility === 'tenant' ||
        props.accessibility === 'shaft' ||
        props.accessibility === 'high' ||
        props.accessibility === 'basement'
      ? styles.colors.orange200
      : styles.colors.red200};
  border-color: ${props =>
    props.accessibility === 'good'
      ? styles.colors.primaryGreen
      : props.accessibility === 'tenant' ||
        props.accessibility === 'shaft' ||
        props.accessibility === 'high' ||
        props.accessibility === 'basement'
      ? styles.colors.orange200
      : styles.colors.red200};
`
const ArrowIcon = styled(arrowIcon)`
  width: ${styles.iconWidth.xs};
  fill: ${styles.colors.grey300};
  margin-left: ${styles.spacing.xs};
  transform: rotate(-180deg);
`
