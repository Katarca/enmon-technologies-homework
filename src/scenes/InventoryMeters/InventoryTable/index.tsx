import {
  ArrowIcon,
  Div_HeaderContainer,
  Div_TableContainer,
  Table_InventoryTable,
  Td_InventoryTd,
  Thead_InventoryThead,
  Tr_InventoryTr,
} from './styles'
import { CustomButton } from '../../../components/Button/styles'
import { InventoryMetersStateContext } from '../context'
import { P_BodyText } from '../../../components/typo/BodyText'
import { RouterLink } from '../../../components/Link'
import { Span_TextBox } from '../../../components/typo/TextBox'
import { urls } from '../../../helpers/urls'
import React, { useContext } from 'react'

export const InventoryTable = () => {
  const inventoryMetersContext = useContext(InventoryMetersStateContext)

  return (
    <Div_TableContainer>
      <Table_InventoryTable>
        <Thead_InventoryThead>
          <tr>
            <th>
              <Div_HeaderContainer
                sortField={inventoryMetersContext.state.sortField}
                active={inventoryMetersContext.state.sortField.includes('id')}
                clickable={true}
                onClick={() => inventoryMetersContext.handleSort('id')}
              >
                <P_BodyText>ID</P_BodyText>
                <ArrowIcon />
              </Div_HeaderContainer>
            </th>
            <th>
              <Div_HeaderContainer
                sortField={inventoryMetersContext.state.sortField}
                active={inventoryMetersContext.state.sortField.includes('serial_number')}
                clickable={true}
                onClick={() => inventoryMetersContext.handleSort('serial_number')}
              >
                <P_BodyText>Serial key</P_BodyText>
                <ArrowIcon />
              </Div_HeaderContainer>
            </th>
            <th>
              <Div_HeaderContainer
                sortField={inventoryMetersContext.state.sortField}
                active={inventoryMetersContext.state.sortField.includes('meter_type')}
                clickable={true}
                onClick={() => inventoryMetersContext.handleSort('meter_type')}
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
                sortField={inventoryMetersContext.state.sortField}
                active={inventoryMetersContext.state.sortField.includes(
                  'inventory_location_building.name'
                )}
                clickable={true}
                onClick={() =>
                  inventoryMetersContext.handleSort('inventory_location_building.name')
                }
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
            <th>
              <Div_HeaderContainer>
                <P_BodyText>Actions</P_BodyText>
              </Div_HeaderContainer>
            </th>
          </tr>
        </Thead_InventoryThead>
        <tbody>
          {inventoryMetersContext.state.data?.map(meter => (
            <Tr_InventoryTr key={meter.id}>
              <Td_InventoryTd>{meter.id}</Td_InventoryTd>
              <Td_InventoryTd>{meter.serial_number}</Td_InventoryTd>
              <Td_InventoryTd>{meter.meter_type}</Td_InventoryTd>
              <Td_InventoryTd>{meter.monitored_entity}</Td_InventoryTd>
              <Td_InventoryTd>
                {meter.inventory_location ? meter.inventory_location.name : null}
              </Td_InventoryTd>
              <Td_InventoryTd>
                {meter.inventory_location_building ? meter.inventory_location_building.name : null}
              </Td_InventoryTd>
              <Td_InventoryTd>
                {meter.accessibility?.split(';').map((accessibility, i) => (
                  <Span_TextBox
                    key={i}
                    className={
                      meter.accessibility === 'good'
                        ? 'good'
                        : meter.accessibility === 'floodedShaft' ||
                          meter.accessibility === 'veryHigh'
                        ? 'bad'
                        : 'average'
                    }
                  >
                    {accessibility}
                  </Span_TextBox>
                ))}
              </Td_InventoryTd>
              <Td_InventoryTd>
                <RouterLink to={`${urls.inventoryMeters}/${meter.id}`}>
                  <CustomButton className='white'>
                    <P_BodyText>Detail</P_BodyText>
                  </CustomButton>
                </RouterLink>
              </Td_InventoryTd>
            </Tr_InventoryTr>
          ))}
        </tbody>
      </Table_InventoryTable>
    </Div_TableContainer>
  )
}
