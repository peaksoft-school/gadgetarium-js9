import { configureStore } from '@reduxjs/toolkit'
import { categorySlice } from './cataog/catalogSlice'
import { authSlice } from './auth/authSlice'
import { addProductSlice } from './addProduct/addProductPartOne.slice'
import { favoriteSlice } from './favorite/favorite.slice'
import { mainPageSlice } from './main.page/main.page.slice'
import { basketSlice } from './basket/basket.slice'
import { orderSlice } from './order/Order.Slice'
import { compareSlice } from './compare/compare.slice'

export const store = configureStore({
   reducer: {
      [categorySlice.name]: categorySlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [addProductSlice.name]: addProductSlice.reducer,
      [favoriteSlice.name]: favoriteSlice.reducer,
      [mainPageSlice.name]: mainPageSlice.reducer,
      [basketSlice.name]: basketSlice.reducer,
      [compareSlice.name]: compareSlice.reducer,
      [orderSlice.name]: orderSlice.reducer,
   },
})
