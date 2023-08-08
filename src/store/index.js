import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { SnackBarSlice } from './snackBarSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [SnackBarSlice.name]: SnackBarSlice.reducer,
   },
})
