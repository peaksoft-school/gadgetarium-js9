import { createSlice } from '@reduxjs/toolkit'
import {
   getBanners,
   getNovelities,
   getRecommend,
   getStock,
} from './main.page.thunk'

const initialState = {
   stock: [],
   novelties: [],
   recommend: [],
   isLoading: false,
   banner: [],
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
            isLoading: false,
         }
      })
      builder.addCase(getNovelities.fulfilled, (state, action) => {
         return {
            ...state,
            novelties: action.payload.subProductMainPageResponses,
            isLoading: false,
         }
      })
      builder.addCase(getRecommend.fulfilled, (state, action) => {
         return {
            ...state,
            recommend: action.payload.subProductMainPageResponses,
            isLoading: false,
         }
      })
      builder.addCase(getStock.pending, (state) => {
         return {
            ...state,
            isLoading: true,
         }
      })
      builder.addCase(getNovelities.pending, (state) => {
         return {
            ...state,
            isLoading: true,
         }
      })
      builder.addCase(getRecommend.pending, (state) => {
         return {
            ...state,
            isLoading: true,
         }
      })
      builder.addCase(getStock.rejected, (state) => {
         return {
            ...state,
            isLoading: false,
         }
      })
      builder.addCase(getNovelities.rejected, (state) => {
         return {
            ...state,
            isLoading: false,
         }
      })
      builder.addCase(getRecommend.rejected, (state) => {
         return {
            ...state,
            isLoading: false,
         }
      })
      builder.addCase(getBanners.fulfilled, (state, action) => {
         state.banner = action.payload
         state.isLoading = false
      })
      builder.addCase(getBanners.rejected, (state) => {
         return { ...state, isLoading: false }
      })
      builder.addCase(getBanners.pending, (state) => {
         return { ...state, isLoading: true }
      })
   },
})
