import { createSlice } from '@reduxjs/toolkit'
import { getInfoPage, getReviwesProduct } from './infoPageThunk'

const initialState = {
   infoPhone: {},
   getReviews: {},
}

export const infoPageSlice = createSlice({
   name: 'phone',
   initialState,
   reducers: {},
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
   },
})
