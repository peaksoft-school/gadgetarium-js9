import { Paper, Table, TableBody, TableContainer, styled } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { TablesRow } from './TablesRow'
import { TablesHeadPartTwo } from './TablesHeadPartTwo'

export const TablesPartTwo = ({
   allPriceAndQuantity,
   onChangeBooleanValueQuantity,
   onChangeBooleanValuePrice,
   changeBooleanValue,
}) => {
   const { newProduct } = useSelector((state) => state.addProduct)
   const [dataRows, setDataRows] = useState({})

   const collectorRowsDataHandler = (data) => {
      setDataRows(data)
   }

   const rows = newProduct

   return (
      <PaperStyle>
         <TableContainer>
            <Table>
               <TablesHeadPartTwo subProduct={dataRows} />
               <TableBodyStyle>
                  {rows.subProductRequests.map((row) => (
                     <TablesRow
                        collectorRowsDataHandler={collectorRowsDataHandler}
                        key={row.id}
                        rows={rows}
                        row={row}
                        onChangeBooleanValueQuantity={
                           onChangeBooleanValueQuantity
                        }
                        onChangeBooleanValuePrice={onChangeBooleanValuePrice}
                        allPriceAndQuantity={allPriceAndQuantity}
                        changeBooleanValue={changeBooleanValue}
                     />
                  ))}
               </TableBodyStyle>
            </Table>
         </TableContainer>
      </PaperStyle>
   )
}

const PaperStyle = styled(Paper)`
   width: 79.688vw;
   box-shadow: none;
`

const TableBodyStyle = styled(TableBody)`
   display: flex;
   flex-direction: column;
   gap: 10px;
   margin-top: 10px;
`
