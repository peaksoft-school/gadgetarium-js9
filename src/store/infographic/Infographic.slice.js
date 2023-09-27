import { createSlice } from '@reduxjs/toolkit'
import {
   getInfoDayRequest,
   getInfoMonthRequest,
   getInfoYearRequest,
} from './Infographic.thunk'

const initialState = {
   infographic: {
      day: {},
      month: {},
      year: {},
   },
}

export const infographicSlice = createSlice({
   name: 'infographic',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getInfoDayRequest.fulfilled, (state, action) => {
         return {
            ...state,
            infographic: { ...state.infographic, day: action.payload },
         }
      })

      builder.addCase(getInfoMonthRequest.fulfilled, (state, action) => {
         return {
            ...state,
            infographic: { ...state.infographic, month: action.payload },
         }
      })

      builder.addCase(getInfoYearRequest.fulfilled, (state, action) => {
         return {
            ...state,
            infographic: { ...state.infographic, year: action.payload },
         }
      })
   },
})

export const ActionsType = infographicSlice.actions
