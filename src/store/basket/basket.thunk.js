import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getBasketRequest,
   postBasketByIdRequest,
} from '../../api/basket.service'

export const postBasketById = createAsyncThunk(
   'basket/postBasketById',
   async ({ id, snackbarHandler }, { rejectWithValue }) => {
      try {
         await postBasketByIdRequest(id)
         snackbarHandler({
            message: 'Товар успешно добавлен в корзину',
            linkText: 'Перейти в корзину',
            path: '/basket',
         })
      } catch (error) {
         snackbarHandler({
            message: 'Товар не добавлен в корзину',
            type: 'error',
         })
         rejectWithValue(error)
      }
   }
)
export const getBasket = createAsyncThunk(
   'basket/getBasket',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getBasketRequest()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
