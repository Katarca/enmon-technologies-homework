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
  Span_BlackSpan,
  ThinArrowIcon,
} from './styles'
import {
  Enum_Inventorymeter_Meter_Type,
  InventoryMeter,
  MutationUpdateInventoryMeterArgs,
  QueryInventoryMetersArgs,
} from '../../generated/types'
import { GET_INVENTORY_METER } from '../../graphql/queries/getInventoryMeter'
import { H1_Heading, H2_Heading } from '../../components/typo/Heading'
import { Input } from '../../components/Input'
import { InventoryMeterStateContext } from './context'
import { Message } from '../../components/Message'
import { NetworkStatus } from '@apollo/client'
import { P_BodyText } from '../../components/typo/BodyText'
import { RouterLink } from '../../components/Link'
import { Select } from '../../components/Select'
import { Span_TextBox } from '../../components/typo/TextBox'
import { UPDATE_INVENTORY_METER } from '../../graphql/mutations/updateInventoryMeter'
import { UserStateContext } from '../../userContext/UserContext'
import { styles } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import { useApolloMutation } from '../../hooks/useApolloMutation'
import { useApolloQuery } from '../../hooks/useApolloQuery'
import React, { useContext } from 'react'

type InventoryMeterQueryResult = {
  inventoryMeters: InventoryMeter[]
}

type UpdateInventoryMeterResult = {
  updateInventoryMeter: InventoryMeter
}

export const InventoryMeterComponent = () => {
  const inventoryMeterContext = useContext(InventoryMeterStateContext)
  const userContext = useContext(UserStateContext)

  const { data, loading, error, refetch, networkStatus } = useApolloQuery<
    InventoryMeterQueryResult,
    QueryInventoryMetersArgs
  >(
    GET_INVENTORY_METER,
    {
      where: {
        id: inventoryMeterContext.id,
      },
    },
    userContext.userJwt!
  )

  const inventoryMeter = data?.inventoryMeters ? data.inventoryMeters[0] : null

  const { mutationFunction: updateInventoryMeter } = useApolloMutation<
    UpdateInventoryMeterResult,
    MutationUpdateInventoryMeterArgs
  >({
    mutation: UPDATE_INVENTORY_METER,
    variables: {
      input: {
        data: {
          serial_number: inventoryMeterContext.state.serialNumber
            ? inventoryMeterContext.state.serialNumber
            : inventoryMeter?.serial_number,
          monitored_entity: inventoryMeterContext.state.monitoredEntity
            ? inventoryMeterContext.state.monitoredEntity
            : inventoryMeter?.monitored_entity,
          meter_type: inventoryMeterContext.state.meterType
            ? inventoryMeterContext.state.meterType
            : inventoryMeter?.meter_type,
        },
        where: { id: inventoryMeterContext.id! },
      },
    },
    context: {
      headers: {
        Authorization: `Bearer ${userContext.userJwt}`,
      },
    },
  })

  if (networkStatus === NetworkStatus.refetch) {
    return <Message message='Updating inventory meter...' />
  } else if (loading) {
    return <Message message='Loading...' />
  } else if (error) {
    return <Message message={error.message} />
  } else if (data?.inventoryMeters && data.inventoryMeters.length > 0) {
    return (
      <>
        <Div_SubContainer>
          <div>
            <P_BodyText className='grey900'>
              Enmon Tools / Inventory Meters / <Span_BlackSpan>{inventoryMeter?.id}</Span_BlackSpan>
            </P_BodyText>
          </div>
          <Div_Box>
            <RouterLink to={urls.inventoryMeters}>
              <ThinArrowIcon />
            </RouterLink>
            <Div_PaddingContainer>
              <H1_Heading className='fontSizeL'>{inventoryMeter?.id}</H1_Heading>
            </Div_PaddingContainer>
            {inventoryMeter?.inventory_location?.name ? (
              <Div_PaddingContainer padding={`0 ${styles.spacing.s} 0 0`}>
                <P_BodyText className='grey900'>
                  {inventoryMeter?.inventory_location?.name}
                </P_BodyText>
              </Div_PaddingContainer>
            ) : null}
            <Span_TextBox>{inventoryMeter?.meter_type!}</Span_TextBox>
          </Div_Box>
        </Div_SubContainer>
        <Div_SubContainer className='fullWidth'>
          <Div_BorderContainer>
            <H2_Heading className='fontSizeM'>Details</H2_Heading>
          </Div_BorderContainer>
          <Div_InputsContainer>
            <Input
              type='text'
              defaultValue={inventoryMeter?.serial_number!}
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
              defaultValue={inventoryMeter?.monitored_entity!}
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
              defaultValue={inventoryMeter?.meter_type!}
            />
            <Div_ButtonContainer>
              <CustomButton
                className='green'
                onClick={() => updateInventoryMeter().then(() => refetch())}
              >
                <P_BodyText>Save</P_BodyText>
              </CustomButton>
            </Div_ButtonContainer>
          </Div_InputsContainer>
        </Div_SubContainer>
      </>
    )
  } else {
    return <Message message='Inventory meter not found' />
  }
}
