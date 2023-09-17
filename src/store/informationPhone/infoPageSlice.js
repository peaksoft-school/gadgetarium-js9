import { createSlice } from '@reduxjs/toolkit'
import {
   getCatalogRequest,
   getInfoPage,
   getReviwesProduct,
   getSubCatalogRequest,
   putReviesRequest,
} from './infoPageThunk'

const initialState = {
   infoPhone: {},
   getReviews: {},
   allCategory: [],
   subCategories: [],
   subProductColor: '',
   userComment: {},
   updateComment: {},
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
   },
})
export const infoPageActions = infoPageSlice.actions
