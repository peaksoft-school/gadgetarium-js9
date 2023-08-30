import { createSlice } from '@reduxjs/toolkit'
import {
   getCompare,
   getCountProduct,
   postCompareProduct,
} from './compare.thunk'

const initialState = {
   tablets: [],
   laptops: [],
   smartphone: [],
   smartWatch: [],
   countProducts: [],
   productName: 'Phone',
   isLoadingComparison: false,
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
         if (state.productName === 'Phone') {
            return {
               ...state,
               smartphone: action.payload,
               isLoadingComparison: false,
            }
         }
         if (state.productName === 'Tablet') {
            return {
               ...state,
               tablets: action.payload,
               isLoadingComparison: false,
            }
         }
         if (state.productName === 'Laptop') {
            return {
               ...state,
               laptops: action.payload,
               isLoadingComparison: false,
            }
         }
         if (state.productName === 'Smart Watch') {
            return {
               ...state,
               smartWatch: action.payload,
               isLoadingComparison: false,
            }
         }
         return { ...state, isLoadingComparison: false }
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
   },
})

export const compareActions = compareSlice.actions
