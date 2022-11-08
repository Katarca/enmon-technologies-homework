import React from 'react'
import ReactPaginate from 'react-paginate'

type Pagination = {
  handlePageClick: (selectedItem: { selected: number }) => void
  itemsPerPage: number
  itemsCount: number
  pageRangeDisplayed: number
}

export const Pagination = (props: Pagination) => {
  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel='next >'
      onPageChange={props.handlePageClick}
      pageRangeDisplayed={props.pageRangeDisplayed}
      pageCount={Math.ceil(props.itemsCount / props.itemsPerPage)}
      previousLabel='< previous'
      renderOnZeroPageCount={() => null}
    />
  )
}
