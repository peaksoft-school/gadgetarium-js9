import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/user/header/Header'
import { Footer } from '../../components/user/footer/Footer'

export const UserLayout = () => {
   return (
      <div>
         <Header />

         <Outlet />

         <Footer />
      </div>
   )
}
