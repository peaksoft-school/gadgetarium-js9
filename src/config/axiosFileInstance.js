import axios from 'axios'
import { BASE_URL } from '../utils/common/constants/globalConstants'
import { logOut } from '../store/auth/authThunk'

const headers = {
   'Content-Type': 'multipart/form-data',
}

export const axiosFileInstance = axios.create({
   baseURL: BASE_URL,
   headers,
})

let store

export const injectStoreFile = (_store) => {
   store = _store
}

axiosFileInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   const { token } = store.getState().auth

   if (token) {
      updatedConfig.headers.Authorization = `Bearer ${token}`
   }
   return updatedConfig
})

axiosFileInstance.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },
   (error) => {
      if (error.response.status === 401) {
         store.dispatch(logOut())
      }
      return Promise.reject(error)
   }
)
