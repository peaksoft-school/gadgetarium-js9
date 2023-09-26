import { createSlice } from '@reduxjs/toolkit'
import { getGlobalSearch } from './global.search.thunk'

const initialState = {
   globalSearch: {
      brandList: [],
      categoryList: [],
      subProductResponses: [],
   },
   isLoading: false,
}

export const globalSearchSlice = createSlice({
   name: 'globalSearch',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getGlobalSearch.fulfilled, (state, action) => {
         state.globalSearch = action.payload
      })
      builder.addCase(getGlobalSearch.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getGlobalSearch.rejected, (state) => {
         state.isLoading = false
      })
   },
})

export const globalSearchActions = globalSearchSlice.actions
