import { configureStore } from '@reduxjs/toolkit'
import { addProductSlice } from './addProduct/addProductPartOne.slice'
import { favoriteSlice } from './favorite/favorite.slice'

export const store = configureStore({
   reducer: {
      [addProductSlice.name]: addProductSlice.reducer,

      [favoriteSlice.name]: favoriteSlice.reducer,
   },
})
