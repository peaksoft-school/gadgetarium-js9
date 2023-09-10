import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Profile } from './profilePages/Profile'
import { ReactComponent as Cross } from '../../assets/icons/cross/small-cross-icon.svg'
import { EmptyHistory } from './historyPages/EmptyHistory'
import { EmptyFavorites } from './favoritesPages/EmptyFavorites'
import { History } from './historyPages/History'
import { Favorites } from './favoritesPages/Favorites'
import { deleteOrderRequest } from '../../store/order/Order.thunk'

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

export const PersonalArea = () => {
   const dispatch = useDispatch()
   const { productOrder } = useSelector((state) => state.order)

   const orderById = productOrder.length > 0 ? productOrder[0].orderId : null

   const navigate = useNavigate()
   const [value, setValue] = useState(0)

   const deleteOrder = () => {
      dispatch(deleteOrderRequest(orderById))
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
         <Box sx={{ width: '100%' }}>
            <CustomTabPanel value={value} index={0}>
               <h2>История заказов</h2>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
               <h2>Избранное</h2>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
               <h2>Профиль</h2>
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
                  <Tab label="Профиль" {...a11yProps(2)} />
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
            <CustomTabPanel value={value} index={0}>
               {orderById === 0 ? <EmptyHistory /> : <History />}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
               {orderById === 0 ? <EmptyFavorites /> : <Favorites />}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
               <Profile />
            </CustomTabPanel>
         </Box>
      </Container>
   )
}
const Container = styled('div')`
   width: 79.888vw;
   display: flex;
   margin-top: 2.88rem;
   justify-content: center;

   .css-19kzrtu {
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

   .MuiTabs-indicator {
      display: none;
   }

   .MuiTabs-flexContainer {
      display: flex;
      width: 28rem;
      justify-content: space-between;
   }
`

const Delete = styled('div')`
   display: flex;
   cursor: pointer;
   justify-content: space-between;
   align-items: center;
   p {
      margin-left: 0.5rem;
   }
`
const TabsHeader = styled('div')`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;

   border-top: 2px solid #e0e2e7;
   padding-top: 2.5rem;
`
