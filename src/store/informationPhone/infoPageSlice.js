import { createSlice } from '@reduxjs/toolkit'
import {
   deleteIsCheckedProduct,
   getByIdProductDetail,
   getDownloadPdfFiles,
   getInfoPage,
   getRecentlyViewedProduct,
   getReviwesProduct,
   postReviewsPhone,
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
   isLoading: false,
   getByIdDetail: [],
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
         state.isLoading = false
      })
      builder.addCase(getRecentlyViewedProduct.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getRecentlyViewedProduct.rejected, (state) => {
         state.isLoading = false
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
      builder.addCase(postReviewsPhone.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(postReviewsPhone.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(postReviewsPhone.fulfilled, (state) => {
         state.isLoading = false
      })
      builder.addCase(getDownloadPdfFiles.fulfilled, (state, action) => {
         state.getPdfFiles = action.payload
         state.isLoading = false
      })
      builder.addCase(getDownloadPdfFiles.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getDownloadPdfFiles.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(getByIdProductDetail.fulfilled, (state, action) => {
         state.getByIdDetail = action.payload
         state.isLoading = false
      })
      builder.addCase(getByIdProductDetail.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getByIdProductDetail.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(deleteIsCheckedProduct.fulfilled, (state) => {
         state.isLoading = false
      })
      builder.addCase(deleteIsCheckedProduct.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(deleteIsCheckedProduct.rejected, (state) => {
         state.isLoading = false
      })
   },
})
export const infoPageActions = infoPageSlice.actions
