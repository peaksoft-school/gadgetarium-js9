import { Table, TableBody, styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { EditTableRow } from './EditTableRow'
import { EditTableHead } from './EditTableHead'

export const EditTable = ({ onChange, value }) => {
   const { product } = useSelector((state) => state.editProduct)

   return (
      <Table>
         <EditTableHead product={product} />
         <TableBodyStyle>
            <EditTableRow
               rows={product}
               onChange={onChange}
               value={value}
               row={product.subProductRequests[0]}
            />
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
