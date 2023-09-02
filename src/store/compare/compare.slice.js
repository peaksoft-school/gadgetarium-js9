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
   productName: 'Phone',
   isLoadingComparison: false,
   deleteAll: [],
   allProducts: [],
}

export const compareSlice = createSlice({
   name: 'compare',
   initialState,
   reducers: {
      getProductNameHandler: (state, action) => {
         state.productName = action.payload
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getCompare.fulfilled, (state, action) => {
         const deleteAllConstant = []
         action.payload.map((el) => deleteAllConstant.push(el.subProductId))
         state.products = action.payload
         state.deleteAll = deleteAllConstant
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
