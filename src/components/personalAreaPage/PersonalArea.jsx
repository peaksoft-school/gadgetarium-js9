import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import { History } from './pages/History'
import { Favorites } from './pages/Favorites'
import { Profile } from './pages/Profile'

function CustomTabPanel(props) {
   const { children, value, index, ...other } = props

   return (
      <div id={`simple-tabpanel-${index}`} {...other}>
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   )
}

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
   }
}

export const PersonalArea = () => {
   const [value, setValue] = useState(0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }
   return (
      <Container>
         <Box sx={{ width: '100%' }}>
            <CustomTabPanel value={value} index={0}>
               <h2>История заказов</h2>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
               <h2>Избранное</h2>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
               <Profile />
            </CustomTabPanel>
            <BlockTabs>
               <Tabs value={value} onChange={handleChange}>
                  <Tab label="История заказов" {...a11yProps(0)} />
                  <Tab label="Избранное" {...a11yProps(1)} />
                  <Tab label="Профиль" {...a11yProps(2)} />
               </Tabs>
            </BlockTabs>
            <CustomTabPanel value={value} index={0}>
               <History />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
               <Favorites />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
               <Profile />
            </CustomTabPanel>
         </Box>
      </Container>
   )
}
const Container = styled('div')`
   .MuiTab-root.Mui-selected {
      background-color: #384255;
      color: #fff;
   }
   .MuiTab-root {
      border-radius: 4px;
      color: black;
      background-color: #e0e2e7;
      margin-left: 20px;
      padding: 0px 20px 0px 20px;
   }

   .MuiTabs-indicator {
      display: none;
   }
`
const BlockTabs = styled('div')`
   width: 500px;
   display: flex;
   justify-content: space-between;
`
