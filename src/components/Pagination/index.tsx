import { Div_PaddingContainer } from '../Container/styles'
import { Div_PaginationContainer, StyledReactPaginate } from './styles'
import { P_BodyText } from '../typo/BodyText'
import { Select } from '../Select'
import { getPaginationItemsRange } from '../../utils/getPaginationItemsRange'
import { styles } from '../../helpers/theme'
import React from 'react'

type Pagination = {
  handlePageClick: (selectedItem: { selected: number }) => void
  itemsPerPage: number
  itemsCount: number
  pageRangeDisplayed: number
  options: string[]
  optionAddText?: string
  onOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  offset: number
  itemsName: string
}

export const Pagination = (props: Pagination) => {
  return (
    <Div_PaginationContainer>
      {props.itemsCount ? (
        <Div_PaddingContainer padding={`0 ${styles.spacing.l} 0 0`}>
          <P_BodyText>
            {`${getPaginationItemsRange(props.offset, props.itemsPerPage, props.itemsCount)} ${
              props.itemsName
            }`}
          </P_BodyText>
        </Div_PaddingContainer>
      ) : null}
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
