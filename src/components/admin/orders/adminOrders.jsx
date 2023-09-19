import React, { useState } from 'react'
import { styled } from '@mui/material'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { InputUi } from '../../UI/Input'
import { Calendar } from '../../UI/calendarFolder/Calendar'

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

         <Box sx={{ width: '81.5625vw' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
               <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
               >
                  <Tab label="В ожидании" {...a11yProps(0)} />
                  <Tab label="В обработке" {...a11yProps(1)} />
                  <Tab label="Курьер в пути" {...a11yProps(2)} />
                  <Tab label="Доставлены" {...a11yProps(3)} />
                  <Tab label="Отменены" {...a11yProps(4)} />
               </Tabs>
            </Box>
         </Box>

         <CalendarBlock>
            <Calendar />
            <Calendar />
         </CalendarBlock>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 2.5rem;
   .MuiBox-root {
      padding: 0;
      margin-top: 2.5rem;
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
`
const CalendarBlock = styled('div')`
   display: flex;
   gap: 1.25rem;
   margin-top: 1.25rem;
`
