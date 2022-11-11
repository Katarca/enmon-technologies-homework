import { Div_PaddingContainer, Div_SubContainer } from '../components/Container'
import { GET_INVENTORY_METER } from '../graphql/getInventoryMeters'
import { H1_Heading } from '../components/Heading'
import { InventoryMeter } from '../../generated/types'
import { P_BodyText } from '../components/BodyText'
import { RouterLink } from '../components/Link'
import { UserStateContext } from '../context/UserContext'
import { client } from '../index'
import { styles } from '../helpers/theme'
import { ReactComponent as thinArrowIcon } from '../icons/thin-arrow-icon.svg'
import { urls } from '../helpers/urls'
import { useParams } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

export const InventoryMeterDetail = () => {
  const params = useParams<{ id: string }>()
  const id = params.id
  const userContext = useContext(UserStateContext)
  const [inventoryMeter, setInventoryMeter] = useState(null as null | InventoryMeter)

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
      setInventoryMeter(getInventoryMeter.data.inventoryMeters[0])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Div_SubContainer column={true}>
      <div>
        <P_BodyText color={styles.colors.grey900}>
          Enmon Tools / Inventory Meters / <Span_BlackSpan>{inventoryMeter?.id}</Span_BlackSpan>
        </P_BodyText>
      </div>
      <Div_Box>
        <RouterLink to={urls.inventoryMeters}>
          <ThinArrowIcon />
        </RouterLink>
        <Div_PaddingContainer>
          <H1_Heading fontSize={styles.fontSize.m}>{inventoryMeter?.id}</H1_Heading>
        </Div_PaddingContainer>
        {inventoryMeter?.inventory_location?.name ? (
          <Div_PaddingContainer padding={`0 ${styles.spacing.s} 0 0`}>
            <P_BodyText color={styles.colors.grey900}>
              {inventoryMeter?.inventory_location?.name}
            </P_BodyText>
          </Div_PaddingContainer>
        ) : null}
        <Span_MeterType>{inventoryMeter?.meter_type}</Span_MeterType>
      </Div_Box>
    </Div_SubContainer>
  )
}

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

const Span_MeterType = styled.span`
  padding: ${styles.spacing.xxs} ${styles.spacing.xs};
  font-size: ${styles.fontSize.xs};
  border-radius: ${styles.borderRadius.primary};
  background-color: ${styles.colors.blue100};
  border: ${styles.borderProperty.primary} ${styles.colors.blue200};
  border-radius: ${styles.borderRadius.primary};
  color: ${styles.colors.blue500};
`
