import { createSlice } from '@reduxjs/toolkit'
import {
   getCatalogRequest,
   getInfoPage,
   getRecentlyViewedProduct,
   getReviwesProduct,
   getSubCatalogRequest,
   putReviesRequest,
   putReviewsAdminAnswer,
} from './infoPageThunk'

const initialState = {
   infoPhone: {},
   getReviews: {},
   allCategory: [],
   subCategories: [],
   subProductColor: '',
   userComment: {},
   updateComment: {},
   updateAdminComment: {},
   viewedProduct: [],
}

export const infoPageSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {
      changeSubProductColor: (state, action) => {
         state.subProductColor = action.payload
      },
      getUserComment: (state, action) => {
         let userComment
         state.infoPhone.reviews.map((el) => {
            if (el.reviewId === action.payload) {
               userComment = el
            }
            return el
         })
         state.userComment = userComment
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getInfoPage.fulfilled, (state, action) => {
         return {
            ...state,
            infoPhone: action.payload,
         }
      })
      builder.addCase(getReviwesProduct.fulfilled, (state, action) => {
         state.getReviews = action.payload
      })
      builder.addCase(getCatalogRequest.fulfilled, (state, action) => {
         state.allCategory = action.payload
      })
      builder.addCase(getSubCatalogRequest.fulfilled, (state, action) => {
         state.subCategories = action.payload
      })
      builder.addCase(putReviesRequest.fulfilled, (state, action) => {
         state.updateComment = action.payload
      })
      builder.addCase(putReviewsAdminAnswer.fulfilled, (state, action) => {
         state.updateAdminComment = action.payload
      })
      builder.addCase(getRecentlyViewedProduct.fulfilled, (state, action) => {
         state.viewedProduct = action.payload
      })
   },
})
export const infoPageActions = infoPageSlice.actions
