import { StyledReactPaginate } from './styles'
import React from 'react'

type Pagination = {
  handlePageClick: (selectedItem: { selected: number }) => void
  itemsPerPage: number
  itemsCount: number
  pageRangeDisplayed: number
}

export const Pagination: React.FC<Pagination> = props => {
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
