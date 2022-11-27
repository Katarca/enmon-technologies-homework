import { Div_PaginationContainer, StyledReactPaginate } from './styles'
import { P_BodyText } from '../typo/BodyText'
import { Select } from '../Select'
import { getPaginationItemsRange } from '../../helpers/getPaginationItemsRange'
import React from 'react'

type PaginationProps = {
  handlePageClick: (selectedItem: { selected: number }) => void
  itemsPerPage: number
  itemsCount: number
  pageRangeDisplayed: number
  itemsPerPageOptions: number[]
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  offset: number
  itemsName: string
}

export const Pagination = (props: PaginationProps) => {
  return (
    <Div_PaginationContainer>
      {props.itemsCount ? (
        <P_BodyText>
          {`${getPaginationItemsRange(props.offset, props.itemsPerPage, props.itemsCount)} ${
            props.itemsName
          }`}
        </P_BodyText>
      ) : null}
      <Select
        options={props.itemsPerPageOptions}
        optionAddText='/page'
        className='borderElement'
        onChange={props.onChange}
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
