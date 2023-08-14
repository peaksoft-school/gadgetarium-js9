import { configureStore } from '@reduxjs/toolkit'
import { mainPageSlice } from './main.page/main.page.slice'

export const store = configureStore({
   reducer: {
      [mainPageSlice.name]: mainPageSlice.reducer,
   },
})
