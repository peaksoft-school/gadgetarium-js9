import { Table, TableBody, styled } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { TablesRow } from './TablesRow'
import { TablesHeadPartTwo } from './TablesHeadPartTwo'

export const TablesPartTwo = ({
   allPriceAndQuantity,
   onChangeBooleanValueQuantity,
   onChangeBooleanValuePrice,
   changeBooleanValue,
   isErrorValid,
}) => {
   const { newProduct } = useSelector((state) => state.addProduct)
   const [dataRows, setDataRows] = useState({})

   const collectorRowsDataHandler = (data) => {
      setDataRows(data)
   }

   const rows = newProduct

   return (
      <Table>
         <TablesHeadPartTwo subProduct={dataRows} newProduct={newProduct} />
         <TableBodyStyle>
            {rows?.subProductRequests?.map((row) => (
               <TablesRow
                  collectorRowsDataHandler={collectorRowsDataHandler}
                  key={row.id}
                  rows={rows}
                  row={row}
                  onChangeBooleanValueQuantity={onChangeBooleanValueQuantity}
                  onChangeBooleanValuePrice={onChangeBooleanValuePrice}
                  allPriceAndQuantity={allPriceAndQuantity}
                  changeBooleanValue={changeBooleanValue}
                  isErrorValid={isErrorValid}
               />
            ))}
         </TableBodyStyle>
      </Table>
   )
}

const TableBodyStyle = styled(TableBody)`
   display: flex;
   flex-direction: column;
   gap: 10px;
   margin-top: 10px;
`
