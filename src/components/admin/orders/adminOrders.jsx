// import {
//    deleteIsAdminThunk,
//    orderIsAdminThunk,
// } from '../../../store/order/Order.thunk'
// import { statusTranslate } from '../../../utils/common/constants/constantsAdminAddNewProduct'

// export const AdminOrders = () => {
// const dispatch = useDispatch()

// const { responseAdminList, delivered } = useSelector(
//    (state) => state.order.orderIsAdmin
// )

//    return (
//       <Container>
//          <ContainerChilde>

//             <TableContainer>
//                <Table>

//                   <TableBody>
//                      {responseAdminList?.map((row) => (
//                         <TableRow key={row.orderId}>
//                            <TableId>{row.orderId}</TableId>
//                            <TableCellName>{row.fullName}</TableCellName>
//                            <NumberTable>{row.orderNumber}</NumberTable>
//                            <Quantity>{row.quantity}</Quantity>
//                            <Total>{row.totalPrice}</Total>
//                            <TableCell>{row.typeDelivery}</TableCell>
//                            <TableCell>{statusTranslate[row.status]}</TableCell>
//                            <TableDelete
//                               onClick={() =>
//                                  dispatch(deleteIsAdminThunk(row.orderId))
//                                     .unwrap()
//                                     .then(() => {
//                                        dispatch(orderIsAdminThunk())
//                                     })
//                               }
//                            >
//                               <DeleteTable />
//                            </TableDelete>
//                         </TableRow>
//                      ))}
//                   </TableBody>
//                </Table>
//             </TableContainer>

// </ContainerChilde>
//       </Container>
//    )
// }

// const ContainerChilde = styled('div')`
//    width: 67.969vw;
// `

import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { TableBody, styled } from '@mui/material'
import dayjs from 'dayjs'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useDispatch, useSelector } from 'react-redux'
import { AdminOrderItem } from './AdminOrdersItem'
import { Calendar } from '../../UI/calendarFolder/Calendar'
import { InputUi } from '../../UI/Input'
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg'
import { orderIsAdminThunk } from '../../../store/order/Order.thunk'

const tables = [
   { name: 'ID', width: '3.438vw', paddingLeft: '1.042vw' },
   { name: 'ФИО', width: '12.292vw' },
   { name: 'Номер/Дата', width: '10.885vw' },
   { name: 'Кол-во', width: '7.188vw' },
   { name: 'Общая сумма', width: '9.688vw' },
   { name: 'Оформление заказа', width: '10.625vw' },
   { name: 'Статус', width: '8.802vw' },
   { name: 'Действия', edit: false, width: '4.948vw' },
]

const itemTableArray = [
   {
      id: '1',
      orderId: '2',
      fullName: 'Kasymbekov',
      number: 'nknkjnk',
      quantity: '9',
      totalSum: '87897',
      ordering: 'PICKUP',
      status: 'delivered',
   },
   {
      id: '2',
      orderId: '3',
      fullName: 'Kasymbekov',
      number: 'nknkjnk',
      quantity: '9',
      totalSum: '87897',
      ordering: 'PICKUP',
      status: 'delivered',
   },
   {
      id: '3',
      orderId: '4',
      fullName: 'Kasymbekov',
      number: 'nknkjnk',
      quantity: '9',
      totalSum: '87897',
      ordering: 'PICKUP',
      status: 'delivered',
   },
]

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   }
}

