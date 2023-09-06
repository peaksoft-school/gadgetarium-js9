import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteAllBasketGoodsRequest,
   getBasketRequest,
   postBasketByIdRequest,
} from '../../api/basket.service'
import { addAllFavoriteGoodsRequest } from '../../api/favoriteService'

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
export const deleteAllBasketGoods = createAsyncThunk(
   'basket/deleteAllBasketGoods',
   async (payload, { rejectWithValue }) => {
      try {
         await deleteAllBasketGoodsRequest(payload)
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
export const addAllFavoriteGoods = createAsyncThunk(
   'basket/addAllFavoriteGoods',
   async (payload, { rejectWithValue }) => {
      try {
         await addAllFavoriteGoodsRequest(payload)
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
