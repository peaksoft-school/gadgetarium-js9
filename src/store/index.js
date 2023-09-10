import { configureStore } from '@reduxjs/toolkit'
import { categorySlice } from './cataog/catalogSlice'
import { authSlice } from './auth/authSlice'
import { addProductSlice } from './addProduct/addProductPartOne.slice'
import { favoriteSlice } from './favorite/favorite.slice'
import { mainPageSlice } from './main.page/main.page.slice'
import { compareSlice } from './compare/compare.slice'
import { globalSearchSlice } from './globalSearch/global.search.slice'

export const store = configureStore({
   reducer: {
      [categorySlice.name]: categorySlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [addProductSlice.name]: addProductSlice.reducer,
      [favoriteSlice.name]: favoriteSlice.reducer,
      [mainPageSlice.name]: mainPageSlice.reducer,
      [compareSlice.name]: compareSlice.reducer,
      [globalSearchSlice.name]: globalSearchSlice.reducer,
   },
})
