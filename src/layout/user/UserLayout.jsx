import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { Header } from '../../components/user/header/Header'
import { Footer } from '../../components/user/footer/Footer'
import { getFavoriteItems } from '../../store/favorite/favorite.thunk'
import { getAllCompareGoods } from '../../store/compare/compare.thunk'

export const UserLayout = () => {
   const { favoriteItems } = useSelector((state) => state.favorite)
   const { allProducts } = useSelector((state) => state.compare)
   const { isAuthorization } = useSelector((state) => state.auth)

   const location = useLocation()
   const dispatch = useDispatch()
   useEffect(() => {
      if (isAuthorization) {
         dispatch(getFavoriteItems())
         dispatch(getAllCompareGoods())
      }
   }, [])
   return (
      <Container>
         <Header
            favorite={
               location.pathname === '/favorite' ? null : favoriteItems.length
            }
            compare={
               location.pathname === '/compare' ? null : allProducts.length
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
