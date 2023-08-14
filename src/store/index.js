import { configureStore } from '@reduxjs/toolkit'
import { addProductSlice } from './addProduct/addProductPartOne.slice'

export const store = configureStore({
   reducer: {
      [addProductSlice.name]: addProductSlice.reducer,
   },
})
