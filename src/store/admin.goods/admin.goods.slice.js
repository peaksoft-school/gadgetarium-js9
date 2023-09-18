import { createSlice } from '@reduxjs/toolkit'
import { getAllFilteredProducts } from './admin.goods.thunk'

const initialState = {
   filteredProducts: [],
   countOfProducts: 0,
   isLoading: false,
}

export const adminGoodsSlice = createSlice({
   name: 'adminGoods',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getAllFilteredProducts.fulfilled, (state, action) => {
         state.filteredProducts = action.payload.adminSearchResponses
         state.countOfProducts = action.payload.countOfProducts
         state.isLoading = true
      })
      builder.addCase(getAllFilteredProducts.pending, (state) => {
         state.isLoading = false
      })
      builder.addCase(getAllFilteredProducts.rejected, (state) => {
         state.isLoading = false
      })
   },
})

export const adminGoodsActions = adminGoodsSlice.actions
