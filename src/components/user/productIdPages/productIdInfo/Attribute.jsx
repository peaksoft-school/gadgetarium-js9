import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { Description } from './Description'
import { Reviews } from './Reviews'
import { Delivery } from './Delivery'
import { Сharacteristics } from './Сharacteristics'
import { ReactComponent as DownloadIcons } from '../../../../assets/icons/tools-for-site/Download.svg'
import { getDownloadPdfFiles } from '../../../../store/informationPhone/infoPageThunk'

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
            <Box>
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
   const dispatch = useDispatch()

   const { role } = useSelector((state) => state.auth)

   const onClickGetPdfFiles = () => {
      dispatch(getDownloadPdfFiles())
   }
   const [value, setValue] = useState(0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <Container>
         {role === 'USER' ? (
            <div>
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
                        <DownloadBlock onClick={onClickGetPdfFiles}>
                           <DownloadIcons />
                           <p> Скачать документ.pdf</p>
                        </DownloadBlock>
                     </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                     <Description />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                     <Сharacteristics />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                     <Reviews />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={3}>
                     <Delivery />
                  </CustomTabPanel>
               </Box>
            </div>
         ) : (
            <div>
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
                        <DownloadBlock onClick={onClickGetPdfFiles}>
                           <DownloadIcons /> <p> Скачать документ.pdf</p>
                        </DownloadBlock>
                     </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                     <Description />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                     <Сharacteristics />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                     <Reviews />
                  </CustomTabPanel>
               </Box>
            </div>
         )}
      </Container>
   )
}

const Container = styled('div')`
   width: 79.888vw;
   padding-bottom: 10rem;
   margin-top: 4.75rem;

   .MuiTabs-flexContainer {
      display: flex;
      gap: 3rem;
   }

   .MuiTabs-indicator {
      display: block;
   }
   .MuiTab-root {
      text-align: center;
      text-transform: none;
      font-family: Inter;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      padding: 0;
   }
`

const DownloadBlock = styled('div')`
   display: flex;
   width: 100%;
   justify-content: flex-end;
   align-items: center;
   cursor: pointer;
   p {
      display: flex;
      align-items: center;
      color: #384255;
      font-family: Inter;
      font-size: 1rem;
      font-weight: 400;
      margin-left: 0.75rem;
   }
`
