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
   isLoading: false,
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
            return { ...state, smartphone: action.payload, isLoading: false }
         }
         if (state.productName === 'Tablet') {
            return { ...state, tablets: action.payload, isLoading: false }
         }
         if (state.productName === 'Laptop') {
            return { ...state, laptops: action.payload, isLoading: false }
         }
         if (state.productName === 'Smart Watch') {
            return { ...state, smartWatch: action.payload, isLoading: false }
         }
         return { ...state, isLoading: false }
      })
      builder.addCase(getCompare.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getCompare.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(postCompareProduct.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(postCompareProduct.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(postCompareProduct.fulfilled, (state) => {
         state.isLoading = false
      })
      builder.addCase(getCountProduct.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getCountProduct.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(getCountProduct.fulfilled, (state, action) => {
         state.isLoading = false
         state.countProducts = action.payload
      })
   },
})

export const compareActions = compareSlice.actions
