import axios from 'axios'
import { BASE_URL } from '../utils/common/constants/globalConstants'

const headers = {
   'Content-Type': 'application/json',
}

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers,
})

let store

export const injectStore = (_store) => {
   store = _store
}
axiosInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2OTM4MTc1NDAsImlhdCI6MTY5MjAwMzE0MCwidXNlcm5hbWUiOiJ1c2VyQGdtYWlsLmNvbSJ9.UKTT7I-xoIOonANkbSTv9-q-e6Mu4uCwuWFCe5Uui_1PlXVoMqKX3kgzOyPQWVQhZFARbxfzbXgIRHUiwV5ymQ'
   if (token) {
      updatedConfig.headers.Authorization = `Bearer ${token}`
   }
   return updatedConfig
})

// !
const logoutAction = () => {}

axiosInstance.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },
   (error) => {
      if (error.response.status === 401) {
         store.dispatch(logoutAction())
      }
      return Promise.reject(error)
   }
)
