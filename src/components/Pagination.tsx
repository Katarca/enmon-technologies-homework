import { styles } from '../helpers/theme'
import React from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

type Pagination = {
  handlePageClick: (selectedItem: { selected: number }) => void
  itemsPerPage: number
  itemsCount: number
  pageRangeDisplayed: number
}

export const Pagination = (props: Pagination) => {
  return (
    <StyledReactPaginate
      breakLabel='...'
      nextLabel='>'
      onPageChange={props.handlePageClick}
      pageRangeDisplayed={props.pageRangeDisplayed}
      pageCount={Math.ceil(props.itemsCount / props.itemsPerPage)}
      previousLabel='<'
      renderOnZeroPageCount={() => null}
    />
  )
}

const StyledReactPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: 500px;
  margin: ${styles.spacing.l};
  li {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    border: 1px solid ${styles.colors.grey200};
    cursor: pointer;
  }
  li a {
    font-size: ${styles.fontSize.s};
    color: ${styles.colors.black};
  }
  li.break {
    border-color: transparent;
  }
  li.disabled a {
    color: ${styles.colors.grey300};
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
  li.active {
    border-color: ${styles.colors.primaryGreen};
  }
  li.active a {
    color: ${styles.colors.primaryGreen};
  }
`
