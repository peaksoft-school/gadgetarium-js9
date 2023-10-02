import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
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
         width="100%"
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && children}
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
   const [value, setValue] = useState(0)
   const { subProductId } = useSelector((state) => state.product.infoPhone)
   const download = useSelector((state) => state.product.getPdfFiles)

   const onDownloadPadfFile = () => {
      dispatch(getDownloadPdfFiles(subProductId))
   }

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <Container>
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
               value={value}
               onChange={handleChange}
               aria-label="basic tabs example"
            >
               <Tab label="Описание" {...a11yProps(0)} />
               <Tab label="Характеристики" {...a11yProps(1)} />
               <Tab label="Отзывы" {...a11yProps(2)} />
               {role === 'USER' && (
                  <Tab label="Доставка и оплата" {...a11yProps(3)} />
               )}
               {role === 'GUEST' && (
                  <Tab label="Доставка и оплата" {...a11yProps(3)} />
               )}

               <DownloadBlock onClick={onDownloadPadfFile}>
                  <DownloadIcons />
                  <a href="/" download={download} target="_blank">
                     Скачать документ.pdf
                  </a>
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
      </Container>
   )
}

const Container = styled('div')`
   padding-bottom: 10rem;
   margin-top: 4.75rem;
   width: 100%;
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
   a {
      display: flex;
      align-items: center;
      color: #384255;
      font-family: Inter;
      font-size: 1rem;
      font-weight: 400;
      text-decoration: none;
      margin-left: 12px;
   }
`
