import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteFavoriteItemsRequest,
   getFavoriteItemsRequest,
   postFavoriteItemRequest,
} from '../../api/favoriteService'
import { useSnackbar } from '../../hooks/useSnackbar'
import {
   getNovelities,
   getRecommend,
   getStock,
} from '../main.page/main.page.thunk'
import { getBasket } from '../basket/basket.thunk'

const { snackbarHandler } = useSnackbar()

export const getFavoriteItems = createAsyncThunk(
   'favorite/getFavoriteItems',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getFavoriteItemsRequest()
         return response.data
      } catch (error) {
         rejectWithValue(error)
      }
      return []
   }
)
export const deleteFavoriteItems = createAsyncThunk(
   'favorite/deleteFavoriteItems',
   async (_, { rejectWithValue, dispatch }) => {
      try {
         await deleteFavoriteItemsRequest()
         dispatch(getFavoriteItems())
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
export const postFavoriteItem = createAsyncThunk(
   'favorite/postFavoriteItems',
   async (
      { id, favoriteState, pageSize, sendSelectedCategoriesHandler },
      { rejectWithValue, dispatch }
   ) => {
      try {
         await postFavoriteItemRequest(id)
         if (pageSize) {
            dispatch(
               getNovelities({
                  page: 1,
                  pageSize,
               })
            )
            dispatch(getRecommend({ page: 1, pageSize }))
            dispatch(getStock({ page: 1, pageSize }))
         }
         dispatch(getFavoriteItems())
         dispatch(getBasket())
         if (sendSelectedCategoriesHandler) {
            sendSelectedCategoriesHandler()
         }
         if (favoriteState) {
            snackbarHandler({
               message: 'Товар удален из избранных',
            })
         } else {
            snackbarHandler({
               message: 'Товар добавлен в избранные',
               linkText: 'Перейти в избранное ',
               path: '/favorite',
            })
         }
      } catch (error) {
         snackbarHandler({ message: error.message, type: 'error' })
         rejectWithValue(error)
      }
   }
)
