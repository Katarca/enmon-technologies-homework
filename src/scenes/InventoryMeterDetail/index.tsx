import { CustomButton } from '../../components/Button/styles'
import {
  Div_BorderContainer,
  Div_PaddingContainer,
  Div_SubContainer,
} from '../../components/Container/styles'
import {
  Div_Box,
  Div_ButtonContainer,
  Div_InputsContainer,
  Div_TextContainer,
  Span_BlackSpan,
  ThinArrowIcon,
} from './styles'
import { Enum_Inventorymeter_Meter_Type } from '../../generated/types'
import { H1_Heading, H2_Heading } from '../../components/typo/Heading'
import { Input } from '../../components/Input'
import { InventoryMeterStateContext } from './context'
import { Message } from '../../components/Message'
import { NetworkStatus } from '@apollo/client'
import { P_BodyText } from '../../components/typo/BodyText'
import { RouterLink } from '../../components/Link'
import { Select } from '../../components/Select'
import { Span_TextBox } from '../../components/typo/TextBox'
import { urls } from '../../helpers/urls'
import React, { useContext } from 'react'

export const InventoryMeterDetail = () => {
  const inventoryMeterContext = useContext(InventoryMeterStateContext)

  if (inventoryMeterContext.networkStatus === NetworkStatus.refetch) {
    return <Message message='Updating inventory meter...' />
  }

  if (inventoryMeterContext.loading) {
    return <Message message='Loading...' />
  }

  if (inventoryMeterContext.error) {
    return <Message message={inventoryMeterContext.error.message} />
  }

  if (
    !inventoryMeterContext.inventoryMeter &&
    !inventoryMeterContext.loading &&
    !inventoryMeterContext.error
  ) {
    return <Message message='Inventory meter not found' />
  }

  return (
    <>
      <Div_SubContainer>
        <div>
          <P_BodyText className='grey900'>
            Enmon Tools / Inventory Meters /{' '}
            <Span_BlackSpan>{inventoryMeterContext.inventoryMeter?.id}</Span_BlackSpan>
          </P_BodyText>
        </div>
        <Div_Box>
          <RouterLink to={urls.inventoryMeters}>
            <ThinArrowIcon />
          </RouterLink>
          <Div_PaddingContainer>
            <H1_Heading className='fontSizeL'>
              {inventoryMeterContext.inventoryMeter?.id}
            </H1_Heading>
          </Div_PaddingContainer>
          {inventoryMeterContext.inventoryMeter?.inventory_location?.name ? (
            <Div_TextContainer>
              <P_BodyText className='grey900'>
                {inventoryMeterContext.inventoryMeter?.inventory_location?.name}
              </P_BodyText>
            </Div_TextContainer>
          ) : null}
          <Span_TextBox>
            {inventoryMeterContext.inventoryMeter?.meter_type
              ? inventoryMeterContext.inventoryMeter?.meter_type
              : ''}
          </Span_TextBox>
        </Div_Box>
      </Div_SubContainer>
      <Div_SubContainer className='fullWidth'>
        <Div_BorderContainer>
          <H2_Heading className='fontSizeM'>Details</H2_Heading>
        </Div_BorderContainer>
        <Div_InputsContainer>
          <Input
            type='text'
            defaultValue={
              inventoryMeterContext.inventoryMeter?.serial_number
                ? inventoryMeterContext.inventoryMeter?.serial_number
                : ''
            }
            className='borderElement'
            label='Serial Number'
            onChange={e =>
              inventoryMeterContext.dispatch({
                type: 'update',
                payload: { key: 'serialNumber', value: e.target.value },
              })
            }
          />
          <Input
            type='text'
            defaultValue={
              inventoryMeterContext.inventoryMeter?.monitored_entity
                ? inventoryMeterContext.inventoryMeter?.monitored_entity
                : ''
            }
            className='borderElement'
            label='Monitored Entity'
            onChange={e =>
              inventoryMeterContext.dispatch({
                type: 'update',
                payload: { key: 'monitoredEntity', value: e.target.value },
              })
            }
          />
          <Select
            label='Meter Type'
            className='borderElement'
            options={Object.values(Enum_Inventorymeter_Meter_Type)}
            onChange={e =>
              inventoryMeterContext.dispatch({
                type: 'update',
                payload: {
                  key: 'meterType',
                  value: e.target.value as Enum_Inventorymeter_Meter_Type,
                },
              })
            }
            defaultValue={
              inventoryMeterContext.inventoryMeter?.meter_type
                ? inventoryMeterContext.inventoryMeter?.meter_type
                : 'water'
            }
          />
          <Div_ButtonContainer>
            <CustomButton
              className='green'
              onClick={() =>
                inventoryMeterContext
                  .updateInventoryMeter()
                  .then(() => inventoryMeterContext.refetch())
              }
            >
              <P_BodyText>Save</P_BodyText>
            </CustomButton>
          </Div_ButtonContainer>
        </Div_InputsContainer>
      </Div_SubContainer>
    </>
  )
}
