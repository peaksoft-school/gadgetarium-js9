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
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg'
import { ReactComponent as DeleteTable } from '../../../assets/icons/tools-for-site/delete-icon.svg'
import { InputUi } from '../../UI/Input'
import { Calendar } from '../../UI/calendarFolder/Calendar'
import { orderIsAdminThunk } from '../../../store/order/Order.thunk'

const rows = [
   {
      id: '1',
      name: 'Айзат Жумагулова',
      number: '000000-455247',
      quantity: '2 шт.',
      total: '90 000с',
      order: 'Самовывоз',
      status: 'В обработке',
      actions: <DeleteTable />,
   },
   {
      id: '2',
      name: 'Мстители финал',
      number: '000000-455247',
      quantity: '2 шт.',
      total: '90 000с',
      order: 'Самовывоз',
      status: 'В обработке',
      actions: <DeleteTable />,
   },
]

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   }
}

export const AdminOrders = () => {
   const dispatch = useDispatch()
   const orderIsAdmins = useSelector((state) => state.order.orderIsAdmin)
   const [value, setValue] = useState(0)

   const [valueTab, setValueTab] = useState('В ожидании')

   console.log('orderIsAdmin', orderIsAdmins)

   const handleChange = (event, newValue) => {
      setValue(newValue)

      if (value === 0) {
         setValueTab('В ожидании')
      } else if (value === 1) {
         setValueTab('В обработке')
      } else if (value === 2) {
         setValueTab('Курьер в пути')
      } else if (value === 3) {
         setValueTab('Доставлены')
      } else if (value === 4) {
         setValueTab('Отменены')
      }
   }
   const [dateStart, setDateStart] = useState()
   const [dateEnd, setDateEnd] = useState()

   const startDate = dayjs(dateStart).format('DD.MM.YYYY')
   const endDate = dayjs(dateEnd).format('DD.MM.YYYY')

   const onChangeCalendar = (newValue) => {
      setDateStart(newValue)
   }
   const onChangeCalendarEnd = (newValue) => {
      setDateEnd(newValue)
   }

   useEffect(() => {
      const data = {
         startDate,
         endDate,
         valueTab,
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
            <Tab label="В ожидании" {...a11yProps(0)} />
            <Tab label="В обработке" {...a11yProps(1)} />
            <Tab label="Курьер в пути" {...a11yProps(2)} />
            <Tab label="Доставлены" {...a11yProps(3)} />
            <Tab label="Отменены" {...a11yProps(4)} />
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
                  <TableCell>ФИО</TableCell>
                  <NumberAndDate>Номер/дата</NumberAndDate>
                  <Quantity>Кол-во</Quantity>
                  <Total>Общая сумма</Total>
                  <Order>Оформление заказа</Order>
                  <StatusHeader>Статус</StatusHeader>
                  <TableCell>Действия</TableCell>
               </TableHead>

               <TableBody>
                  {rows.map((row) => (
                     <TableRow key={row.name}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <NumberTable>{row.number}</NumberTable>
                        <TableCell>{row.quantity}</TableCell>
                        <TableCell>{row.total}</TableCell>
                        <OrderTable>{row.order}</OrderTable>
                        <Status>{row.status}</Status>
                        <Delete>{row.actions}</Delete>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>

         <Stack spacing={2}>
            <Pagination count={10} />
         </Stack>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 2.5rem;

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
      width: 81.5625rem;
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
`

const TabsStyle = styled(Tabs)`
   margin-top: 3.16rem;
   border-bottom: 1px solid #d4d4d4;
`

const TableHead = styled(TableRow)`
   background: rgba(56, 66, 85, 0.9);
   color: #fff;
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
const Status = styled(TableCell)`
   color: #f99808;
`
const NumberAndDate = styled(TableCell)`
   position: relative;
   left: 5.5rem;
`
const Quantity = styled(TableCell)`
   position: relative;
   left: 6.5rem;
`
const Total = styled(TableCell)`
   position: relative;
   left: 5.4rem;
`
const Order = styled(TableCell)`
   position: relative;
   left: 2.2rem;
`
const StatusHeader = styled(TableCell)`
   position: relative;
   right: 0.2rem;
`
const Delete = styled(TableCell)`
   position: relative;
   right: 1rem;
   cursor: pointer;
`
const SearchIconStyle = styled(SearchIcon)`
   position: absolute;
   left: 33rem;
   path {
      fill: #91969e;
   }
   cursor: pointer;
`
const OrderTable = styled(TableCell)`
   position: relative;
   right: 1.4rem;
`
const NumberTable = styled(TableCell)`
   color: #2c68f5;
`
