import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Profile } from './profilePages/Profile'
import { ReactComponent as Cross } from '../../../assets/icons/cross/small-cross-icon.svg'
import { EmptyHistory } from './historyPages/EmptyHistory'
import { EmptyFavorites } from './favoritesPages/EmptyFavorites'
import { History } from './historyPages/History'
import { Favorites } from './favoritesPages/Favorites'
import { deleteOrderRequest } from '../../../store/order/Order.thunk'
import { userOrdersBreadcrumbs } from '../../../utils/common/constants/paymant'
import { BreadCrumbs } from '../../UI/breadCrumbs/BreadCrumbs'
import { compareActions } from '../../../store/order/Order.Slice'
import { useSnackbar } from '../../../hooks/useSnackbar'

function CustomTabPanel(props) {
   const { children, value, index, ...other } = props

   return (
      <div id={`simple-tabpanel-${index}`} {...other}>
         {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
   )
}

export const PersonalArea = () => {
   const dispatch = useDispatch()
   const { productOrder, deleteAll } = useSelector((state) => state.order)
   const favoritesOrders = useSelector((state) => state.order.favorite)
   const { snackbarHandler } = useSnackbar()

   useEffect(() => {
      dispatch(compareActions.changeDelete())
   }, [productOrder])

   const navigate = useNavigate()
   const [value, setValue] = useState(0)

   const deleteOrder = () => {
      dispatch(deleteOrderRequest({ snackbarHandler, deleteAll }))
   }

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }
   const { tab } = useParams()
   function a11yProps(index) {
      return {
         id: `simple-tab-${index}`,
      }
   }

   useEffect(() => {
      if (tab === 'history') {
         setValue(0)
      } else if (tab === 'favorites') {
         setValue(1)
      } else if (tab === 'profile') {
         setValue(2)
      }
   }, [tab])

   return (
      <Container>
         <BreadCrumbsBlock>
            <BreadCrumbs breadcrumbs={userOrdersBreadcrumbs} />
            {value === 0 && <Name>История заказов</Name>}
            {value === 1 && <Name>Избранное</Name>}
            {value === 2 && <Name>Профиль</Name>}
         </BreadCrumbsBlock>
         <Box sx={{ width: '100%' }}>
            <CustomTabPanel value={value} index={0}>
               <CustomTabPanelStyle>История заказов</CustomTabPanelStyle>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
               <CustomTabPanelStyle>Избранное</CustomTabPanelStyle>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
               <CustomTabPanelStyle>Профиль</CustomTabPanelStyle>
            </CustomTabPanel>
            <TabsHeader>
               <Tabs value={value} onChange={handleChange}>
                  <Tab
                     onClick={() => navigate('/personalArea/history')}
                     label="История заказов"
                     {...a11yProps(0)}
                  />
                  <Tab
                     onClick={() => navigate('/personalArea/favorites')}
                     label="Избранное"
                     {...a11yProps(1)}
                  />
                  <Tab
                     onClick={() => navigate('/personalArea/profile')}
                     label="Профиль"
                     {...a11yProps(2)}
                  />
               </Tabs>

               {value === 0 && productOrder.length > 0 ? (
                  <Delete onClick={deleteOrder}>
                     <Cross />
                     <p>Очистить список заказов</p>
                  </Delete>
               ) : (
                  ''
               )}
            </TabsHeader>
            {value === 0 && (
               <div value={value}>
                  {productOrder.length > 0 ? <History /> : <EmptyHistory />}
                  <History />
               </div>
            )}

            {value === 1 && (
               <div value={value}>
                  {favoritesOrders.length > 0 ? (
                     <Favorites />
                  ) : (
                     <EmptyFavorites />
                  )}
               </div>
            )}
            {value === 2 && (
               <div value={value}>
                  <Profile />
               </div>
            )}
         </Box>
      </Container>
   )
}
const Container = styled('div')`
   width: 79.888vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   h2 {
      font-family: Ubuntu;
      color: #292929;
      font-weight: 500;
      font-size: 1.875rem;
   }

   .MuiBox-root {
      padding: 0;
   }
   .MuiTab-root.Mui-selected {
      background-color: #384255;
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
   }
`

const CustomTabPanelStyle = styled('p')`
   font-family: Ubuntu;
   font-size: 1.875rem;
   font-weight: 500;
   color: #292929;
`

const Delete = styled('div')`
   display: flex;
   cursor: pointer;
   justify-content: space-between;
   align-items: center;
   p {
      margin: 0;
      margin-left: 0.5rem;
   }
`
const TabsHeader = styled('div')`
   display: flex;
   align-items: center;
   border-top: 2px solid #e0e2e7;
   padding-top: 2.5rem;
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
const Name = styled('p')`
   position: relative;
   top: 1.8rem;
`
