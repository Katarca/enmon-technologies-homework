import { CustomButton } from './Button'
import { H1_Heading } from './Heading'
import { P_BodyText } from './BodyText'
import { UserStateContext } from '../context/UserContext'
import { styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import { useComponentDidMount } from '../utils/useComponentDidMount'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

type InventoryLocation = {
  name: string
  [key: string]: any
}

type InventoryLocationBuilding = {
  name: string
  [key: string]: any
}

type InventoryMeter = {
  id: number
  serial_number: null | string
  meter_type: null | string
  monitored_entity: string
  inventory_location: null | InventoryLocation
  inventory_location_building: null | InventoryLocationBuilding
  accessibility: null | string
  [key: string]: any
}

export const InventoryMeters = () => {
  const userContext = useContext(UserStateContext)
  const [loading, setLoading] = useState(false)
  const [inventoryMeters, setInventoryMeters] = useState(null as null | InventoryMeter[])

  const navigate = useNavigate()

  useComponentDidMount(async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}api/inventory-meters?_sort=id:ASC`,
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
  })

  const handleLogout = () => {
    userContext.setUserJwt(null)
    navigate(urls.login)
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
                <Div_HeaderContainer>
                  <P_BodyText>ID</P_BodyText>
                </Div_HeaderContainer>
              </th>
              <th>
                <Div_HeaderContainer>
                  <P_BodyText>Serial key</P_BodyText>
                </Div_HeaderContainer>
              </th>
              <th>
                <Div_HeaderContainer>
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
                <Div_HeaderContainer>
                  <P_BodyText>Building</P_BodyText>
                </Div_HeaderContainer>
              </th>
              <th>
                <Div_HeaderContainer>
                  <P_BodyText>Accessibility</P_BodyText>
                </Div_HeaderContainer>
              </th>
            </tr>
          </Thead_InventoryThead>
          {loading ? (
            <P_BodyText>Loading data...</P_BodyText>
          ) : (
            <tbody>
              {inventoryMeters?.map(meter => (
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
                  <Td_InventoryTd>{meter.accessibility}</Td_InventoryTd>
                </tr>
              ))}
            </tbody>
          )}
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

const Div_HeaderContainer = styled.div`
  display: flex;
  padding: ${styles.spacing.l} ${styles.spacing.m};
`
const Td_InventoryTd = styled.td`
  font-size: ${styles.fontSize.s};
  color: ${styles.colors.black};
  padding: ${styles.spacing.m} ${styles.spacing.l};
`
