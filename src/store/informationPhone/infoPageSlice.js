import { createSlice } from '@reduxjs/toolkit'
import {
   getDownloadPdfFiles,
   getInfoPage,
   getRecentlyViewedProduct,
   getReviwesProduct,
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
   viewedProduct: [],
   updateAdminComment: [],
   getPdfFiles: [],
   isLoading: true,
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
            isLoading: false,
         }
      })
      builder.addCase(getInfoPage.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getInfoPage.rejected, (state) => {
         state.isLoading = false
      })

      builder.addCase(getReviwesProduct.fulfilled, (state, action) => {
         state.getReviews = action.payload
         state.isLoading = false
      })
      builder.addCase(getReviwesProduct.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getReviwesProduct.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(putReviesRequest.fulfilled, (state, action) => {
         state.updateComment = action.payload
         state.isLoading = false
      })
      builder.addCase(putReviesRequest.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(putReviesRequest.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(getRecentlyViewedProduct.fulfilled, (state, action) => {
         state.viewedProduct = action.payload
      })
      builder.addCase(putReviewsAdminAnswer.fulfilled, (state, action) => {
         state.updateAdminComment = action.payload
         state.isLoading = false
      })
      builder.addCase(putReviewsAdminAnswer.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(putReviewsAdminAnswer.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(getDownloadPdfFiles.fulfilled, (state, action) => {
         state.getPdfFiles = action.payload
      })
   },
})
export const infoPageActions = infoPageSlice.actions
