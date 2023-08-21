import { configureStore } from '@reduxjs/toolkit'
import { addProductSlice } from './addProduct/addProductPartOne.slice'
import { mainPageSlice } from './main.page/main.page.slice'

export const store = configureStore({
   reducer: {
      [mainPageSlice.name]: mainPageSlice.reducer,
      [addProductSlice.name]: addProductSlice.reducer,
   },
})
