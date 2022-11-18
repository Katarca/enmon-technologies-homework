import { ReactComponent as arrowIcon } from '../../../icons/arrow-icon.svg'
import { colors, fontSizes, styles } from '../../../helpers/theme'
import styled, { css } from 'styled-components'

export const Div_TableContainer = styled.div`
  overflow: auto;
  width: 100%;
`

export const Table_InventoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`
export const Thead_InventoryThead = styled.thead`
  background-color: ${colors.grey50};
  border-bottom: ${styles.borderProperty.primary} ${colors.grey100};
`

export const Div_HeaderContainer = styled.div<{
  sortField?: string
  active?: boolean
  clickable?: boolean
}>`
  display: flex;
  padding: ${styles.spacing.l} ${styles.spacing.m};
  justify-content: space-between;
  cursor: ${props => (props.clickable ? 'pointer' : 'auto')};
  ${({ active, sortField }) =>
    active &&
    sortField &&
    css`
      & > svg {
        ${sortField?.includes('desc') && 'transform: rotate(0deg)'};
        fill: ${colors.black};
      }
    `}
`
export const Tr_InventoryTr = styled.tr`
  border-bottom: ${styles.borderProperty.primary} ${colors.grey50};
  transition: ${styles.transition.primary};
  &:hover {
    background-color: ${colors.grey50};
  }
`

export const Td_InventoryTd = styled.td`
  font-size: ${fontSizes.fontSizeS};
  color: ${colors.black};
  padding: ${styles.spacing.l};
`

export const ArrowIcon = styled(arrowIcon)`
  width: ${styles.iconWidth.xs};
  fill: ${colors.grey300};
  margin-left: ${styles.spacing.xs};
  transform: rotate(-180deg);
`
