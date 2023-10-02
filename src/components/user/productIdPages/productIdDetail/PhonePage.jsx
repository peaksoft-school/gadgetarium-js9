import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { getInfoPage } from '../../../../store/informationPhone/infoPageThunk'
import { ContainerProductId } from '../Container'
import { BreadCrumbs } from '../../../UI/breadCrumbs/BreadCrumbs'
import { ProductDetailIsAdmin } from '../productDetailAdmin/ProductDetailadmin'
import { Loading } from '../../../UI/loading/Loading'

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

export const PhonePage = () => {
   const { infoPhone, subProductColor, isLoading } = useSelector(
      (state) => state.product
   )
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
         {isLoading && <Loading />}
         <WidthContainer roleadmin={role}>
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
            <BrandName>{infoPhone?.brandName}</BrandName>
         </WidthContainer>

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
                  <ProductDetailIsAdmin productId={productId} />
               </CustomTabPanel>
            </>
         )}
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 6.25vw;
`
const WidthContainer = styled('div')`
   display: flex;
   flex-direction: column;
   width: ${(props) => (props.roleadmin === 'ADMIN' ? '89.583vw' : '79.888vw')};
`

const TabsStyle = styled(Tabs)`
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

const BrandName = styled('h1')`
   color: #292929;
   font-family: Ubuntu;
   font-size: 30px;
   font-style: normal;
   font-weight: 500;
   line-height: 110%;
   padding-bottom: 20px;
   border-bottom: 1px solid #cdcdcd;
`

const BoxBlock = styled('div')`
   padding-bottom: 2.5rem;
   width: 89.583vw;
   .MuiTab-root.Mui-selected {
      background-color: #384255;
      color: #fff;
   }
   .MuiTab-root {
      height: 2.25rem;
      border-radius: 4px;
      color: #fff;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
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
      gap: 0.625vw;
   }
`
const BreadCrumbsBlock = styled('div')`
   display: flex;
   align-items: center;
`
