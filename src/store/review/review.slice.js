import { createSlice } from '@reduxjs/toolkit'
import { getProductById, getReviewsProduct } from './review.thunk'

const initialState = {
   reviews: [],
   allReviews: {},
}

export const reviewSlice = createSlice({
   name: 'review',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getProductById.fulfilled, (state, action) => {
         state.reviews = action.payload.reviews
      })
      builder.addCase(getReviewsProduct.fulfilled, (state, action) => {
         state.allReviews = action.payload
      })
   },
})

export const reviewActions = reviewSlice.actions
