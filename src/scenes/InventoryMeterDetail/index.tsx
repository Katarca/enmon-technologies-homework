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
import { GET_INVENTORY_METER } from '../../graphql/getInventoryMeters'
import { H1_Heading, H2_Heading } from '../../components/typo/Heading'
import { Input } from '../../components/Input'
import { InventoryMeter } from '../../../generated/types'
import { P_BodyText } from '../../components/typo/BodyText'
import { RouterLink } from '../../components/Link'
import { Select } from '../../components/Select'
import { Span_TextBox } from '../../components/typo/TextBox'
import { UPDATE_INVENTORY_METER } from '../../graphql/mutations/updateInventoryMeter'
import { UserStateContext } from '../../context/UserContext'
import { client } from '../../apollo/client'
import { meterTypes } from '../../helpers/variables'
import { styles } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import { useParams } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'

export const InventoryMeterDetail = () => {
  const params = useParams<{ id: string }>()
  const id = params.id
  const userContext = useContext(UserStateContext)
  const [inventoryMeter, setInventoryMeter] = useState(null as null | InventoryMeter)

  const [monitoredEntity, setMonitoredEntity] = useState(null as null | string)
  const [meterType, setMeterType] = useState(null as null | string)
  const [serialNum, setSerialNum] = useState(null as null | string)

  const [err, setErr] = useState(false)

  const [dataUpdated, setDataUpdated] = useState(false)

  const fetchData = async () => {
    try {
      const getInventoryMeter = await client.query({
        query: GET_INVENTORY_METER,
        variables: {
          where: {
            id: id,
          },
        },
        context: {
          headers: {
            Authorization: `Bearer ${userContext.userJwt}`,
          },
        },
      })
      setInventoryMeter(
        getInventoryMeter.data.inventoryMeters
          ? getInventoryMeter.data.inventoryMeters[0]
          : undefined
      )
    } catch (error) {
      setErr(true)
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const dataObj = {
    ...(serialNum !== null &&
      serialNum !== inventoryMeter?.serial_number && { serial_number: serialNum }),
    ...(monitoredEntity &&
      monitoredEntity !== inventoryMeter?.monitored_entity && {
        monitored_entity: monitoredEntity,
      }),
    ...(meterType && meterType !== inventoryMeter?.meter_type && { meter_type: meterType }),
  }

  const handleUpdate = async () => {
    try {
      await client.mutate({
        mutation: UPDATE_INVENTORY_METER,
        variables: {
          input: {
            data: dataObj,
            where: {
              id: inventoryMeter?.id,
            },
          },
        },
        context: {
          headers: {
            Authorization: `Bearer ${userContext.userJwt}`,
          },
        },
      })
      setDataUpdated(true)
      setTimeout(() => setDataUpdated(false), 3000)
      fetchData()
    } catch (error) {
      console.error(error)
      setErr(true)
      setInventoryMeter(null)
    }
  }

  return (
    <Div_Wrapper>
      <Div_UpdatedContainer updated={dataUpdated}>
        <P_BodyText className='primaryGreen'>Inventory meter updated</P_BodyText>
      </Div_UpdatedContainer>
      {inventoryMeter ? (
        <>
          <Div_SubContainer>
            <div>
              <P_BodyText className='grey900'>
                Enmon Tools / Inventory Meters /{' '}
                <Span_BlackSpan>{inventoryMeter?.id}</Span_BlackSpan>
              </P_BodyText>
            </div>
            <Div_Box>
              <RouterLink to={urls.inventoryMeters}>
                <ThinArrowIcon />
              </RouterLink>
              <Div_PaddingContainer>
                <H1_Heading className='l'>{inventoryMeter?.id}</H1_Heading>
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
              <H2_Heading className='m'>Details</H2_Heading>
            </Div_BorderContainer>
            <Div_InputsContainer>
              <Input
                type='text'
                defaultValue={inventoryMeter?.serial_number!}
                className='borderElement'
                label='Serial Number'
                onChange={e => setSerialNum(e.target.value)}
              />
              <Input
                type='text'
                defaultValue={inventoryMeter?.monitored_entity!}
                className='borderElement'
                label='Monitored Entity'
                onChange={e => setMonitoredEntity(e.target.value)}
              />
              <Select
                label='Meter Type'
                className='borderElement'
                options={meterTypes}
                onChange={e => {
                  setMeterType(e.target.value)
                }}
                defaultValue={inventoryMeter?.meter_type!}
              />
              <Div_ButtonContainer>
                <CustomButton
                  className='green'
                  onClick={() => handleUpdate()}
                  disabled={Object.keys(dataObj).length === 0 ? true : false}
                >
                  <P_BodyText>Save</P_BodyText>
                </CustomButton>
              </Div_ButtonContainer>
            </Div_InputsContainer>
          </Div_SubContainer>
        </>
      ) : inventoryMeter === null && !err ? (
        <Div_SubContainer>
          <P_BodyText>Loading...</P_BodyText>
        </Div_SubContainer>
      ) : inventoryMeter === null && err ? (
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
