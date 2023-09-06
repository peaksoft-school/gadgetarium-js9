import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteAllBasketGoodsRequest,
   deleteBasketByIdRequest,
   getBasketRequest,
   postBasketByIdRequest,
} from '../../api/basket.service'
import { addAllFavoriteGoodsRequest } from '../../api/favoriteService'
import { useSnackbar } from '../../hooks/useSnackbar'

const { snackbarHandler } = useSnackbar()
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
export const postBasketById = createAsyncThunk(
   'basket/postBasketById',
   async ({ id, needSnackbar }, { rejectWithValue, dispatch }) => {
      try {
         await postBasketByIdRequest(id)
         if (needSnackbar) {
            snackbarHandler({
               message: 'Товар успешно добавлен в корзину',
               linkText: 'Перейти в корзину',
               path: '/basket',
            })
         }
         dispatch(getBasket())
      } catch (error) {
         if (needSnackbar) {
            snackbarHandler({
               message: 'Товар не добавлен в корзину',
               type: 'error',
            })
         }
         rejectWithValue(error)
      }
   }
)
export const deleteBasketById = createAsyncThunk(
   'basket/deleteBasketById',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         await deleteBasketByIdRequest(id)
         dispatch(getBasket())
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
export const deleteAllBasketGoods = createAsyncThunk(
   'basket/deleteAllBasketGoods',
   async (payload, { rejectWithValue, dispatch }) => {
      try {
         await deleteAllBasketGoodsRequest(payload)
         dispatch(getBasket())
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
export const addAllFavoriteGoods = createAsyncThunk(
   'basket/addAllFavoriteGoods',
   async (payload, { rejectWithValue, dispatch }) => {
      try {
         await addAllFavoriteGoodsRequest(payload)
         dispatch(getBasket())

         snackbarHandler({
            message: 'Товары успешно добавлену в корзину',
            path: '/favorite',
            linkText: 'Перейти в избранные',
         })
      } catch (error) {
         snackbarHandler({
            message: 'Товары не добавлены в корзину',
            type: 'error',
         })
         rejectWithValue(error)
      }
   }
)
