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
import { InitialInventoryMeterState, inventoryMeterReducer } from './hooks'
import { Input } from '../../components/Input'
import { P_BodyText } from '../../components/typo/BodyText'
import { RouterLink } from '../../components/Link'
import { Select } from '../../components/Select'
import { Span_TextBox } from '../../components/typo/TextBox'
import { UserStateContext } from '../../context/UserContext'
import { meterTypes } from '../../helpers/variables'
import { services } from '../../services/services'
import { styles } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import { useParams } from 'react-router-dom'
import React, { useContext, useEffect, useReducer } from 'react'

export const InventoryMeterDetail = () => {
  const userContext = useContext(UserStateContext)

  const [state, dispatch] = useReducer(inventoryMeterReducer, InitialInventoryMeterState)

  const params = useParams<{ id: string }>()
  const id = params.id

  const fetchInventoryMeter = async () => {
    try {
      const response = await services.getInventoryMeter({ id: id!, jwt: userContext.userJwt! })
      dispatch({
        type: 'updateData',
        payload: response.data ? response.data[0] : undefined,
      })
    } catch (error) {
      dispatch({ type: 'updateFetchingError', payload: 'Error occurred while fetching data' })
      dispatch({ type: 'updateData', payload: null })
    }
  }

  useEffect(() => {
    fetchInventoryMeter()
  }, [])

  const handleUpdate = async () => {
    try {
      const response = await services.updateInventoryMeterMutation({
        jwt: userContext.userJwt!,
        data: {
          ...(state.serialNumber !== null && { serial_number: state.serialNumber! }),
          ...(state.monitoredEntity !== null && { monitored_entity: state.monitoredEntity! }),
          ...(state.meterType !== null && { meter_type: state.meterType! }),
        },
        where: {
          id: state.data?.id!,
        },
      })
      dispatch({ type: 'changeDataUpdated', payload: response.data ? true : false })
      setTimeout(() => dispatch({ type: 'changeDataUpdated', payload: false }), 3000)
      fetchInventoryMeter()
    } catch (error) {
      console.error(error)
      dispatch({ type: 'updateFetchingError', payload: 'Error occurred while fetching data' })
      dispatch({ type: 'updateData', payload: null })
    }
  }

  return (
    <Div_Wrapper>
      <Div_UpdatedContainer updated={state.dataUpdated}>
        <P_BodyText className='primaryGreen'>Inventory meter updated</P_BodyText>
      </Div_UpdatedContainer>
      {state.data ? (
        <>
          <Div_SubContainer>
            <div>
              <P_BodyText className='grey900'>
                Enmon Tools / Inventory Meters / <Span_BlackSpan>{state.data?.id}</Span_BlackSpan>
              </P_BodyText>
            </div>
            <Div_Box>
              <RouterLink to={urls.inventoryMeters}>
                <ThinArrowIcon />
              </RouterLink>
              <Div_PaddingContainer>
                <H1_Heading className='l'>{state.data?.id}</H1_Heading>
              </Div_PaddingContainer>
              {state.data?.inventory_location?.name ? (
                <Div_PaddingContainer padding={`0 ${styles.spacing.s} 0 0`}>
                  <P_BodyText className='grey900'>
                    {state.data?.inventory_location?.name}
                  </P_BodyText>
                </Div_PaddingContainer>
              ) : null}
              <Span_TextBox>{state.data?.meter_type!}</Span_TextBox>
            </Div_Box>
          </Div_SubContainer>
          <Div_SubContainer className='fullWidth'>
            <Div_BorderContainer>
              <H2_Heading className='m'>Details</H2_Heading>
            </Div_BorderContainer>
            <Div_InputsContainer>
              <Input
                type='text'
                defaultValue={state.data?.serial_number!}
                className='borderElement'
                label='Serial Number'
                onChange={e => dispatch({ type: 'updateSerialNumber', payload: e.target.value })}
              />
              <Input
                type='text'
                defaultValue={state.data?.monitored_entity!}
                className='borderElement'
                label='Monitored Entity'
                onChange={e => dispatch({ type: 'updateMonitoredEntity', payload: e.target.value })}
              />
              <Select
                label='Meter Type'
                className='borderElement'
                options={meterTypes}
                onChange={e => dispatch({ type: 'updateMeterType', payload: e.target.value })}
                defaultValue={state.data?.meter_type!}
              />
              <Div_ButtonContainer>
                <CustomButton className='green' onClick={() => handleUpdate()}>
                  <P_BodyText>Save</P_BodyText>
                </CustomButton>
              </Div_ButtonContainer>
            </Div_InputsContainer>
          </Div_SubContainer>
        </>
      ) : !state.data && !state.fetchingError ? (
        <Div_SubContainer>
          <P_BodyText>Loading...</P_BodyText>
        </Div_SubContainer>
      ) : !state.data && state.fetchingError ? (
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
