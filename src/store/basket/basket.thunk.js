import { createAsyncThunk } from '@reduxjs/toolkit'
import { postBasketByIdRequest } from '../../api/mainPage.service'

export const postBasketById = createAsyncThunk(
   'basket/postBasketById',
   async (id, { rejectWithValue }) => {
      try {
         await postBasketByIdRequest(id)
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
