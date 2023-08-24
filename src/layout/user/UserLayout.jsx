import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material'
import { Header } from '../../components/user/header/Header'
import { Footer } from '../../components/user/footer/Footer'

export const UserLayout = () => {
   return (
      <Container>
         <Header />

         <Outlet />

         <Footer />
      </Container>
   )
}
const Container = styled('div')`
   background: #f4f4f4;
`
