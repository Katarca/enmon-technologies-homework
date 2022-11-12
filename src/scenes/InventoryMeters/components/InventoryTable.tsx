import { CustomButton } from '../../../components/Button'
import { Label } from './Label'
import { P_BodyText } from '../../../components/BodyText'
import { RouterLink } from '../../../components/Link'
import { TableProps } from '../types'
import { ReactComponent as arrowIcon } from '../../../icons/arrow-icon.svg'
import { styles } from '../../../helpers/theme'
import { urls } from '../../../helpers/urls'
import React from 'react'
import styled, { css } from 'styled-components'

export const InventoryTable = (props: TableProps) => {
  return (
    <Div_TableContainer>
      <Table_InventoryTable>
        <Thead_InventoryThead>
          <tr>
            <th>
              <Div_HeaderContainer
                sortField={props.sortField}
                active={props.sortField.includes('id')}
                onClick={() => props.handleSort('id')}
              >
                <P_BodyText>ID</P_BodyText>
                <ArrowIcon />
              </Div_HeaderContainer>
            </th>
            <th>
              <Div_HeaderContainer
                sortField={props.sortField}
                active={props.sortField.includes('serial_number')}
                onClick={() => props.handleSort('serial_number')}
              >
                <P_BodyText>Serial key</P_BodyText>
                <ArrowIcon />
              </Div_HeaderContainer>
            </th>
            <th>
              <Div_HeaderContainer
                sortField={props.sortField}
                active={props.sortField.includes('meter_type')}
                onClick={() => props.handleSort('meter_type')}
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
                sortField={props.sortField}
                active={props.sortField.includes('inventory_location_building.name')}
                onClick={() => props.handleSort('inventory_location_building.name')}
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
          {props.inventoryMeters?.map(meter => (
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
                  <Label key={i} accessibility={accessibility}>
                    {accessibility}
                  </Label>
                ))}
              </Td_InventoryTd>
              <Td_InventoryTd>
                <RouterLink to={`${urls.inventoryMeters}/${meter.id}`}>
                  <CustomButton color='white'>
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
  ${({ active, sortField }) =>
    active &&
    sortField &&
    css`
      cursor: pointer;
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

const ArrowIcon = styled(arrowIcon)`
  width: ${styles.iconWidth.xs};
  fill: ${styles.colors.grey300};
  margin-left: ${styles.spacing.xs};
  transform: rotate(-180deg);
`
