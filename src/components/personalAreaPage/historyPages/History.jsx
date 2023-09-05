import React, { useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
   DELIVERED,
   PENDING,
   CANCELED,
} from '../../../utils/common/constants/globalConstants'
import { orderRequest } from '../../../store/order/Order.thunk'

export const History = () => {
   const orders = useSelector((state) => state.order.productOrder)
   console.log(orders)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(orderRequest())
   }, [])

   return (
      <Container>
         <TableContainer>
            <Table sx={{ width: '65.625rem' }}>
               {orders?.map((el) => (
                  <NavLink
                     key={el.orderId}
                     to={`/personal:${el.orderId}/details`}
                  >
                     <TableBody>
                        <TableRow>
                           <TableCell>
                              <p>{el.date}</p>
                           </TableCell>
                           <TableCell>
                              <strong>№{el.orderNumber}</strong>
                           </TableCell>
                           <TableCell>
                              <div>
                                 {el.status === PENDING ? (
                                    <Treatment>В обработке</Treatment>
                                 ) : (
                                    ''
                                 )}
                                 {el.status === DELIVERED ? (
                                    <Delivered>Доставлен</Delivered>
                                 ) : (
                                    ''
                                 )}
                                 {el.status === CANCELED ? (
                                    <Cancellation>Отменен</Cancellation>
                                 ) : (
                                    ''
                                 )}
                              </div>
                           </TableCell>
                           <TableCell align="right">
                              <strong>{el.totalPrice}</strong>
                           </TableCell>
                        </TableRow>
                     </TableBody>
                  </NavLink>
               ))}
            </Table>
         </TableContainer>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 3.16rem;
   .MuiTableCell-root:not(:last-child) {
      width: 200px;
      text-align: start;
   }
   .css-heg063-MuiTabs-flexContainer {
      display: flex;
      width: 2000px;
      justify-content: space-between;
   }
   strong {
      font-size: 1.125rem;
   }
   p {
      font-size: 1rem;
   }
`
const Treatment = styled('p')`
   color: #f99808;
   font-size: 1rem;
`
const Cancellation = styled('p')`
   color: red;
   font-size: 1rem;
`
const Delivered = styled('p')`
   color: #299a0d;
   font-size: 1rem;
`
