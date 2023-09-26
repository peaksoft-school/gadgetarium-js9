import { createSlice } from '@reduxjs/toolkit'
import {
   getAllReviews,
   getAnsweredReviews,
   getUnansweredReviews,
} from './reviews.thunk'

const initialState = {
   allReviews: [],
   unanswered: [],
   answered: [],
   isError: '',
   isLoading: '',
}

export const reviewsSlice = createSlice({
   name: 'reviews',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllReviews.fulfilled, (state, action) => {
            state.allReviews = action.payload
            state.isLoading = true
         })
         .addCase(getAllReviews.pending, (state) => {
            state.isLoading = false
         })
         .addCase(getAllReviews.rejected, (state) => {
            state.isLoading = false
         })
      builder
         .addCase(getUnansweredReviews.fulfilled, (state, action) => {
            state.unanswered = action.payload
            state.isLoading = true
         })
         .addCase(getAllReviews.pending, (state) => {
            state.isLoading = false
         })
         .addCase(getAllReviews.rejected, (state) => {
            state.isLoading = false
         })
      builder
         .addCase(getAnsweredReviews.fulfilled, (state, action) => {
            state.answered = action.payload
            state.isLoading = true
         })
         .addCase(getAllReviews.pending, (state) => {
            state.isLoading = false
         })
         .addCase(getAllReviews.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export const ActionsType = reviewsSlice.actions
