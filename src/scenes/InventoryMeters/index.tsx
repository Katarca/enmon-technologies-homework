import { Div_SubContainer } from '../../components/Container/styles'
import { H1_Heading } from '../../components/typo/Heading'
import { InventoryMetersStateContext } from './context'
import { InventoryTable } from './InventoryTable'
import { Message } from '../../components/Message'
import { P_BodyText } from '../../components/typo/BodyText'
import { Pagination } from '../../components/Pagination'
import { itemsPerPageOptions, pageRangeDisplay } from '../../helpers/variables'
import React, { useContext } from 'react'

export const InventoryMetersComponent = () => {
  const inventoryMetersContext = useContext(InventoryMetersStateContext)

  if (inventoryMetersContext.state.data) {
    return (
      <>
        <Div_SubContainer>
          <H1_Heading className='fontSizeL'>Inventory Meters List</H1_Heading>
        </Div_SubContainer>
        <Div_SubContainer>
          <InventoryTable />
          <Pagination
            handlePageClick={inventoryMetersContext.handlePageClick}
            itemsPerPage={inventoryMetersContext.state.itemsPerPage}
            itemsCount={inventoryMetersContext.state.dataCount!}
            pageRangeDisplayed={
              inventoryMetersContext.isPhone ? pageRangeDisplay.phone : pageRangeDisplay.default
            }
            offset={inventoryMetersContext.state.offset}
            itemsName='Inventory Meters'
            options={itemsPerPageOptions}
            optionAddText='/page'
            onOptionChange={e =>
              inventoryMetersContext.dispatch({
                type: 'update',
                payload: {
                  key: 'itemsPerPage',
                  value: Number(e.target.value),
                },
              })
            }
          />
        </Div_SubContainer>
      </>
    )
  } else if (inventoryMetersContext.state.fetchingError) {
    return <Message message={inventoryMetersContext.state.fetchingError} />
  } else {
    return <Message message='Loading...' />
  }
}
