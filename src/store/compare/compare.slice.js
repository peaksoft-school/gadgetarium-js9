import { createSlice } from '@reduxjs/toolkit'
import {
   deleteAllListProducts,
   getAllCompareGoods,
   getCompare,
   getCountProduct,
   postCompareProduct,
} from './compare.thunk'

const initialState = {
   products: [],
   countProducts: [],
   isLoadingComparison: false,
   deleteAll: [],
   allProducts: [],
}

export const compareSlice = createSlice({
   name: 'compare',
   initialState,
   reducers: {
      changeDelete: (state) => {
         const deleteAllConstant = []
         state.products.map((el) => deleteAllConstant.push(el.subProductId))
         state.deleteAll = deleteAllConstant
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getCompare.fulfilled, (state, action) => {
         state.products = action.payload
         state.isLoadingComparison = false
      })
      builder.addCase(getCompare.pending, (state) => {
         state.isLoadingComparison = true
      })
      builder.addCase(getCompare.rejected, (state) => {
         state.isLoadingComparison = false
      })
      builder.addCase(postCompareProduct.pending, (state) => {
         state.isLoadingComparison = true
      })
      builder.addCase(postCompareProduct.rejected, (state) => {
         state.isLoadingComparison = false
      })
      builder.addCase(postCompareProduct.fulfilled, (state) => {
         state.isLoadingComparison = false
      })
      builder.addCase(getCountProduct.pending, (state) => {
         state.isLoadingComparison = true
      })
      builder.addCase(getCountProduct.rejected, (state) => {
         state.isLoadingComparison = false
      })
      builder.addCase(getCountProduct.fulfilled, (state, action) => {
         state.isLoadingComparison = false
         state.countProducts = action.payload
      })
      builder.addCase(deleteAllListProducts.pending, (state) => {
         state.isLoadingComparison = true
      })
      builder.addCase(deleteAllListProducts.rejected, (state) => {
         state.isLoadingComparison = false
      })
      builder.addCase(deleteAllListProducts.fulfilled, (state) => {
         state.isLoadingComparison = false
      })
      builder.addCase(getAllCompareGoods.pending, (state) => {
         state.isLoadingComparison = true
      })
      builder.addCase(getAllCompareGoods.rejected, (state) => {
         state.isLoadingComparison = false
      })
      builder.addCase(getAllCompareGoods.fulfilled, (state, action) => {
         state.allProducts = action.payload
         state.isLoadingComparison = false
      })
   },
})

export const compareActions = compareSlice.actions
