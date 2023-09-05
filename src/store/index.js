import { configureStore } from '@reduxjs/toolkit'
import { categorySlice } from './cataog/catalogSlice'
import { authSlice } from './auth/authSlice'
import { addProductSlice } from './addProduct/addProductPartOne.slice'
import { mainPageSlice } from './main.page/main.page.slice'
import { infoPageSlice } from './informationPhone/infoPageSlice'

export const store = configureStore({
   reducer: {
      [categorySlice.name]: categorySlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [addProductSlice.name]: addProductSlice.reducer,
      [mainPageSlice.name]: mainPageSlice.reducer,
      [infoPageSlice.name]: infoPageSlice.reducer,
   },
})
