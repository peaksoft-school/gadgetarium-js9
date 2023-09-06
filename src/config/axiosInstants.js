import axios from 'axios'
import { BASE_URL } from '../utils/common/constants/globalConstants'
import { logOut } from '../store/auth/authThunk'

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
   // const { token } = store.getState().auth
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2OTU3Mzk2MjEsImlhdCI6MTY5MzkyNTIyMSwidXNlcm5hbWUiOiJ1c2VyMDFAZ21haWwuY29tIn0.DqqU4cG43gI1noyDyeKG1vH7FJBPqbSeMd04MoHWm9D6T9abuuWvdN2fTmJzi3-XmcGrccBRxYLm-jFvh4ddZQ'

   if (token) {
      updatedConfig.headers.Authorization = `Bearer ${token}`
   }
   return updatedConfig
})

axiosInstance.interceptors.response.use(
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
