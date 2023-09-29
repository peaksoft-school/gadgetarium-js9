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
// import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AdminOrderItem } from './AdminOrdersItem'
import { Calendar } from '../../UI/calendarFolder/Calendar'
import { InputUi } from '../../UI/Input'
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg'
import { getSearchUserOrder } from '../../../store/order/Order.thunk'

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

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   }
}

export function AdminOrders() {
   const dispatch = useDispatch()
   const [value, setValue] = useState(0)
   const [dateStart, setDateStart] = useState('2009-10-12')
   const [dateEnd, setDateEnd] = useState('10-19-2023')
   const [valueTab, setValueTab] = useState('В ожидании')
   const [dataFunc, setDataFunc] = useState()
   const [valueInput, setValueInput] = useState('')
   const [page, setPage] = useState()
   const { adminOrderSearches, countOfProducts } = useSelector(
      (state) => state.order.orderSearch
   )

   const startDate = dayjs(dateStart).format('YYYY-MM-DD')
   const endDate = dayjs(dateEnd).format('YYYY-MM-DD')

   const getPage = (event, page) => {
      setPage(page)
   }
   const onChangeCalendar = (newValue) => {
      setDateStart(newValue)
   }
   const onChangeCalendarEnd = (newValue) => {
      setDateEnd(newValue)
   }
   const handleChange = (event, newValue) => {
      setValue(newValue)
   }
   const onChangeValueInput = (event) => {
      setValueInput(event.target.value)
   }

   useEffect(() => {
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
   }, [value])

   useEffect(() => {
      if (valueInput) {
         const data = {
            keyword: valueInput,
            sort: valueTab,
            pageSize: 4,
            pageNumber: page,
            startDate,
            endDate,
         }
         setDataFunc(data)
         dispatch(getSearchUserOrder(data))
      }

      const data = {
         keyword: valueInput,
         sort: valueTab,
         pageSize: 4,
         pageNumber: page,
         startDate,
         endDate,
      }
      setDataFunc(data)
      dispatch(getSearchUserOrder(data))
   }, [startDate, endDate, valueInput, valueTab, page])

   return (
      <Container>
         <ContainerChilde>
            <SearchBlock>
               <InputUi
                  width="34.9375rem"
                  value={valueInput}
                  onChange={onChangeValueInput}
                  height="2.4375rem"
                  placeholder="Поиск по артикулу или ..."
               />
               <SearchIconStyle />
            </SearchBlock>
            <TabsStyle value={value} onChange={handleChange}>
               <Tab label="В ожидании" {...a11yProps(0)} />
               <Tab label="В обработке " {...a11yProps(1)} />
               <Tab label="Курьер в пути" {...a11yProps(2)} />
               <Tab label="Доставлены" {...a11yProps(3)} />
               <Tab label="Отменены" {...a11yProps(4)} />
            </TabsStyle>

            <CalendarBlock>
               <Calendar
                  value={dateStart === undefined ? null : dayjs(dateStart)}
                  onChange={onChangeCalendar}
                  placeholder="от"
               />
               <Calendar
                  value={dateEnd === undefined ? null : dayjs(dateEnd)}
                  onChange={onChangeCalendarEnd}
                  placeholder="до"
               />
            </CalendarBlock>
            <FindeOrders>Найдено {countOfProducts} заказов</FindeOrders>
            {adminOrderSearches?.length === 0 ? (
               <NotProduct>Здесь нет заказов!</NotProduct>
            ) : (
               <>
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
                        {adminOrderSearches?.map((item, index) => (
                           <AdminOrderItem
                              dataFunc={dataFunc}
                              valueInput={valueInput}
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
                        <Pagination
                           color="primary"
                           onChange={getPage}
                           count={Math.ceil(countOfProducts / 7)}
                        />
                     </Stack>
                  </StackStyle>
               </>
            )}
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
   height: '48vh',
   marginTop: '1rem',
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
   justify-content: center;
   align-items: flex-end;
`
const ContainerChilde = styled('div')`
   width: 67.969vw;
`
const NotProduct = styled('p')`
   font-size: 20px;
   font-family: Inter;
   color: #384255;
   text-align: center;
`
const FindeOrders = styled('p')`
   color: #384255;
   font-family: Inter;
   font-size: 0.875rem;
   font-weight: 400;
   margin-top: 2.5rem;
`