export function AdminOrders() {
   const dispatch = useDispatch()
   const [dateStart, setDateStart] = useState()
   const [dateEnd, setDateEnd] = useState()
   const [value, setValue] = useState(0)
   const [valueTab, setValueTab] = useState('В обработке')

   const { orderIsAdmin } = useSelector((state) => state.order)
   const { delivered } = useSelector((state) => state.order.orderIsAdmin)

   const startDate = dayjs(dateStart).format('YYYY-MM-DD')
   const endDate = dayjs(dateEnd).format('YYYY-MM-DD')

   const onChangeCalendar = (newValue) => {
      setDateStart(newValue)
   }
   const onChangeCalendarEnd = (newValue) => {
      setDateEnd(newValue)
   }
   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   useEffect(() => {
      if (value === 0) {
         setValueTab('В ожидании')
      } else if (value === 1) {
         setValueTab('В обработке')
      } else if (value === 2) {
         setValueTab('Курьер в пути')
      } else if (value === 3) {
         setValueTab('Доставлен')
      } else if (value === 4) {
         setValueTab('Отменить')
      }
   }, [value])

   useEffect(() => {
      const data = {
         status: valueTab,
         pageSize: 3,
         page: 1,
         startDate,
         endDate,
      }
      dispatch(orderIsAdminThunk(data))
   }, [startDate, endDate, valueTab])

   return (
      <Container>
         <ContainerChilde>
            <SearchBlock>
               <InputUi
                  width="34.9375rem"
                  height="2.4375rem"
                  placeholder="Поиск по артикулу или ..."
               />
               <SearchIconStyle />
            </SearchBlock>

            <TabsStyle value={value} onChange={handleChange}>
               <Tab label="В ожидании" {...a11yProps(0)} />
               <Tab
                  label={<p>В обработке ({orderIsAdmin.in_PROCESSING})</p>}
                  {...a11yProps(1)}
               />
               <Tab
                  label={
                     <p>Курьер в пути ({orderIsAdmin.ready_FOR_DELIVERY})</p>
                  }
                  {...a11yProps(2)}
               />
               <Tab label={<p>Доставлены ({delivered})</p>} {...a11yProps(3)} />
               <Tab label="Отменены" {...a11yProps(4)} />
            </TabsStyle>

            <CalendarBlock>
               <Calendar
                  value={dateStart === undefined ? null : dateStart}
                  onChange={onChangeCalendar}
                  placeholder="от"
               />
               <Calendar
                  value={dateEnd === undefined ? null : dateEnd}
                  onChange={onChangeCalendarEnd}
                  placeholder="до"
               />
            </CalendarBlock>
            <StyledTable aria-label="simple table">
               <TableHead>
                  <StyledTableRow>
                     {tables.map((el) => {
                        return (
                           <StyledTableCell
                              key={el.name}
                              sx={{
                                 width: el.width,
                                 paddingLeft: el.paddingLeft
                                    ? el.paddingLeft
                                    : 0,
                              }}
                           >
                              {el.name}
                           </StyledTableCell>
                        )
                     })}
                  </StyledTableRow>
               </TableHead>
               <TableBody>
                  {itemTableArray?.map((item, index) => (
                     <AdminOrderItem
                        key={item.subProductId}
                        tables={tables}
                        index={index}
                        {...item}
                     />
                  ))}
               </TableBody>
            </StyledTable>

            <StackStyle>
               <Stack>
                  <Pagination count={2} color="primary" />
               </Stack>
            </StackStyle>
         </ContainerChilde>
      </Container>
   )
}

const Container = styled('div')`
   width: 89.583vw;

   .MuiTableCell-root {
      border-bottom: none;
   }

   .MuiBox-root {
      padding: 0;
   }
   .MuiTab-root.Mui-selected {
      background-color: #cb11ab;
      color: #fff;
   }
   .MuiTab-root {
      height: 2.125rem;
      border-radius: 4px;
      color: #384255;
      min-height: 0;
      background-color: #e0e2e7;
      padding: 0px 20px 0px 20px;
      text-transform: none;
   }
   .MuiTabs-root {
      min-height: auto;
   }
   .MuiTabs-indicator {
      display: none;
   }
   .MuiTabs-flexContainer {
      display: flex;
      gap: 0.75rem;
      padding-bottom: 1.88rem;
   }
   .MuiTypography-root {
      font-family: Ubuntu;
      font-size: 1.875rem;
      font-weight: 500;
      color: #292929;
      padding-bottom: 1.25rem;
   }

   .MuiPagination-root {
      display: flex;
      justify-content: center;
      align-items: flex-end;
   }
`

const StyledTable = styled(Table)(() => ({
   width: '67.969vw',
   marginTop: '4.62rem',
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
const CalendarBlock = styled('div')`
   display: flex;
   gap: 1.25rem;
   margin-top: 1.25rem;
`
const SearchBlock = styled('div')`
   display: flex;
   position: relative;
   align-items: center;
`

const SearchIconStyle = styled(SearchIcon)`
   position: absolute;
   left: 33rem;
   path {
      fill: #91969e;
   }
   cursor: pointer;
`
const TabsStyle = styled(Tabs)`
   margin-top: 3.16rem;
   border-bottom: 1px solid #d4d4d4;
`
const StackStyle = styled('div')`
   display: flex;
   height: 10vh;
   justify-content: center;
   align-items: flex-end;
`
const ContainerChilde = styled('div')`
   width: 67.969vw;
`
