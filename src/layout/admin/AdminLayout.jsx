import React from 'react'
import { CustomToast } from '../../components/UI/snackbar/CustomToast'
import { AddingAProduct } from '../../components/admin/addingAProduct/AddingAProduct'

export const AdminLayout = () => {
   return (
      <div>
         <AddingAProduct />

         <CustomToast />
      </div>
   )
}
