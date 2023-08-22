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
   // const token = store.getState().login.accessToken
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2OTQ1MDE2NDAsImlhdCI6MTY5MjY4NzI0MCwidXNlcm5hbWUiOiJ1c2VyQGdtYWlsLmNvbSJ9.nbABOEBySTV5TUkSw1-lGJs9ZLQeHTuX8qKQVMUPIKrkU98PRRKZz_Y-AhOB-PNld-TnED2Uacl-wSXhpRfBlQ'
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
