import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { Header } from '../../components/user/header/Header'
import { Footer } from '../../components/user/footer/Footer'
import { getFavoriteItems } from '../../store/favorite/favorite.thunk'

export const UserLayout = () => {
   const { favoriteItems } = useSelector((state) => state.favorite)
   const location = useLocation()
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getFavoriteItems())
   }, [])
   console.log(location)
   return (
      <Container>
         <Header
            favorite={
               location.pathname === '/favorite' ? null : favoriteItems.length
            }
         />

         <Outlet />

         <Footer />
      </Container>
   )
}
const Container = styled('div')`
   background: #f4f4f4;
`
