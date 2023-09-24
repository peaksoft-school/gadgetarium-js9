import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import TableRow from '@mui/material/TableRow'
import { ReactComponent as DeleteTable } from '../../../assets/icons/tools-for-site/delete-icon.svg'
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg'
import { InputUi } from '../../UI/Input'
import { Calendar } from '../../UI/calendarFolder/Calendar'
import {
   deleteIsAdminThunk,
   orderIsAdminThunk,
} from '../../../store/order/Order.thunk'
import { statusTranslate } from '../../../utils/common/constants/constantsAdminAddNewProduct'

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   }
}

export const AdminOrders = () => {
   const dispatch = useDispatch()
   const { responseAdminList, page } = useSelector(
      (state) => state.order.orderIsAdmin
   )

   console.log(responseAdminList)

   const [value, setValue] = useState(0)

   const [valueTab, setValueTab] = useState('В обработке')

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }
   useEffect(() => {
      if (value === 0) {
         setValueTab('В обработке')
      } else if (value === 1) {
         setValueTab('Курьер в пути')
      } else if (value === 2) {
         setValueTab('Доставлен')
      } else if (value === 3) {
         setValueTab('Отменить')
      }
   }, [value])
   const [dateStart, setDateStart] = useState()
   const [dateEnd, setDateEnd] = useState()

   const startDate = dayjs(dateStart).format('YYYY-MM-DD')
   const endDate = dayjs(dateEnd).format('YYYY-MM-DD')

   const onChangeCalendar = (newValue) => {
      setDateStart(newValue)
   }
   const onChangeCalendarEnd = (newValue) => {
      setDateEnd(newValue)
   }

   useEffect(() => {
      const data = {
         status: valueTab,
         pageSize: 5,
         page: 1,
         startDate,
         endDate,
      }
      dispatch(orderIsAdminThunk(data))
   }, [startDate, endDate, valueTab])

   return (
      <Container>
         <SearchBlock>
            <InputUi
               width="34.9375rem"
               height="2.4375rem"
               placeholder="Поиск по артикулу или ..."
            />
            <SearchIconStyle />
         </SearchBlock>

         <TabsStyle value={value} onChange={handleChange}>
            <Tab label="В обработке" {...a11yProps(0)} />
            <Tab label="Курьер в пути" {...a11yProps(1)} />
            <Tab label="Доставлены" {...a11yProps(2)} />
            <Tab label="Отменены" {...a11yProps(3)} />
         </TabsStyle>

         <CalendarBlock>
            <Calendar
               value={dateStart}
               onChange={onChangeCalendar}
               placeholder="от"
            />
            <Calendar
               value={dateEnd}
               onChange={onChangeCalendarEnd}
               placeholder="до"
            />
         </CalendarBlock>

         <TableContainer>
            <Table>
               <TableHead>
                  <TableCell>ID</TableCell>
                  <TableNameHeader>ФИО</TableNameHeader>
                  <TableCellHead>Номер/дата</TableCellHead>
                  <TableQuantity>Кол-во</TableQuantity>
                  <TableTotal>Общая сумма</TableTotal>
                  <TableOrder>Оформление заказа</TableOrder>
                  <TableCell>Статус</TableCell>
                  <TableCell>Действия</TableCell>
               </TableHead>

               <TableBody>
                  {responseAdminList?.map((row) => (
                     <TableRow key={row.orderId}>
                        <TableId>{row.orderId}</TableId>
                        <TableCellName>{row.fullName}</TableCellName>
                        <NumberTable>{row.orderNumber}</NumberTable>
                        <Quantity>{row.quantity}</Quantity>
                        <Total>{row.totalPrice}</Total>
                        <TableCell>{row.typeDelivery}</TableCell>
                        <TableCell>{statusTranslate[row.status]}</TableCell>
                        <TableDelete
                           onClick={() =>
                              dispatch(deleteIsAdminThunk(row.orderId))
                           }
                        >
                           <DeleteTable />
                        </TableDelete>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>

         <Stack>
            <Pagination count={page} />
         </Stack>
      </Container>
   )
}

const Container = styled('div')`
   width: 67.969vw;

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

   .MuiTableHead-root {
      background: rgba(56, 66, 85, 0.9);
   }

   .MuiTableContainer-root {
      width: 67.969vw;
      border-radius: 0;
      margin-top: 4.62rem;
   }
   .MuiTableRow-root {
      border: 1px solid gray;
   }
   .MuiTableRow-root {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 0.5rem;
      border-radius: 0.375rem;
   }
   .MuiPagination-root {
      display: flex;
      justify-content: center;
      align-items: flex-end;
   }
   .MuiTableCell-root {
      padding: 1rem 0px 1rem 0px;
   }
`

const TabsStyle = styled(Tabs)`
   margin-top: 3.16rem;
   border-bottom: 1px solid #d4d4d4;
`

const TableHead = styled(TableRow)`
   background: rgba(56, 66, 85, 0.9);
   color: #fff;
`

const TableCellHead = styled(TableCell)`
   position: relative;
   left: 4rem;
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

const NumberTable = styled(TableCell)`
   position: relative;
   right: 4rem;
   color: #2c68f5;
`

const TableCellName = styled(TableCell)`
   width: 12vw;
   position: relative;
   right: 2rem;
`
const TableNameHeader = styled(TableCell)``

const TableId = styled(TableCell)`
   cursor: pointer;
`
const TableDelete = styled(TableCell)`
   margin-right: 1rem;
`

const TableQuantity = styled(TableCell)`
   position: relative;
   left: 4.5rem;
`
const TableOrder = styled(TableCell)`
   position: relative;
   left: 2rem;
`

const TableTotal = styled(TableCell)`
   position: relative;
   left: 3rem;
`
const Quantity = styled(TableCell)`
   position: relative;
   right: 4rem;
`

const Total = styled(TableCell)`
   position: relative;
   right: 4rem;
`
