import { createAsyncThunk } from '@reduxjs/toolkit'
import { postBasketByIdRequest } from '../../api/mainPage.service'

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
