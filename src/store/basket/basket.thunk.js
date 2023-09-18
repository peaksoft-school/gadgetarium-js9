import { createAsyncThunk } from '@reduxjs/toolkit'
import { postBasketByIdRequest } from '../../api/mainPage.service'
import { postBasketCounterProductRequest } from '../../api/getById.service'

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
export const postBasketQuantity = createAsyncThunk(
   'product/postBasketQuantity',
   async ({ data, snackbarHandler }, { rejectWithValue }) => {
      try {
         const responce = await postBasketCounterProductRequest(data)
         snackbarHandler({
            message: 'Товар успешно добавлен в корзину',
            linkText: 'Перейти в корзину',
            path: '/basket',
         })
         return responce.data
      } catch (error) {
         snackbarHandler({
            message: 'Товар не добавлен в корзину',
            type: 'error',
         })
         return rejectWithValue(error)
      }
   }
)
