import * as React from 'react'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { TableBody, styled } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TablesDetailItem } from './TablesDetailItem'
import { ReactComponent as DeleteIcon } from '../../../../assets/icons/tools-for-site/delete-icon.svg'
import {
   deleteIsCheckedProduct,
   getByIdProductDetail,
} from '../../../../store/informationPhone/infoPageThunk'
import { useSnackbar } from '../../../../hooks/useSnackbar'

const tables = [
   { name: 'ID', width: '3.438vw', paddingLeft: '1.042vw' },
   { name: 'Фото', width: '7.292vw' },
   { name: 'Наименование товара', width: '16.885vw' },
   { name: 'Цвет', width: '8.188vw' },
   { name: 'ОЗУ', width: '6.4vw' },
   { name: 'ПЗУ', width: '6.802vw' },
   { name: 'Количество', width: '9.948vw' },
   { name: 'Цена', width: '9.01vw' },
]

export function TablesAdmin({ productId }) {
   const dispatch = useDispatch()
   const [selectedItems, setSelectedItems] = useState([])
   const { snackbarHandler } = useSnackbar()
   const navigate = useNavigate()
   const productDetail = useSelector((state) => state.product.getByIdDetail)

   const deleteSelectedProducts = () => {
      if (selectedItems.length === 0) {
         snackbarHandler({
            message: 'Выберите товар',
            type: 'error',
         })
      } else {
         dispatch(deleteIsCheckedProduct(selectedItems))
            .unwrap()
            .then(() => {
               dispatch(getByIdProductDetail({ productId, navigate }))
               snackbarHandler({
                  message: 'Товар успешно удален!',
                  type: 'success',
               })
            })
      }
   }
   return (
      <>
         <Tools onClick={deleteSelectedProducts}>
            <StyledDeleteIcon />
            Удалить
         </Tools>
         <StyledTable aria-label="simple table">
            <TableHead>
               <StyledTableRow>
                  {tables.map((el) => {
                     return (
                        <StyledTableCell
                           key={el.name}
                           sx={{
                              width: el.width,
                              paddingLeft: el.paddingLeft ? el.paddingLeft : 0,
                           }}
                        >
                           {el.name}
                        </StyledTableCell>
                     )
                  })}
               </StyledTableRow>
            </TableHead>
            <TableBody>
               {productDetail?.map((item, index) => (
                  <TablesDetailItem
                     selectedItems={selectedItems}
                     setSelectedItems={setSelectedItems}
                     key={item.subProductId}
                     tables={tables}
                     index={index}
                     {...item}
                  />
               ))}
            </TableBody>
         </StyledTable>
      </>
   )
}

const StyledTable = styled(Table)(() => ({
   width: '67.969vw',
   '.MuiTableRow-root': {
      border: '1px solid #CDCDCD',
   },
}))

const StyledTableRow = styled(TableRow)`
   background: rgba(56, 66, 85, 0.9);
   height: 2.5rem;
   display: flex;
   align-items: center;
`
const StyledTableCell = styled(TableCell)`
   color: #fff;
   border-bottom: none;
   font-family: Inter;
   font-size: 0.781vw;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
   letter-spacing: 0.078vw;
   padding: 0;
`
const StyledDeleteIcon = styled(DeleteIcon)`
   margin-right: 0.313vw;
   width: 18px;
   height: 18px;
   path {
      fill: #384255;
   }
`
const Tools = styled('p')`
   color: #292929;
   font-family: Inter;
   font-size: 0.938vw;
   font-style: normal;
   font-weight: 400;
   line-height: 110%;
   margin: 0;
   display: flex;
   align-items: center;
   cursor: pointer;
   margin-bottom: 1.042vw;
`
