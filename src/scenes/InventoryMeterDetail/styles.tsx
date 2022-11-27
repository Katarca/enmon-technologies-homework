import { colors, styles } from '../../helpers/theme'
import { ReactComponent as thinArrowIcon } from '../../icons/thin-arrow-icon.svg'
import styled, { css } from 'styled-components'

export const Span_BlackSpan = styled.span`
  color: ${colors.black};
`
export const ThinArrowIcon = styled(thinArrowIcon)`
  width: ${styles.iconWidth.m};
  transition: ${styles.transition.primary};
  &:hover {
    fill: ${colors.primaryGreen};
  }
`

export const Div_Box = styled.div`
  padding-top: ${styles.spacing.s};
  display: flex;
  align-items: center;
`

export const Div_InputsContainer = styled.div`
  padding: ${styles.spacing.xl};
  display: flex;
  flex-wrap: wrap;
  & > div {
    margin-right: ${styles.spacing.m};
    margin-bottom: ${styles.spacing.m};
  }
`
export const Div_ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  & > button {
    height: fit-content;
  }
`
