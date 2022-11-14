import { CustomButton } from '../../components/Button'
import {
  Div_BorderContainer,
  Div_PaddingContainer,
  Div_SubContainer,
} from '../../components/Container'
import { GET_INVENTORY_METER } from '../../graphql/getInventoryMeters'
import { H1_Heading, H2_Heading } from '../../components/Heading'
import { InputElement } from '../../components/Input'
import { InventoryMeter } from '../../../generated/types'
import { Label } from './components/Label'
import { P_BodyText } from '../../components/BodyText'
import { RouterLink } from '../../components/Link'
import { SelectElement } from '../../components/Select'
import { UPDATE_INVENTORY_METER } from '../../graphql/mutations/updateInventoryMeter'
import { UserStateContext } from '../../context/UserContext'
import { client } from '../../apollo/client'
import { meterTypes } from '../../helpers/variables'
import { styles } from '../../helpers/theme'
import { ReactComponent as thinArrowIcon } from '../../icons/thin-arrow-icon.svg'
import { urls } from '../../helpers/urls'
import { useParams } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

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
        <P_BodyText>Inventory meter updated</P_BodyText>
      </Div_UpdatedContainer>
      {inventoryMeter ? (
        <>
          <Div_SubContainer column={true}>
            <div>
              <P_BodyText color={styles.colors.grey900}>
                Enmon Tools / Inventory Meters /{' '}
                <Span_BlackSpan>{inventoryMeter?.id}</Span_BlackSpan>
              </P_BodyText>
            </div>
            <Div_Box>
              <RouterLink to={urls.inventoryMeters}>
                <ThinArrowIcon />
              </RouterLink>
              <Div_PaddingContainer>
                <H1_Heading fontSize={styles.fontSize.l}>{inventoryMeter?.id}</H1_Heading>
              </Div_PaddingContainer>
              {inventoryMeter?.inventory_location?.name ? (
                <Div_PaddingContainer padding={`0 ${styles.spacing.s} 0 0`}>
                  <P_BodyText color={styles.colors.grey900}>
                    {inventoryMeter?.inventory_location?.name}
                  </P_BodyText>
                </Div_PaddingContainer>
              ) : null}
              <Label>{inventoryMeter?.meter_type!}</Label>
            </Div_Box>
          </Div_SubContainer>
          <Div_SubContainer padding='0' column={true}>
            <Div_BorderContainer>
              <H2_Heading fontSize={styles.fontSize.m}>Details</H2_Heading>
            </Div_BorderContainer>
            <Div_FormContainer>
              <InputElement
                type='text'
                defaultValue={inventoryMeter?.serial_number!}
                className='borderElement'
                label='Serial Number'
                onChange={e => setSerialNum(e.target.value)}
              />
              <InputElement
                type='text'
                defaultValue={inventoryMeter?.monitored_entity!}
                className='borderElement'
                label='Monitored Entity'
                onChange={e => setMonitoredEntity(e.target.value)}
              />
              <SelectElement
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
                  color='green'
                  onClick={() => handleUpdate()}
                  disabled={Object.keys(dataObj).length === 0 ? true : false}
                >
                  <P_BodyText>Save</P_BodyText>
                </CustomButton>
              </Div_ButtonContainer>
            </Div_FormContainer>
          </Div_SubContainer>
        </>
      ) : inventoryMeter === null && !err ? (
        <Div_SubContainer>
          <P_BodyText>Loading...</P_BodyText>
        </Div_SubContainer>
      ) : inventoryMeter === null && err ? (
        <Div_SubContainer column={true}>
          <RouterLink to={urls.inventoryMeters}>
            <ThinArrowIcon />
          </RouterLink>
          <P_BodyText>Error occurred while fetching data</P_BodyText>
        </Div_SubContainer>
      ) : (
        <Div_SubContainer column={true}>
          <RouterLink to={urls.inventoryMeters}>
            <ThinArrowIcon />
          </RouterLink>
          <P_BodyText>Inventory meter not found</P_BodyText>
        </Div_SubContainer>
      )}
    </Div_Wrapper>
  )
}

const Div_Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
`

const Div_UpdatedContainer = styled.div<{ updated: boolean }>`
  position: absolute;
  background-color: ${styles.colors.white};
  top: 0;
  right: -500px;
  margin: ${styles.spacing.m};
  padding: ${styles.spacing.m};
  transition: ${styles.transition.secondary};
  border: ${styles.borderProperty.primary} ${styles.colors.grey200};
  border-radius: ${styles.borderRadius.primary};
  box-shadow: ${styles.boxShadowProperty.primary} ${styles.colors.blue100};
  ${({ updated }) =>
    updated &&
    css`
      right: 0;
    `}
`

const Span_BlackSpan = styled.span`
  color: ${styles.colors.black};
`
const ThinArrowIcon = styled(thinArrowIcon)`
  width: ${styles.iconWidth.m};
  transition: ${styles.transition.primary};
  &:hover {
    fill: ${styles.colors.primaryGreen};
  }
`

const Div_Box = styled.div`
  padding-top: ${styles.spacing.s};
  display: flex;
  align-items: center;
`

const Div_FormContainer = styled.div`
  padding: ${styles.spacing.xl};
  display: flex;
  flex-wrap: wrap;
  & > div {
    margin-right: ${styles.spacing.m};
    margin-bottom: ${styles.spacing.m};
  }
`
const Div_ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  & > button {
    height: fit-content;
  }
`
