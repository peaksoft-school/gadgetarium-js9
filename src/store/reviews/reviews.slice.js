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
}

export const reviewsSlice = createSlice({
   name: 'reviews',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getAllReviews.fulfilled, (state, action) => {
         state.allReviews = action.payload
      })
      builder.addCase(getUnansweredReviews.fulfilled, (state, action) => {
         state.unanswered = action.payload
      })
      builder.addCase(getAnsweredReviews.fulfilled, (state, action) => {
         state.answered = action.payload
      })
      // builder.addCase(putEditAnswerReviews.fulfilled, (state, action) => {
      //    state.answered = action.payload
      // })
   },
})

export const ActionsType = reviewsSlice.actions
