import { configureStore } from '@reduxjs/toolkit'
import { categorySlice } from './cataog/catalogSlice'

export const store = configureStore({
   reducer: {
      [categorySlice.name]: categorySlice.reducer,
   },
})
