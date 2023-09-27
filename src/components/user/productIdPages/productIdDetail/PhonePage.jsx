import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { getInfoPage } from '../../../../store/informationPhone/infoPageThunk'
import { ProductDetails } from '../ProductDetails'
import { ContainerProductId } from '../Container'
import { BreadCrumbs } from '../../../UI/breadCrumbs/BreadCrumbs'

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

export const PhonePage = () => {
   const { infoPhone, subProductColor } = useSelector((state) => state.product)
   const { role } = useSelector((state) => state.auth)

   const { productId } = useParams()
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getInfoPage({ productId, colour: subProductColor }))
   }, [])

   const [value, setValue] = useState(0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   const labelBreadCrumbsData = {
      Phone: 'Смартфоны',
      Laptop: 'Ноутбуки',
      'Smart Watch': 'Смарт-часы',
      Tablet: 'Планшеты',
   }

   const pathBreadCrumbs = labelBreadCrumbsData[infoPhone?.category]

   return (
      <Container>
         <BreadCrumbsContainer>
            <BreadCrumbsBlock>
               <BreadCrumbs
                  breadcrumbs={[
                     { path: '/', label: 'Главная' },
                     {
                        path: `/category/${infoPhone?.category}`,
                        label: pathBreadCrumbs,
                     },
                     {
                        label: infoPhone?.name,
                     },
                  ]}
               />
            </BreadCrumbsBlock>
         </BreadCrumbsContainer>
         <BrandNameBlock>
            <BrandName>{infoPhone?.brandName}</BrandName>
         </BrandNameBlock>

         {role === 'USER' || role === 'GUEST' ? (
            <ContainerProductId />
         ) : (
            <>
               <BoxBlock>
                  <TabsStyle
                     value={value}
                     onChange={handleChange}
                     aria-label="basic tabs example"
                  >
                     <TabStyle
                        className="Mui-selected-style"
                        label="Товар"
                        {...a11yProps(0)}
                     />
                     <TabStyle
                        className="Mui-selected-style"
                        label="Детали товара"
                        {...a11yProps(1)}
                     />
                  </TabsStyle>
               </BoxBlock>
               <CustomTabPanel value={value} index={0}>
                  <ContainerProductId />
               </CustomTabPanel>
               <CustomTabPanel value={value} index={1}>
                  <ProductDetails />
               </CustomTabPanel>
            </>
         )}
      </Container>
   )
}

const Container = styled('div')`
   .MuiBox-root {
      padding: 0;
   }
   .MuiTab-root.Mui-selected.Mui-selected-style {
      background-color: #384255;
      color: #fff;
   }

   .MuiTabs-indicator {
      display: none;
   }

   .MuiTabs-flexContainer {
      display: flex;
      gap: 0.75rem;
   }
`

const TabsStyle = styled(Tabs)`
   width: 79.888vw;
   min-height: auto;
`

const TabStyle = styled(Tab)`
   height: 2.125rem;
   border-radius: 4px;
   color: #384255;
   min-height: 0;
   background-color: #e0e2e7;
   padding: 0px 20px 0px 20px;
   text-transform: none;
`

const BrandNameBlock = styled('div')`
   display: flex;
   justify-content: center;
`

const BrandName = styled('h1')`
   width: 79.888vw;
   color: #0a0a92;
   font-family: Ubuntu;
   font-size: 30px;
   font-style: normal;
   font-weight: 500;
   line-height: 110%;
   padding-bottom: 20px;
   border-bottom: 1px solid #cdcdcd;
`

const BoxBlock = styled('div')`
   display: flex;
   justify-content: center;
`

const BreadCrumbsContainer = styled('div')`
   display: flex;
   justify-content: center;
   align-items: center;
`
const BreadCrumbsBlock = styled('div')`
   display: flex;
   align-items: center;
   width: 79.888vw;
`
