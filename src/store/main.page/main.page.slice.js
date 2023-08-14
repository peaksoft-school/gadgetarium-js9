/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { getStock } from './main.page.thunk'

const initialState = {
   stock: [],
   novelties: [],
   recommend: [],
   isLoading: false,
}

export const mainPageSlice = createSlice({
   name: 'mainPage',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getStock.fulfilled, (state, action) => {
         return {
            ...state,
            stock: action.payload.subProductMainPageResponses,
         }
      })
   },
})
