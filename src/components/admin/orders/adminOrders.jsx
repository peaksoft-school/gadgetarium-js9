import React, { useState } from 'react'
import { styled } from '@mui/material'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import { InputUi } from '../../UI/Input'
import { Calendar } from '../../UI/calendarFolder/Calendar'

function createData(name, calories, fat, carbs, protein) {
   return { name, calories, fat, carbs, protein }
}

const rows = [
   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
   createData('Eclair', 262, 16.0, 24, 6.0),
   createData('Cupcake', 305, 3.7, 67, 4.3),
   createData('Gingerbread', 356, 16.0, 49, 3.9),
]

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   }
}

export const AdminOrders = () => {
   const [value, setValue] = useState(0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <Container>
         <InputUi
            width="34.9375rem"
            height="2.4375rem"
            placeholder="Поиск по артикулу или ..."
         />

         <TabsStyle value={value} onChange={handleChange}>
            <Tab label="В ожидании" {...a11yProps(0)} />
            <Tab label="В обработке" {...a11yProps(1)} />
            <Tab label="Курьер в пути" {...a11yProps(2)} />
            <Tab label="Доставлены" {...a11yProps(3)} />
            <Tab label="Отменены" {...a11yProps(4)} />
         </TabsStyle>

         <CalendarBlock>
            <Calendar value={null} placeholder="от" />
            <Calendar value={null} placeholder="до" />
         </CalendarBlock>

         <TableContainer>
            <Table>
               <TableHead>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">ФИО</TableCell>
                  <TableCell align="right">Номер/дата</TableCell>
                  <TableCell align="right">Кол-во</TableCell>
                  <TableCell align="right">Общая сумма</TableCell>
                  <TableCell align="right">Оформление заказа</TableCell>
                  <TableCell align="right">Статус</TableCell>
                  <TableCell align="right">Действия</TableCell>
               </TableHead>

               <TableBody>
                  {rows.map((row) => (
                     <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                           {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
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
