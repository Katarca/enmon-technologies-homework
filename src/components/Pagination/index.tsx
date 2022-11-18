import { Div_PaginationContainer, StyledReactPaginate } from './styles'
import { Select } from '../Select'
import React from 'react'

type Pagination = {
  handlePageClick: (selectedItem: { selected: number }) => void
  itemsPerPage: number
  itemsCount: number
  pageRangeDisplayed: number
  options: string[]
  optionAddText?: string
  onOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Pagination = (props: Pagination) => {
  return (
    <Div_PaginationContainer>
      <Select
        options={props.options}
        optionAddText={props.optionAddText}
        className='borderElement'
        onChange={props.onOptionChange}
        defaultValue={props.itemsPerPage}
      />
      <StyledReactPaginate
        breakLabel='...'
        nextLabel='>'
        onPageChange={props.handlePageClick}
        pageRangeDisplayed={props.pageRangeDisplayed}
        pageCount={Math.ceil(props.itemsCount / props.itemsPerPage)}
        previousLabel='<'
        renderOnZeroPageCount={() => null}
      />
    </Div_PaginationContainer>
  )
}
