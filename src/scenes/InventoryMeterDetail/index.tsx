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
  Div_UpdatedContainer,
  Div_Wrapper,
  Span_BlackSpan,
  ThinArrowIcon,
} from './styles'
import { H1_Heading, H2_Heading } from '../../components/typo/Heading'
import { Input } from '../../components/Input'
import { InventoryMeterStateContext } from './context'
import { P_BodyText } from '../../components/typo/BodyText'
import { RouterLink } from '../../components/Link'
import { Select } from '../../components/Select'
import { Span_TextBox } from '../../components/typo/TextBox'
import { meterTypes } from '../../helpers/variables'
import { styles } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import React, { useContext } from 'react'

export const InventoryMeterComponent = () => {
  const inventoryMeterContext = useContext(InventoryMeterStateContext)

  return (
    <Div_Wrapper>
      <Div_UpdatedContainer updated={inventoryMeterContext.state.dataUpdated}>
        <P_BodyText className='primaryGreen'>Inventory meter updated</P_BodyText>
      </Div_UpdatedContainer>
      {inventoryMeterContext.state.data ? (
        <>
          <Div_SubContainer>
            <div>
              <P_BodyText className='grey900'>
                Enmon Tools / Inventory Meters /{' '}
                <Span_BlackSpan>{inventoryMeterContext.state.data?.id}</Span_BlackSpan>
              </P_BodyText>
            </div>
            <Div_Box>
              <RouterLink to={urls.inventoryMeters}>
                <ThinArrowIcon />
              </RouterLink>
              <Div_PaddingContainer>
                <H1_Heading className='fontSizeL'>
                  {inventoryMeterContext.state.data?.id}
                </H1_Heading>
              </Div_PaddingContainer>
              {inventoryMeterContext.state.data?.inventory_location?.name ? (
                <Div_PaddingContainer padding={`0 ${styles.spacing.s} 0 0`}>
                  <P_BodyText className='grey900'>
                    {inventoryMeterContext.state.data?.inventory_location?.name}
                  </P_BodyText>
                </Div_PaddingContainer>
              ) : null}
              <Span_TextBox>{inventoryMeterContext.state.data?.meter_type!}</Span_TextBox>
            </Div_Box>
          </Div_SubContainer>
          <Div_SubContainer className='fullWidth'>
            <Div_BorderContainer>
              <H2_Heading className='fontSizeM'>Details</H2_Heading>
            </Div_BorderContainer>
            <Div_InputsContainer>
              <Input
                type='text'
                defaultValue={inventoryMeterContext.state.data?.serial_number!}
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
                defaultValue={inventoryMeterContext.state.data?.monitored_entity!}
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
                options={meterTypes}
                onChange={e =>
                  inventoryMeterContext.dispatch({
                    type: 'update',
                    payload: { key: 'meterType', value: e.target.value },
                  })
                }
                defaultValue={inventoryMeterContext.state.data?.meter_type!}
              />
              <Div_ButtonContainer>
                <CustomButton
                  className='green'
                  onClick={() => inventoryMeterContext.handleUpdate()}
                >
                  <P_BodyText>Save</P_BodyText>
                </CustomButton>
              </Div_ButtonContainer>
            </Div_InputsContainer>
          </Div_SubContainer>
        </>
      ) : inventoryMeterContext.state.data === null &&
        !inventoryMeterContext.state.fetchingError ? (
        <Div_SubContainer>
          <P_BodyText>Loading...</P_BodyText>
        </Div_SubContainer>
      ) : !inventoryMeterContext.state.data && inventoryMeterContext.state.fetchingError ? (
        <Div_SubContainer>
          <RouterLink to={urls.inventoryMeters}>
            <ThinArrowIcon />
          </RouterLink>
          <P_BodyText>Error occurred while fetching data</P_BodyText>
        </Div_SubContainer>
      ) : (
        <Div_SubContainer>
          <RouterLink to={urls.inventoryMeters}>
            <ThinArrowIcon />
          </RouterLink>
          <P_BodyText>Inventory meter not found</P_BodyText>
        </Div_SubContainer>
      )}
    </Div_Wrapper>
  )
}
