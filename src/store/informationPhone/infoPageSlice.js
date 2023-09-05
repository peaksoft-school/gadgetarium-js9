import { createSlice } from '@reduxjs/toolkit'
import { getInfoPage } from './infoPageThunk'

const initialState = {
   infoPhone: {},
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
   },
})
