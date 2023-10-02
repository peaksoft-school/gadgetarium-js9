import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteAllListProductsRequest,
   getAllCompareGoodsRequest,
   getCompareRequest,
   getCountProductRequest,
   postCompareProductRequest,
} from '../../api/compare.service'
import { useSnackbar } from '../../hooks/useSnackbar'
import {
   getNovelities,
   getRecommend,
   getStock,
} from '../main.page/main.page.thunk'
import { getFavoriteItems } from '../favorite/favorite.thunk'

const { snackbarHandler } = useSnackbar()
export const getAllCompareGoods = createAsyncThunk(
   'compare/getAllCompareGoods',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getAllCompareGoodsRequest()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getCompare = createAsyncThunk(
   'compare/getCompare',
   async (prodName, { rejectWithValue }) => {
      try {
         const response = await getCompareRequest(prodName)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getCountProduct = createAsyncThunk(
   'compare/getCountProduct',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getCountProductRequest()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postCompareProduct = createAsyncThunk(
   'compare/postCompareProduct',
   async (
      { id, addOrDelete, pageSize, productName, sendSelectedCategoriesHandler },
      { rejectWithValue, dispatch }
   ) => {
      try {
         await postCompareProductRequest(id, addOrDelete)
         dispatch(getCountProduct())
         if (productName) {
            dispatch(getCompare(productName))
         }
         dispatch(getAllCompareGoods())
         dispatch(getFavoriteItems())
         if (pageSize !== 0) {
            dispatch(getNovelities({ page: 1, pageSize }))
            dispatch(getRecommend({ page: 1, pageSize }))
            dispatch(getStock({ page: 1, pageSize }))
         }
         if (sendSelectedCategoriesHandler) {
            sendSelectedCategoriesHandler()
         }
         if (!addOrDelete) {
            snackbarHandler({
               message: 'Товар удален из сравнения',
            })
         } else {
            snackbarHandler({
               message: 'Товар добавлен в сравнения',
               linkText: 'Перейти в сравнение ',
               path: '/compare',
            })
         }
      } catch (error) {
         if (!addOrDelete) {
            snackbarHandler({
               message: 'Товар не удален из сравнения',
               type: 'error',
            })
         } else {
            snackbarHandler({
               message: 'Товар не добавлен в сравнения',
               type: 'error',
            })
         }
         rejectWithValue(error)
      }
   }
)

export const deleteAllListProducts = createAsyncThunk(
   'compare/deleteAllListProducts',
   async (
      { deleteAll, productName, snackbarHandler },
      { rejectWithValue, dispatch }
   ) => {
      try {
         await deleteAllListProductsRequest(deleteAll)
         dispatch(getCountProduct())
         dispatch(getCompare(productName))
         dispatch(getAllCompareGoods())

         snackbarHandler({
            message: 'Все товары успешно удалены из сравнения',
         })
      } catch (error) {
         snackbarHandler({
            message: 'Все товары не удалены из сравнения',
            type: 'error',
         })
         rejectWithValue(error)
      }
   }
)
