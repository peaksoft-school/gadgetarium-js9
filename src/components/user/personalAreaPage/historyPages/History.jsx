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
} from '../../../../utils/common/constants/globalConstants'
import { orderRequest } from '../../../../store/order/order.thunk'

export const History = () => {
   const orders = useSelector((state) => state.order.productOrder)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(orderRequest())
   }, [])

   return (
      <Container>
         <TableContainer>
            {orders?.map((el) => (
               <NavLinkStyle
                  key={el.orderId}
                  to={`/personalArea/${el.orderId}/details`}
               >
                  <Table sx={{ width: '60rem', height: '3rem' }}>
                     <TableBody>
                        <TableRow>
                           <StyledTableCell>{el.date}</StyledTableCell>
                           <TableCell>
                              <strong>№{el.orderNumber}</strong>
                           </TableCell>
                           <TableCell>
                              <div>
                                 {el.status === PENDING && (
                                    <Treatment>В обработке</Treatment>
                                 )}
                                 {el.status === DELIVERED && (
                                    <Delivered>Доставлен</Delivered>
                                 )}
                                 {el.status === CANCELED && (
                                    <Cancellation>Отменен</Cancellation>
                                 )}
                              </div>
                           </TableCell>
                           <TableCell align="right">
                              <strong>{el.totalPrice}</strong>
                           </TableCell>
                        </TableRow>
                     </TableBody>
                  </Table>
               </NavLinkStyle>
            ))}
         </TableContainer>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 3.16rem;
   margin-bottom: 40rem;
   .MuiTableCell-root:not(:last-child) {
      width: 12.5rem;
      text-align: start;
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
   margin: 0;
`
const Cancellation = styled('p')`
   color: red;
   font-size: 1rem;
   margin: 0;
`
const Delivered = styled('p')`
   color: #299a0d;
   font-size: 1rem;
   margin: 0;
`
const NavLinkStyle = styled(NavLink)`
   text-decoration: none;
`
const StyledTableCell = styled(TableCell)`
   font-family: Inter;
   font-size: 1rem;
`
