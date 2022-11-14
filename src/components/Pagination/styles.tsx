import { breakpoint, colors, fontSizes, styles } from '../../helpers/theme'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

export const StyledReactPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  padding: ${styles.spacing.l};
  li {
    min-width: 30px;
    height: 30px;
    display: flex;
    border-radius: ${styles.borderRadius.primary};
    border: ${styles.borderProperty.primary} ${colors.grey200};
    cursor: pointer;
    padding: 0 ${styles.spacing.xs};
    margin-right: ${styles.spacing.xs};
  }
  li a {
    width: 100%;
    text-align: center;
    margin: auto;
    font-size: ${fontSizes.s};
    color: ${colors.black};
  }
  li.break {
    border-color: transparent;
  }
  li.disabled a {
    color: ${colors.grey300};
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
  li.active {
    border-color: ${colors.primaryGreen};
  }
  li.active a {
    color: ${colors.primaryGreen};
  }
  ${breakpoint.phone} {
    width: 100%;
    flex-wrap: wrap;
  }
`
