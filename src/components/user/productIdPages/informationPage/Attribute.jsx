import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'
import { Description } from './Description'
import { Reviews } from './Reviews'
import { Delivery } from './Delivery'

function CustomTabPanel(props) {
   const { children, value, index, ...other } = props

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
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
      'aria-controls': `simple-tabpanel-${index}`,
   }
}

export const Attribute = () => {
   const [value, setValue] = useState(0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <Container>
         <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
               <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
               >
                  <Tab label="Описание" {...a11yProps(0)} />
                  <Tab label="Характеристики" {...a11yProps(1)} />
                  <Tab label="Отзывы" {...a11yProps(2)} />
                  <Tab label="Доставка и оплата" {...a11yProps(3)} />
               </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
               <Description />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
               Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
               <Reviews />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
               <Delivery />
            </CustomTabPanel>
         </Box>
      </Container>
   )
}

const Container = styled('div')`
   width: 80vw;
   margin-top: 4.75rem;
`
