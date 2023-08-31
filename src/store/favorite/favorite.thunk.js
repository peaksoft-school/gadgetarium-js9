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
      {
         id,
         favoriteState,
         noveltiesPageSize,
         recommendPageSize,
         stockPageSize,
      },
      { rejectWithValue, dispatch }
   ) => {
      try {
         await postFavoriteItemRequest(id)
         dispatch(getNovelities({ page: 1, pageSize: noveltiesPageSize }))
         dispatch(getRecommend({ page: 1, pageSize: recommendPageSize }))
         dispatch(getStock({ page: 1, pageSize: stockPageSize }))
         dispatch(getFavoriteItems())
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
         snackbarHandler({
            message: `Товар удален из избранных`,
         })
      } catch (error) {
         snackbarHandler({ message: error.message, type: 'error' })
         rejectWithValue(error)
      }
   }
)
