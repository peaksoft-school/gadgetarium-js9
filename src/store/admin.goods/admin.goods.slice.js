import { createSlice } from '@reduxjs/toolkit'
import {
   deleteAllProducts,
   deleteProduct,
   getAllFilteredProducts,
   postDiscount,
   postMailingList,
   postS3File,
} from './admin.goods.thunk'

const initialState = {
   filteredProducts: [],
   checkedProducts: [],
   bannerImages: [],
   countOfProducts: 0,
   isLoading: false,
}

export const adminGoodsSlice = createSlice({
   name: 'adminGoods',
   initialState,
   reducers: {
      changeChecked: (state, action) => {
         state.filteredProducts = state.filteredProducts.map((el) => {
            if (el.subProductId === action.payload) {
               return { ...el, isChecked: !el.isChecked }
            }
            return el
         })
      },
      onChangeGoodsChecked: (state) => {
         const checkedProducts = []
         state.filteredProducts.map((el) => {
            if (el.isChecked === true) {
               checkedProducts.push(el.subProductId)
            }
            return el
         })
         state.checkedProducts = checkedProducts
      },
      falseAllChecked: (state) => {
         state.filteredProducts = state.filteredProducts.map((el) => {
            return { ...el, isChecked: false }
         })
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getAllFilteredProducts.fulfilled, (state, action) => {
         state.filteredProducts = action.payload.adminSearchResponses.map(
            (el) => {
               return { ...el, isChecked: false }
            }
         )
         state.countOfProducts = action.payload.countOfProducts
      })
      builder.addCase(postS3File.fulfilled, (state, action) => {
         if (action.payload !== null) {
            state.bannerImages = [...state.bannerImages, action.payload]
         }
         state.isLoading = false
      })
      builder.addCase(postS3File.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(postS3File.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(postMailingList.fulfilled, (state) => {
         state.isLoading = false
      })
      builder.addCase(postMailingList.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(postMailingList.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(postDiscount.fulfilled, (state) => {
         state.isLoading = false
      })
      builder.addCase(postDiscount.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(postDiscount.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(deleteProduct.fulfilled, (state) => {
         state.isLoading = false
      })
      builder.addCase(deleteProduct.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(deleteProduct.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(deleteAllProducts.fulfilled, (state) => {
         state.isLoading = false
      })
      builder.addCase(deleteAllProducts.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(deleteAllProducts.rejected, (state) => {
         state.isLoading = false
      })
   },
})

export const adminGoodsActions = adminGoodsSlice.actions
