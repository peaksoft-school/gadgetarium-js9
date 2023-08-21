import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { addProductSlice } from './addProduct/addProductPartOne.slice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [addProductSlice.name]: addProductSlice.reducer,
   },
})
